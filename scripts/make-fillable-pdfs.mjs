/**
 * Generate fillable PDFs for Marcel.
 *
 *   1. Legal Questions for Marcel     -> Desktop
 *   2. Placeholders Tracker           -> Desktop
 *
 * Each question becomes a labeled, multi-line text field that Marcel can
 * type into directly in any PDF reader (Adobe, Preview, Edge, Foxit).
 */

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const desktop = path.join(os.homedir(), "Desktop");

// ---------- shared layout ----------

const PAGE_W = 595.28; // A4
const PAGE_H = 841.89;
const MARGIN_X = 56;
const MARGIN_TOP = 60;
const MARGIN_BOTTOM = 56;

const COLOR_HEAD = rgb(0.24, 0.17, 0.11); // espresso
const COLOR_BODY = rgb(0.1, 0.08, 0.06);
const COLOR_MUTED = rgb(0.42, 0.32, 0.27);
const COLOR_GOLD = rgb(0.79, 0.64, 0.35);
const COLOR_FIELD_BG = rgb(0.96, 0.945, 0.92);
const COLOR_FIELD_BORDER = rgb(0.85, 0.78, 0.62);

async function makeDoc({ title, intro, sections, outputName }) {
  const pdf = await PDFDocument.create();
  pdf.setTitle(title);
  pdf.setAuthor("RoseyCo");
  pdf.setProducer("RoseyCo / Raha Resort");

  const helv = await pdf.embedFont(StandardFonts.Helvetica);
  const helvBold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const helvItalic = await pdf.embedFont(StandardFonts.HelveticaOblique);
  const serifBold = await pdf.embedFont(StandardFonts.TimesRomanBold);

  const form = pdf.getForm();

  let page = pdf.addPage([PAGE_W, PAGE_H]);
  let y = PAGE_H - MARGIN_TOP;

  const newPage = () => {
    page = pdf.addPage([PAGE_W, PAGE_H]);
    y = PAGE_H - MARGIN_TOP;
    drawHeaderBar();
  };

  const ensureSpace = (need) => {
    if (y - need < MARGIN_BOTTOM) newPage();
  };

  const drawHeaderBar = () => {
    page.drawLine({
      start: { x: MARGIN_X, y: PAGE_H - 38 },
      end: { x: PAGE_W - MARGIN_X, y: PAGE_H - 38 },
      thickness: 0.6,
      color: COLOR_GOLD,
    });
    page.drawText("RAHA RESORT", {
      x: MARGIN_X,
      y: PAGE_H - 28,
      size: 8,
      font: helvBold,
      color: COLOR_GOLD,
    });
  };

  drawHeaderBar();

  // Title
  page.drawText(title, {
    x: MARGIN_X,
    y,
    size: 22,
    font: serifBold,
    color: COLOR_HEAD,
  });
  y -= 14;
  page.drawLine({
    start: { x: MARGIN_X, y: y - 4 },
    end: { x: MARGIN_X + 60, y: y - 4 },
    thickness: 1.2,
    color: COLOR_GOLD,
  });
  y -= 24;

  // Intro
  if (intro) {
    const wrapped = wrapText(intro, 84);
    for (const line of wrapped) {
      ensureSpace(14);
      page.drawText(line, {
        x: MARGIN_X,
        y,
        size: 10.5,
        font: helv,
        color: COLOR_BODY,
        lineHeight: 14,
      });
      y -= 14;
    }
    y -= 8;
  }

  let fieldCounter = 0;

  for (const section of sections) {
    ensureSpace(46);
    // Section title
    page.drawText(section.title, {
      x: MARGIN_X,
      y,
      size: 13,
      font: serifBold,
      color: COLOR_HEAD,
    });
    y -= 5;
    page.drawLine({
      start: { x: MARGIN_X, y: y - 1 },
      end: { x: PAGE_W - MARGIN_X, y: y - 1 },
      thickness: 0.4,
      color: COLOR_GOLD,
    });
    y -= 18;

    for (const q of section.questions) {
      // Each question: label + helper line + field
      const labelLines = wrapText(q.label, 88);
      const helperLines = q.helper ? wrapText(q.helper, 92) : [];
      const fieldH = q.height ?? 36;
      const blockH =
        labelLines.length * 13 +
        (helperLines.length ? helperLines.length * 11 + 4 : 0) +
        fieldH +
        16;

      ensureSpace(blockH);

      for (const line of labelLines) {
        page.drawText(line, {
          x: MARGIN_X,
          y,
          size: 10.5,
          font: helvBold,
          color: COLOR_BODY,
        });
        y -= 13;
      }

      if (helperLines.length) {
        y -= 2;
        for (const line of helperLines) {
          page.drawText(line, {
            x: MARGIN_X,
            y,
            size: 9,
            font: helvItalic,
            color: COLOR_MUTED,
          });
          y -= 11;
        }
      }

      y -= 6;

      const fieldName = `field_${++fieldCounter}_${slug(q.label).slice(0, 60)}`;
      const tf = form.createTextField(fieldName);
      tf.setText(q.prefill ?? "");
      tf.enableMultiline();
      tf.addToPage(page, {
        x: MARGIN_X,
        y: y - fieldH,
        width: PAGE_W - MARGIN_X * 2,
        height: fieldH,
        backgroundColor: COLOR_FIELD_BG,
        borderColor: COLOR_FIELD_BORDER,
        borderWidth: 0.6,
        font: helv,
      });
      tf.setFontSize(10);
      y -= fieldH + 16;
    }

    y -= 6;
  }

  // Footer line
  ensureSpace(28);
  page.drawText(
    "Filled by:",
    { x: MARGIN_X, y, size: 9, font: helvBold, color: COLOR_MUTED }
  );
  const filledByField = form.createTextField(`signed_by`);
  filledByField.addToPage(page, {
    x: MARGIN_X + 60,
    y: y - 4,
    width: 240,
    height: 18,
    backgroundColor: COLOR_FIELD_BG,
    borderColor: COLOR_FIELD_BORDER,
    borderWidth: 0.6,
    font: helv,
  });
  page.drawText("Date:", {
    x: MARGIN_X + 320,
    y,
    size: 9,
    font: helvBold,
    color: COLOR_MUTED,
  });
  const dateField = form.createTextField(`signed_date`);
  dateField.addToPage(page, {
    x: MARGIN_X + 354,
    y: y - 4,
    width: 130,
    height: 18,
    backgroundColor: COLOR_FIELD_BG,
    borderColor: COLOR_FIELD_BORDER,
    borderWidth: 0.6,
    font: helv,
  });

  // Make form interactive (default appearances on so fields render in any
  // reader without re-saving).
  form.updateFieldAppearances(helv);

  const bytes = await pdf.save();
  const out = path.join(desktop, outputName);
  await writeFile(out, bytes);
  console.log("wrote", out, "size", bytes.byteLength);
}

function wrapText(text, charPerLine) {
  const words = text.split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > charPerLine) {
      if (cur) lines.push(cur);
      cur = w;
    } else {
      cur = cur ? cur + " " + w : w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function slug(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

// ---------- 1. LEGAL QUESTIONS FOR MARCEL ----------

await makeDoc({
  title: "Raha Resort, Legal Pages Open Questions",
  intro:
    "Hi Marcel. Below are the factual items we need confirmed before publishing the seven legal pages on the new Raha Resort website. Type your answer into each box. Drop the file back to us when done. You don't have to answer everything in one go.",
  outputName: "Raha Resort - Legal Questions for Marcel.pdf",
  sections: [
    {
      title: "1. Identity and contact",
      questions: [
        { label: "Registered trading name (the legal entity behind Raha Resort)", height: 28 },
        { label: "Commercial registration number", height: 28 },
        { label: "Full street address in Jericho (postal address for the imprint)", height: 50 },
        { label: "VAT or Tax ID", height: 28 },
        {
          label: "Reservations email address",
          helper: "Currently shown as reservations@raharesort.com. Confirm or replace.",
          prefill: "reservations@raharesort.com",
          height: 26,
        },
        {
          label: "Reservations phone number",
          helper: "Currently shown as +970 ...",
          prefill: "+970 ",
          height: 26,
        },
        { label: "Named person responsible for content (for press and legal correspondence)", height: 28 },
      ],
    },
    {
      title: "2. Booking, check-in, and refunds",
      questions: [
        {
          label: "Standard check-in time",
          helper: "We used 15:00 as a placeholder.",
          prefill: "15:00",
          height: 22,
        },
        {
          label: "Standard check-out time",
          helper: "We used 12:00 as a placeholder.",
          prefill: "12:00",
          height: 22,
        },
        {
          label: "Standard cancellation window before arrival when a refund is owed",
          helper: "We used 48 hours as a placeholder.",
          prefill: "48 hours",
          height: 26,
        },
        {
          label: "Refund processing time on Raha's side",
          helper: "We used 5 to 10 business days as a placeholder.",
          prefill: "5 to 10 business days",
          height: 26,
        },
        {
          label: "Currency convention for displayed rates",
          helper: "ILS, USD, JOD, or other?",
          height: 22,
        },
        {
          label: "Smoking policy on the property",
          helper: "Default text says all rooms are non-smoking. Note any smoking-permitted areas if applicable.",
          height: 40,
        },
      ],
    },
    {
      title: "3. Privacy and data",
      questions: [
        {
          label: "Local hospitality and tax retention period for guest records",
          helper: "How long Palestinian regulations require keeping booking records.",
          height: 36,
        },
        {
          label: "International transfer mechanism for any data crossing borders",
          helper: "Provider Standard Contractual Clauses, adequacy reliance, or similar.",
          height: 36,
        },
        {
          label: "Confirmed analytics tool",
          helper: "Will the live site use Vercel Analytics, Plausible, Fathom, Google Analytics, or none?",
          height: 28,
        },
      ],
    },
    {
      title: "4. Jurisdiction",
      questions: [
        {
          label: "Governing law clause and competent courts",
          helper: "Should disputes be handled under Palestinian law? Should we name Jericho courts as the venue?",
          height: 50,
        },
      ],
    },
    {
      title: "5. Accessibility",
      questions: [
        {
          label: "On-property accessibility limitations to disclose",
          helper: "For example: a wing without lift access, certain rooms not step-free, etc. Leave blank if none.",
          height: 60,
        },
      ],
    },
    {
      title: "Anything else",
      questions: [
        {
          label: "Notes, corrections, or things we missed",
          height: 80,
        },
      ],
    },
  ],
});

// ---------- 2. PLACEHOLDERS TRACKER ----------

await makeDoc({
  title: "Raha Resort, Site Placeholders Tracker",
  intro:
    "Every fake or TBD item still in the codebase. As real values come in, write them in the matching field. We'll find-and-replace from this sheet.",
  outputName: "Raha Resort - Placeholders Tracker.pdf",
  sections: [
    {
      title: "Reservations",
      questions: [
        {
          label: "Reservation phone (display)",
          helper: "Currently +970 0 000 0000.",
          prefill: "+970 0 000 0000",
          height: 22,
        },
        {
          label: "Reservation phone (tel: link)",
          helper: "Currently tel:+97000000000.",
          prefill: "+97000000000",
          height: 22,
        },
        {
          label: "Reservations hours",
          helper: "Currently \"Daily, 8:00 to 22:00\". Confirm.",
          prefill: "Daily, 8:00 to 22:00",
          height: 22,
        },
        {
          label: "Pool / events / spa direct lines",
          helper: "Same number as reservations or different? List each.",
          height: 50,
        },
      ],
    },
    {
      title: "Social media URLs",
      questions: [
        { label: "Facebook URL", height: 22 },
        { label: "Instagram URL", height: 22 },
        { label: "X (Twitter) URL", height: 22 },
        { label: "LinkedIn URL", height: 22 },
        { label: "TikTok URL", height: 22 },
        { label: "YouTube URL (optional)", height: 22 },
      ],
    },
    {
      title: "Newsletter / forms",
      questions: [
        {
          label: "Email service provider for newsletter",
          helper: "Mailchimp, Brevo, Klaviyo, Beehiiv, Resend, etc. With a list ID if we have one.",
          height: 36,
        },
        {
          label: "Contact form destination",
          helper: "Where do contact form submissions go (email, CRM)? Provide endpoint or address.",
          height: 30,
        },
      ],
    },
    {
      title: "Brand assets",
      questions: [
        {
          label: "Canonical logo file to use across the site",
          helper: "We have raha-logo.png and Raha Resort Logo.png in /public. Pick one.",
          height: 28,
        },
      ],
    },
    {
      title: "Imagery",
      questions: [
        {
          label: "Replacement photography (gym, tours)",
          helper: "Old r29-r36 placeholders still used for gym and tours. Production photography to replace?",
          height: 50,
        },
      ],
    },
    {
      title: "Copy",
      questions: [
        {
          label: "Founder / family story for About page",
          helper: "Optional but it helps. Year founded, founder name(s), why Jericho.",
          height: 80,
        },
        {
          label: "Things to specifically NOT say in copy",
          helper: "We already avoid em dashes, \"unmatched\", \"timeless hospitality\", \"warm hospitality\".",
          height: 36,
        },
      ],
    },
    {
      title: "Misc",
      questions: [
        {
          label: "Pricing / room rate display preferences",
          helper: "Show rates publicly? Currency? \"From X per night\" format?",
          height: 40,
        },
        {
          label: "Cookie consent banner provider",
          helper: "Cookiebot, Termly, Iubenda, custom, none?",
          height: 28,
        },
        {
          label: "Anything we forgot",
          height: 80,
        },
      ],
    },
  ],
});

console.log("done.");

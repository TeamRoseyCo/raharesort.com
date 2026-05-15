import LegalShell, { Section } from "../LegalShell";

export const metadata = {
  title: "Accessibility Statement | Raha Resort",
};

export default function AccessibilityPage() {
  return (
    <LegalShell
      title="Accessibility Statement"
      intro="Our commitment to making Raha Resort and this website welcoming for every guest."
    >
      <Section title="Our Commitment">
        <p>
          Raha Resort is committed to making our website and our property
          usable by as many guests as possible, including people with
          disabilities and people using assistive technology. We aim to meet
          the Web Content Accessibility Guidelines (WCAG) 2.1, level AA, on
          raharesort.com.
        </p>
        <p>
          Accessibility is treated as part of design and content review, not
          an afterthought. We work on improvements continuously as the site
          and the property evolve.
        </p>
      </Section>

      <Section title="What We Do on the Website">
        <p>To support assistive technology and varied input methods, we:</p>
        <ul>
          <li>Use semantic HTML and labelled landmarks.</li>
          <li>
            Provide text alternatives for meaningful images and avoid
            information conveyed by color alone.
          </li>
          <li>
            Aim for clear color contrast, scalable text, and a layout that
            works on mobile, tablet, and desktop.
          </li>
          <li>Support keyboard navigation and visible focus styles.</li>
          <li>
            Test with screen readers and keyboard-only flows during
            development.
          </li>
        </ul>
      </Section>

      <Section title="On-Property Accessibility">
        <p>
          We are a small family-run resort and do our best to welcome guests
          with a range of needs. Where practical, we offer:
        </p>
        <ul>
          <li>Step-free entry to main public areas.</li>
          <li>
            Guest rooms suitable for guests with mobility needs, subject to
            availability.
          </li>
          <li>
            Staff who can assist guests with mobility, hearing, or vision
            needs, including help with luggage, orientation, and reading
            menus or signage.
          </li>
          <li>
            Quiet areas at certain times of day for guests who prefer a
            calmer environment.
          </li>
        </ul>
        <p>
          Please call or email us before you book so we can confirm what is
          available for your dates and prepare for your arrival.
        </p>
      </Section>

      <Section title="Known Limitations">
        <p>
          Some parts of the website and property may not yet meet our target
          standard. Known areas we are working on include:
        </p>
        <ul>
          <li>
            Older photography that does not yet have detailed alternative
            text.
          </li>
          <li>
            Third-party embeds (such as maps) that we do not fully control.
          </li>
          <li>
            Specific older areas of the property where step-free access is
            limited: [On-property limitations to be confirmed].
          </li>
        </ul>
        <p>
          If you find a barrier we have not listed, please tell us so we can
          fix it.
        </p>
      </Section>

      <Section title="Alternative Ways to Reach Us">
        <p>
          If any part of the website is not accessible to you, you can also
          book and contact us directly:
        </p>
        <ul>
          <li>Phone: 02-2313333</li>
          <li>Email: [reservations@raharesort.com]</li>
          <li>In person at the front desk during your stay.</li>
        </ul>
      </Section>

      <Section title="Reporting an Accessibility Issue">
        <p>
          If you encounter a barrier on this website or at the resort, please
          contact us at [reservations@raharesort.com] or 02-2313333 with a
          short description of the problem and, where helpful, the page URL
          or area of the property. We aim to respond within a reasonable
          time and to fix issues as quickly as we can.
        </p>
      </Section>

      <Section title="Updates to This Statement">
        <p>
          We review this statement regularly and update it when our website
          or facilities change. The date at the bottom of the page shows when
          it was last revised.
        </p>
      </Section>
    </LegalShell>
  );
}

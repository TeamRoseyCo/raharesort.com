import LegalShell, { Section } from "../LegalShell";

export const metadata = {
  title: "Privacy Policy | Raha Resort",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      intro="How Raha Resort collects, uses, and protects guest information."
    >
      <Section title="Who We Are">
        <p>
          Raha Resort is a small family-run hotel in Jericho, Palestine (West
          Bank). We are the controller of the personal information described
          in this policy. You can reach us at [reservations@raharesort.com] or
          [+970 …].
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>
          We collect only what we need to take a booking, host your stay, and
          run our website. The categories of information are:
        </p>
        <ul>
          <li>
            Booking and guest details: name, contact details, travel dates,
            number of guests, room preferences, special requests, and ID
            details where required by local hospitality regulations at
            check-in.
          </li>
          <li>
            Payment information: processed by our payment partner. We do not
            store full card numbers on our own systems.
          </li>
          <li>
            Communications: emails, calls, and messages exchanged with our
            reservations or front office team.
          </li>
          <li>
            Marketing: email address and preferences if you sign up for
            updates.
          </li>
          <li>
            Website usage: basic technical data such as IP address, device and
            browser type, referring page, and pages viewed, collected through
            server logs and privacy-friendly analytics.
          </li>
        </ul>
      </Section>

      <Section title="How We Use Your Information">
        <p>We use your information to:</p>
        <ul>
          <li>Take, confirm, and manage your reservation.</li>
          <li>
            Communicate with you before, during, and after your stay,
            including service messages and follow-up.
          </li>
          <li>Process payments and prevent fraud.</li>
          <li>
            Comply with legal duties such as guest registration, tax records,
            and lawful requests from authorities.
          </li>
          <li>
            Improve the website and our services through aggregated analytics.
          </li>
          <li>
            Send marketing emails where you have opted in. You can withdraw
            consent at any time.
          </li>
        </ul>
      </Section>

      <Section title="Legal Bases">
        <p>
          Where data protection law (including GDPR-style frameworks) applies,
          we rely on the following bases:
        </p>
        <ul>
          <li>
            Contract: to take and perform your reservation and related
            services.
          </li>
          <li>
            Legal obligation: to keep records required by hospitality, tax,
            and law enforcement rules.
          </li>
          <li>
            Legitimate interests: to operate our website securely, prevent
            fraud, and improve our services, balanced against your rights.
          </li>
          <li>
            Consent: for marketing emails and any non-essential cookies. You
            can withdraw this consent at any time.
          </li>
        </ul>
      </Section>

      <Section title="Sharing Your Information">
        <p>
          We do not sell your personal information. We share limited data only
          with parties that help us run the resort and the website:
        </p>
        <ul>
          <li>Payment processors that handle card transactions.</li>
          <li>
            Our property management system and reservation tools used by the
            front office.
          </li>
          <li>Email and communications providers.</li>
          <li>Our website hosting provider, Vercel.</li>
          <li>
            Professional advisors such as accountants and legal counsel, where
            required.
          </li>
          <li>
            Public authorities where disclosure is required by law or to
            protect the safety of guests and staff.
          </li>
        </ul>
      </Section>

      <Section title="International Transfers">
        <p>
          Some of our service providers are located outside Palestine,
          including in the European Union and the United States. Where
          personal data is transferred internationally, we rely on appropriate
          safeguards such as the providers' standard contractual terms and
          their own compliance frameworks. Details of specific transfers are
          available on request: [Specific transfer mechanisms: …].
        </p>
      </Section>

      <Section title="Retention">
        <p>
          We keep personal information only for as long as we need it. Typical
          periods are:
        </p>
        <ul>
          <li>
            Reservation and stay records: kept for the period required by
            local hospitality and tax law: [Local retention period: …].
          </li>
          <li>
            Accounting and invoicing records: kept for the period required by
            tax law.
          </li>
          <li>
            Marketing data: kept until you unsubscribe or ask us to delete it.
          </li>
          <li>
            Website logs and analytics: short retention windows, typically a
            few months.
          </li>
        </ul>
      </Section>

      <Section title="Cookies">
        <p>
          The website uses a small number of cookies and similar technologies.
          You can read what we use and manage your choices on our{" "}
          <a href="/legal/cookies">Cookie Preferences</a> page.
        </p>
      </Section>

      <Section title="Your Rights">
        <p>
          Depending on where you live, you may have the following rights over
          your personal information:
        </p>
        <ul>
          <li>Access to the data we hold about you.</li>
          <li>Correction of inaccurate or incomplete data.</li>
          <li>Erasure of your data, where applicable.</li>
          <li>Restriction or objection to certain processing.</li>
          <li>Portability of data you provided to us.</li>
          <li>Withdrawal of consent at any time, without affecting prior lawful processing.</li>
          <li>
            The right to lodge a complaint with a competent data protection
            authority.
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at
          [reservations@raharesort.com]. We may need to verify your identity
          before responding.
        </p>
      </Section>

      <Section title="Security">
        <p>
          We use reasonable technical and organizational measures to protect
          personal information against loss, misuse, and unauthorized access.
          No system is fully secure, so we also rely on careful staff
          practices and trusted partners.
        </p>
      </Section>

      <Section title="Children">
        <p>
          The website is not directed at children. Bookings are made by
          adults. Where children stay with their families, the booking adult
          provides the relevant information on their behalf.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this policy from time to time. The date at the bottom
          of the page shows when it was last revised. Material changes will be
          highlighted on the website.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          For privacy questions or to exercise your rights, contact us at
          [reservations@raharesort.com] or write to [Raha Resort, …, Jericho,
          Palestine].
        </p>
      </Section>
    </LegalShell>
  );
}

import LegalShell, { Section } from "../LegalShell";

export const metadata = {
  title: "Legal Notice | Raha Resort",
};

export default function LegalNoticePage() {
  return (
    <LegalShell
      title="Legal Notice"
      intro="Information about the entity operating this website and how to reach us with legal inquiries."
    >
      <Section title="Operator">
        <p>
          This website, raharesort.com, is operated by Raha Resort, a small
          family-run hotel located in Jericho, Palestine (West Bank).
        </p>
        <ul>
          <li>Trading name: Raha Resort</li>
          <li>Registered address: [Raha Resort, …, Jericho, Palestine]</li>
          <li>Commercial registration: [Registration number: …]</li>
          <li>Tax identifier: [VAT/Tax ID: …]</li>
        </ul>
      </Section>

      <Section title="Contact">
        <p>
          For general and legal inquiries, please use the contact details below.
          Our reservations team is the primary point of contact and will route
          legal matters internally.
        </p>
        <ul>
          <li>Email: [reservations@raharesort.com]</li>
          <li>Phone: [+970 …]</li>
          <li>Postal address: [Raha Resort, …, Jericho, Palestine]</li>
        </ul>
      </Section>

      <Section title="Responsible for Content">
        <p>
          The person responsible for the content of this website is the
          management of Raha Resort, reachable at the contact details above.
          Specific named contact details for press and legal correspondence will
          be added once finalized: [Responsible contact name and role].
        </p>
      </Section>

      <Section title="Hosting">
        <p>
          This website is hosted by Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, United States. Server logs and basic technical data
          are processed by the hosting provider for the purpose of delivering
          and securing the site. See our Privacy Policy for details.
        </p>
      </Section>

      <Section title="Intellectual Property">
        <p>
          All photography, written content, logos, brand marks, and design
          elements on this site belong to Raha Resort or are used with
          permission of the rights holder. The content is protected by
          applicable copyright and trademark law.
        </p>
        <p>
          You may view and share links to this site for personal, non-commercial
          use. Any other reproduction, redistribution, or commercial use
          requires our prior written consent.
        </p>
      </Section>

      <Section title="External Links and Third-Party Content">
        <p>
          This site may contain links to third-party websites. We do not
          control those sites and are not responsible for their content,
          privacy practices, or availability. Links are provided for
          convenience only and do not imply endorsement.
        </p>
        <p>
          If you believe a link from our site points to unlawful or harmful
          content, please notify us and we will review it promptly.
        </p>
      </Section>

      <Section title="Accuracy of Information">
        <p>
          We take reasonable care to ensure the information on this site is
          accurate, including rates, room descriptions, and facility details.
          However, content may change without notice. The terms applicable to
          your reservation are those communicated to you at the time of
          booking.
        </p>
      </Section>

      <Section title="Dispute Resolution">
        <p>
          We aim to resolve any complaint directly. Please contact us first so
          we can try to find a fair solution.
        </p>
        <p>
          For guests resident in the European Union, the European Commission
          provides an Online Dispute Resolution (ODR) platform at{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . We are not obliged to participate in dispute resolution proceedings
          before a consumer arbitration board, but will indicate our position
          on a case-by-case basis.
        </p>
      </Section>

      <Section title="Governing Law">
        <p>
          This legal notice and any non-contractual obligations arising out of
          or in connection with it are governed by the laws applicable in the
          jurisdiction of the resort: [Governing law and competent courts: …].
        </p>
      </Section>
    </LegalShell>
  );
}

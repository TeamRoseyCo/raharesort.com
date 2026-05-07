import LegalShell, { Section } from "../LegalShell";

export const metadata = {
  title: "Do Not Sell My Info | Raha Resort",
};

export default function DoNotSellPage() {
  return (
    <LegalShell
      title="Do Not Sell My Info"
      intro="Your right to opt out of any sale or sharing of your personal information."
    >
      <Section title="Our Position">
        <p>
          Raha Resort does not sell your personal information for money, and
          we do not share it for cross-context behavioral advertising. We use
          your information to take and run your booking and to operate our
          website, as described in our{" "}
          <a href="/legal/privacy">Privacy Policy</a>.
        </p>
        <p>
          Some privacy laws, including the California Consumer Privacy Act
          (CCPA) as amended by the CPRA, require us to publish this page
          regardless of our practices. If our practices ever change, we will
          update this page and our Privacy Policy and ask for your consent
          where it is required.
        </p>
      </Section>

      <Section title="What &quot;Sale&quot; and &quot;Share&quot; Mean Here">
        <p>
          Under these laws, the words &quot;sale&quot; and &quot;share&quot;
          can include exchanges of personal information that do not involve
          money, such as making data available to advertising networks for
          targeted ads. We are giving you the right to opt out of any such
          activity, even though we do not currently engage in it.
        </p>
      </Section>

      <Section title="Categories of Information Involved">
        <p>
          The categories of personal information we handle are listed in our
          Privacy Policy and include booking and contact details, payment
          information processed by our payment partner, communications with
          our team, and basic website usage data.
        </p>
      </Section>

      <Section title="How to Submit a Request">
        <p>
          You can submit an opt-out or do-not-sell-or-share request in any of
          the following ways:
        </p>
        <ul>
          <li>Email: [reservations@raharesort.com] with the subject &quot;Do Not Sell or Share&quot;.</li>
          <li>Phone: [+970 …].</li>
          <li>Post: [Raha Resort, …, Jericho, Palestine].</li>
        </ul>
        <p>
          Authorized agents may submit a request on your behalf with written
          permission. We may need to verify your identity before we can
          confirm or act on a request.
        </p>
      </Section>

      <Section title="Our Response Time">
        <p>
          We will confirm receipt promptly and respond within the time
          required by applicable law, typically within 15 business days for
          opt-out requests and within 45 days for broader requests, with one
          permitted extension where reasonably necessary.
        </p>
      </Section>

      <Section title="No Discrimination">
        <p>
          You will not receive different prices or different service quality
          for exercising your privacy rights.
        </p>
      </Section>

      <Section title="Other Rights">
        <p>
          Depending on where you live, you may also have rights to access,
          correct, delete, and port your personal information, and to limit
          the use of sensitive personal information. See the Your Rights
          section of our <a href="/legal/privacy">Privacy Policy</a> for
          details and to learn how to use those rights.
        </p>
      </Section>
    </LegalShell>
  );
}

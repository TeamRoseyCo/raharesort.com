import LegalShell, { Section } from "../LegalShell";

export const metadata = {
  title: "Terms & Conditions | Raha Resort",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      intro="The terms that apply to your reservation and stay at Raha Resort."
    >
      <Section title="About These Terms">
        <p>
          These terms govern your use of raharesort.com and any reservation
          you make with Raha Resort. By booking a stay or using the website,
          you agree to these terms. If you do not agree, please do not use the
          site or make a booking.
        </p>
      </Section>

      <Section title="Reservations and Confirmation">
        <p>
          Bookings are currently taken by phone. A reservation is confirmed
          once we have collected the information we need and a valid payment
          guarantee, where required. Rates, taxes, applicable fees, and the
          cancellation rules that apply to your booking are stated to you at
          the time of booking.
        </p>
        <p>
          If we are unable to confirm a booking, for example due to
          availability changes, we will tell you and refund any amount taken
          for that booking.
        </p>
      </Section>

      <Section title="Rates, Taxes, and Payment">
        <p>
          Rates are quoted in [local currency] and include applicable taxes
          unless stated otherwise. We accept the payment methods communicated
          at the time of booking. The full amount is charged according to the
          terms of your specific rate (for example, at booking, on arrival,
          or on departure).
        </p>
      </Section>

      <Section title="Check-in and Check-out">
        <p>
          Standard check-in is from [15:00] and check-out is by [12:00].
          Early arrivals and late departures are subject to availability and
          may carry an additional charge. A valid government-issued ID is
          required at check-in for each adult guest, in line with local
          hospitality regulations.
        </p>
      </Section>

      <Section title="Children and Extra Guests">
        <p>
          Children are welcome. Capacity limits apply per room type and are
          stated at the time of booking. Extra beds or cribs are subject to
          availability and may carry an additional charge. Please tell us the
          number and ages of all guests when you book so we can prepare the
          right room.
        </p>
      </Section>

      <Section title="Cancellations, Modifications, and No-Shows">
        <p>
          The cancellation, modification, and no-show rules that apply to
          your booking are stated at the time of booking and depend on the
          rate you choose. A summary is also available on our{" "}
          <a href="/legal/refund">Refund Policy</a> page. If you need to
          change your plans, contact us as soon as possible so we can help.
        </p>
      </Section>

      <Section title="Conduct on the Property">
        <p>
          We ask all guests to respect other guests, our team, the property,
          and the local community. The following are not allowed:
        </p>
        <ul>
          <li>Behavior that endangers or seriously disturbs other guests or staff.</li>
          <li>Damage to the property, fittings, or shared facilities.</li>
          <li>Smoking outside designated smoking areas.</li>
          <li>Any unlawful activity on the premises.</li>
        </ul>
        <p>
          We reserve the right to refuse service or to ask a guest to leave
          where these rules are seriously breached. Costs of damage caused by
          a guest may be charged to the guest.
        </p>
      </Section>

      <Section title="Liability">
        <p>
          We take reasonable care of guest safety and property. To the extent
          permitted by law, Raha Resort is not liable for:
        </p>
        <ul>
          <li>
            Loss or damage to personal items left unattended in public areas
            or in vehicles.
          </li>
          <li>
            Indirect or consequential losses such as loss of enjoyment beyond
            the value of the unused services.
          </li>
          <li>
            Events outside our reasonable control (see Force Majeure below).
          </li>
        </ul>
        <p>
          Nothing in these terms limits liability that cannot be limited
          under applicable law, such as for personal injury caused by our
          negligence or for fraud.
        </p>
      </Section>

      <Section title="Force Majeure">
        <p>
          We are not responsible for failure or delay in performing our
          obligations where this is caused by events outside our reasonable
          control, such as natural events, public health emergencies, civil
          disturbance, strikes, infrastructure outages, or government
          measures. Where such events affect your stay, we will work with you
          in good faith to reschedule, partially refund, or cancel as
          appropriate.
        </p>
      </Section>

      <Section title="Use of the Website">
        <p>
          You agree to use raharesort.com only for lawful purposes, not to
          attempt to disrupt the site, and not to copy or reuse content other
          than as permitted in our Legal Notice.
        </p>
      </Section>

      <Section title="Governing Law and Jurisdiction">
        <p>
          These terms and any dispute arising from them are governed by the
          law of the jurisdiction in which the resort operates: [Governing
          law: …]. Disputes will be brought before the competent courts of
          [Competent courts: …], without prejudice to any mandatory consumer
          protection rights you have where you live.
        </p>
      </Section>

      <Section title="Changes to These Terms">
        <p>
          We may update these terms from time to time. The version that
          applies to your booking is the one in force on the day you confirm
          the booking. Material changes will be highlighted on the website.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          For any question about these terms, contact us at
          [reservations@raharesort.com] or [+970 …].
        </p>
      </Section>
    </LegalShell>
  );
}

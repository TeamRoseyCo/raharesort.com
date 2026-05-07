import LegalShell, { Section } from "../LegalShell";

export const metadata = {
  title: "Refund Policy | Raha Resort",
};

export default function RefundPage() {
  return (
    <LegalShell
      title="Refund Policy"
      intro="How cancellations, modifications, and refunds are handled at Raha Resort."
    >
      <Section title="How Bookings Are Taken">
        <p>
          Bookings are currently taken by phone. At the time of booking we
          confirm the dates, the room type, the rate, and the cancellation
          and refund rules that apply. The exact rules depend on the rate
          you choose and the season. The version stated to you when you
          confirm the booking is the one that applies to that booking.
        </p>
      </Section>

      <Section title="Standard Cancellation">
        <p>
          For our standard rates, cancellations made at least
          [Cancellation window, e.g. 48 hours] before the check-in date are
          refunded in full, less any non-refundable third-party fees (for
          example, payment processing fees that are not returned to us).
        </p>
        <p>
          Cancellations after that window may be charged a fee equal to the
          first night of the stay.
        </p>
      </Section>

      <Section title="Non-Refundable Rates">
        <p>
          Some promotional or advance-purchase rates are sold as
          non-refundable in exchange for a lower price. With these rates, the
          full amount is charged at booking and is not refunded if you cancel
          or do not arrive. The non-refundable nature of the rate is stated
          to you before you confirm the booking.
        </p>
      </Section>

      <Section title="Modifications">
        <p>
          Date or room changes are subject to availability and may be
          repriced at the rate in force on the new dates. Where allowed by
          your rate, we will try to keep your existing rate if the change is
          minor. If you cannot find dates that work, your standard
          cancellation rules apply.
        </p>
      </Section>

      <Section title="No-Shows">
        <p>
          If you do not arrive on the booked check-in date and have not
          contacted us, we treat the booking as a no-show. The first night is
          charged in full and the rest of the stay is released. If you think
          you may arrive late, please call us so we can hold the room.
        </p>
      </Section>

      <Section title="Early Departure">
        <p>
          If you check out earlier than the booked departure date, the nights
          already used are charged in full. Any unused nights may be charged
          in part or in full, depending on the rate and the notice given.
        </p>
      </Section>

      <Section title="Group Bookings">
        <p>
          Bookings of multiple rooms or events follow specific group terms
          agreed in writing. Those terms may include a deposit, longer
          cancellation windows, and a minimum revenue commitment.
        </p>
      </Section>

      <Section title="Force Majeure and Travel Disruption">
        <p>
          Where events outside your or our reasonable control prevent you
          from travelling or us from hosting you, we will work with you in
          good faith to reschedule the stay or to issue a partial or full
          refund as appropriate. We recommend that international guests hold
          travel insurance.
        </p>
      </Section>

      <Section title="How to Request a Refund">
        <p>
          To cancel, modify, or request a refund, contact our reservations
          team:
        </p>
        <ul>
          <li>Phone: [+970 …]</li>
          <li>Email: [reservations@raharesort.com]</li>
        </ul>
        <p>
          Please have your booking reference, the lead guest name, and the
          original payment method available. We will confirm receipt and
          give you a written confirmation once the cancellation or refund is
          processed.
        </p>
      </Section>

      <Section title="Processing Times">
        <p>
          Approved refunds are issued to the original payment method.
          Typical processing time on our side is [Processing time, e.g. 5 to
          10 business days]. Your bank or card issuer may take additional
          time to show the refund on your statement. For payments by bank
          transfer, processing depends on the receiving bank.
        </p>
      </Section>

      <Section title="Disputes">
        <p>
          If you believe a charge or refund is incorrect, contact us first
          so we can review it together. Please raise any concern within a
          reasonable time after the stay so we can investigate fairly.
        </p>
      </Section>
    </LegalShell>
  );
}

import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import { Section, SectionHead, TwoCol } from "../components/ContentSection";
import Reveal from "../components/Reveal";
import { photo } from "../lib/photos";

const SERVICES = [
  { title: "Airport Transfers", copy: "Comfortable private transfers to and from nearby airports with professional drivers." },
  { title: "City Transfers", copy: "Transportation to nearby cities and attractions with flexible scheduling." },
  { title: "Car Hire", copy: "Rent a vehicle and explore at your own pace with our convenient car hire service." },
  { title: "Private Chauffeur", copy: "Dedicated driver for the duration of your stay for ultimate convenience." },
];

const VEHICLES = [
  { title: "Sedan", copy: "Comfortable sedans for up to 3 passengers with luggage." },
  { title: "SUV", copy: "Spacious SUVs for up to 5 passengers with extra luggage space." },
  { title: "Van", copy: "Spacious vans for groups up to 7 passengers." },
  { title: "Luxury", copy: "Premium vehicles for special occasions and VIP service." },
];

const STEPS = [
  { n: "01", title: "Contact Concierge", copy: "Reach out via phone, email, or in person at the front desk." },
  { n: "02", title: "Share Details", copy: "Share your travel details: date, time, destination, and number of passengers." },
  { n: "03", title: "Receive Confirmation", copy: "Receive confirmation with driver details and pickup information." },
  { n: "04", title: "Enjoy the Ride", copy: "Your driver will meet you at the designated time and location." },
];

export default function TransportPage() {
  return (
    <main>
      <PageHeader
        title="Transport Services"
        bg={photo(2)}
        crumbs={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: "Transport" }]}
      />

      <Section theme="light">
        <SectionHead
          eyebrow="Mobility"
          title="Transportation Services"
          description="From the moment you arrive until your departure, Raha Resort ensures seamless transportation. Our professional drivers and comfortable vehicles make every journey relaxing and stress-free."
        />
      </Section>

      <Section theme="cream">
        <TwoCol
          eyebrow="Airport"
          title="Airport Transfers"
          body={[
            "Start and end your vacation in comfort with our professional airport transfer service.",
            "Our drivers will meet you at the airport with a personalized sign and assist with your luggage, ensuring a smooth transition to or from Raha Resort.",
          ]}
          img={photo(10)}
          imgAlt="Airport transfer"
        />
      </Section>

      <Section theme="light">
        <SectionHead eyebrow="Options" title="Our Services" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="border-t border-[var(--color-accent)] pt-6">
                <h3 className="mb-3 text-[1.15rem] text-[var(--color-secondary)]">{s.title}</h3>
                <p className="text-[0.9rem] leading-[1.7] text-[var(--color-text-light)]">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section theme="cream">
        <SectionHead
          eyebrow="Fleet"
          title="Our Vehicles"
          description="Our fleet features well-maintained, comfortable vehicles to suit every need."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VEHICLES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="bg-white p-6 text-center" style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
                <h3 className="mb-2 text-[1.15rem] text-[var(--color-secondary)]">{v.title}</h3>
                <p className="text-[0.9rem] leading-[1.7] text-[var(--color-text-light)]">{v.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section theme="light">
        <SectionHead
          eyebrow="Process"
          title="Booking Information"
          description="Arranging transportation is easy at Raha Resort. Book in advance for guaranteed availability and the best experience."
        />
        <div className="grid gap-8 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div>
                <span className="font-[family-name:var(--font-heading)] text-[3rem] font-light text-[var(--color-primary-light)]">
                  {s.n}
                </span>
                <h4 className="mb-2 mt-2 text-[1.1rem] text-[var(--color-secondary)]">{s.title}</h4>
                <p className="text-[0.9rem] leading-[1.7] text-[var(--color-text-light)]">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Cta />
      <Footer />
    </main>
  );
}

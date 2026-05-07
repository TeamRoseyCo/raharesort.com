import LegalShell, { Section } from "../LegalShell";

export const metadata = {
  title: "Cookie Preferences | Raha Resort",
};

export default function CookiesPage() {
  return (
    <LegalShell
      title="Cookie Preferences"
      intro="What cookies and similar technologies we use on raharesort.com, why, and how to control them."
    >
      <Section title="What Cookies Are">
        <p>
          Cookies are small text files placed on your device when you visit a
          website. Similar technologies, such as local storage, work the same
          way. They help sites remember your session, recognise return
          visits, and measure how the site is used.
        </p>
      </Section>

      <Section title="Strictly Necessary">
        <p>
          These cookies are required for the website to work. They handle
          session state, security, load balancing, and basic preferences such
          as language. They do not track you across other sites and cannot be
          turned off without breaking core functionality.
        </p>
        <p>
          Typical retention: from a single browsing session up to roughly 12
          months for preference cookies.
        </p>
      </Section>

      <Section title="Analytics">
        <p>
          We use privacy-friendly analytics, currently Vercel Analytics or a
          similar tool, to understand which pages and rooms guests look at
          most often, so we can improve the site over time. These analytics
          aim to avoid building advertising profiles or tracking individuals
          across other websites.
        </p>
        <p>
          Where analytics rely on cookies, we ask for your consent before
          they are set, except where the tool is configured in a fully
          anonymous, cookie-less way.
        </p>
        <p>Typical retention: a few weeks up to roughly 13 months.</p>
      </Section>

      <Section title="Marketing">
        <p>
          We do not currently use advertising or cross-site marketing
          cookies. If this changes in future, we will update this page and
          ask for your consent before any non-essential marketing cookie is
          set.
        </p>
      </Section>

      <Section title="Third-Party Embeds">
        <p>
          Some pages may include embedded content from third parties, such
          as maps or video. Those providers may set their own cookies when
          their content loads. We try to keep these embeds to a minimum and
          to use privacy-respecting modes where available.
        </p>
      </Section>

      <Section title="Managing Your Preferences">
        <p>
          A consent banner with category-level controls will be added to the
          site. Until it is live, you can manage cookies through your browser
          settings:
        </p>
        <ul>
          <li>Block or allow cookies for specific sites.</li>
          <li>Delete cookies that are already stored.</li>
          <li>
            Use a private or incognito window to limit storage to the
            current session.
          </li>
        </ul>
        <p>
          Disabling strictly necessary cookies may stop parts of the site
          from working as expected.
        </p>
      </Section>

      <Section title="Do Not Track and Global Privacy Control">
        <p>
          Where your browser sends a Do Not Track or Global Privacy Control
          signal, we treat it as an opt-out from non-essential analytics
          cookies on this site.
        </p>
      </Section>

      <Section title="Changes to This Page">
        <p>
          As we add or remove tools we will update the categories listed
          here. Material changes will be highlighted on the site.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          For any question about cookies or tracking, contact us at
          [reservations@raharesort.com].
        </p>
      </Section>
    </LegalShell>
  );
}

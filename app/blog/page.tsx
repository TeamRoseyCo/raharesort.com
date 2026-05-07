import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Reveal from "../components/Reveal";
import { PHOTO_LIB, photo } from "../lib/photos";

type Post = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  img: string;
};

const FEATURED: Post = {
  slug: "/blog/dead-sea-guide",
  category: "Travel Guide",
  date: "January 10, 2026",
  readTime: "8 min read",
  title: "The Ultimate Guide to Visiting the Dead Sea: Everything You Need to Know",
  excerpt:
    "Planning a trip to the Dead Sea? Discover everything from the best time to visit, what to bring, health benefits, and insider tips to make the most of your experience at the lowest point on Earth.",
  img: photo(34),
};

/* Placeholder posts removed until real articles are written. The featured
   Dead Sea guide above is the only live article. */
const POSTS: Post[] = [];

export const metadata = {
  title: "Journal",
  description:
    "Stories, guides, and slow notes from Raha Resort and the city of Jericho.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Journal | Raha Resort",
    description:
      "Stories, guides, and slow notes from Raha Resort and the city of Jericho.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        title="Blog"
        bg={photo(35)}
        crumbs={[{ href: "/", label: "Home" }, { label: "Blog" }]}
      />

      {/* Intro */}
      <section
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "5rem 0 2rem" }}
      >
        <div className="container-xl">
          <div className="mx-auto max-w-[760px] text-center">
            <Reveal>
              <span className="t-eyebrow">Stories & Guides</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[var(--color-secondary)]">
                Discover Jericho & Beyond
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                Travel insights, local culture, wellness tips, and everything
                you need to know about experiencing the magic of Jericho and
                the Dead Sea region.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "5rem 0",
        }}
      >
        <div className="container-xl">
          <Reveal y={36}>
            <Link
              href={FEATURED.slug}
              className="group grid overflow-hidden bg-white lg:grid-cols-2"
              style={{
                boxShadow: "0 18px 40px -16px rgba(20,14,8,0.18)",
              }}
            >
              <div className="relative h-[360px] overflow-hidden lg:h-full">
                <Image
                  src={FEATURED.img}
                  alt={FEATURED.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <span
                  className="absolute left-5 top-5 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[2px] text-[var(--color-secondary)]"
                  style={{ background: "var(--color-accent)" }}
                >
                  {FEATURED.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-12">
                <PostMeta date={FEATURED.date} readTime={FEATURED.readTime} />
                <h3
                  className="mb-5 mt-3 text-[var(--color-secondary)]"
                  style={{
                    fontSize: "clamp(1.65rem, 3vw, 2.25rem)",
                    fontFamily: "var(--font-heading), Georgia, serif",
                    lineHeight: 1.2,
                  }}
                >
                  {FEATURED.title}
                </h3>
                <p className="t-body text-[var(--color-text-light)]">
                  {FEATURED.excerpt}
                </p>
                <span
                  className="mt-7 self-start border-b pb-1 text-[0.85rem] font-medium uppercase tracking-[2px] transition-opacity"
                  style={{
                    color: "var(--color-primary)",
                    borderColor: "var(--color-primary)",
                  }}
                >
                  Read full article
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Grid — only renders when there are non-featured posts. */}
      {POSTS.length > 0 ? (
      <section
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "6rem 0" }}
      >
        <div className="container-xl">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} y={28}>
                <article
                  className="group flex h-full flex-col overflow-hidden bg-white"
                  style={{
                    boxShadow: "0 6px 18px -10px rgba(20,14,8,0.12)",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="relative h-[230px] w-full overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                    <span
                      className="absolute left-4 top-4 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[2px] text-[var(--color-secondary)]"
                      style={{ background: "rgba(255,255,255,0.95)" }}
                    >
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <PostMeta date={p.date} readTime={p.readTime} />
                    <h3
                      className="mb-3 mt-3 text-[var(--color-secondary)]"
                      style={{
                        fontSize: "1.25rem",
                        fontFamily: "var(--font-heading), Georgia, serif",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p className="mb-6 t-body-sm text-[var(--color-text-light)]">
                      {p.excerpt}
                    </p>
                    <Link
                      href={p.slug}
                      className="mt-auto self-start text-[0.78rem] font-medium uppercase tracking-[2px]"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      ) : null}

      {/* Newsletter CTA */}
      <section
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "5rem 0",
        }}
      >
        <div className="container-xl">
          <div className="mx-auto max-w-[760px] text-center">
            <Reveal>
              <span className="t-eyebrow">Stay in Touch</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[var(--color-secondary)]">
                Never Miss a Story
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                Subscribe to our newsletter and get the latest travel tips,
                cultural insights, and exclusive offers delivered to your
                inbox.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <Link
                href="/#newsletter"
                className="mt-8 inline-flex items-center px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px] hover:-translate-y-0.5"
                style={{
                  background: "var(--color-primary)",
                  color: "#ffffff",
                  boxShadow: "0 6px 20px rgba(139,115,85,0.25)",
                }}
              >
                Subscribe Now
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PostMeta({ date, readTime }: { date: string; readTime: string }) {
  return (
    <div
      className="flex flex-wrap items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[2px]"
      style={{ color: "var(--color-text-muted)" }}
    >
      <span>{date}</span>
      <span aria-hidden style={{ color: "var(--color-accent)" }}>
        ·
      </span>
      <span>{readTime}</span>
    </div>
  );
}

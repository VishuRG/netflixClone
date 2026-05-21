import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type StorySection = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  alt: string;
};

const storySections: StorySection[] = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    image:
      "https://images.pexels.com/photos/7991370/pexels-photo-7991370.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Family watching TV together in a cozy dark room",
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favorites easily and always have something to watch.",
    image:
      "https://images.pexels.com/photos/5077069/pexels-photo-5077069.jpeg?auto=compress&cs=tinysrgb&w=1400",
    reverse: true,
    alt: "Person watching a show on a tablet during travel",
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    image:
      "https://images.pexels.com/photos/8263497/pexels-photo-8263497.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Close-up of a laptop screen playing a movie",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them.",
    image:
      "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1400",
    reverse: true,
    alt: "Children watching cartoons while smiling",
  },
];

const faqItems = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range by region and change over time, with no extra costs and no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on devices that offer the Netflix app.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no contracts and no commitments. You can easily cancel your account online in just two clicks.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies.",
  },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden border-b-8 border-zinc-800">
        <img
          src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Dark cinematic theater scene"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />

        <motion.header
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-7 md:px-10"
        >
          <h1 className="text-3xl font-extrabold tracking-tight text-red-600 md:text-4xl">NETFLIX</h1>
          <button className="rounded bg-red-600 px-4 py-1.5 text-sm font-semibold transition hover:bg-red-700">
            Sign In
          </button>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative z-10 mx-auto flex min-h-[calc(100vh-84px)] max-w-4xl flex-col items-center justify-center px-6 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-200">NETFLIX</p>
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Unlimited movies, TV shows, and more
          </h2>
          <p className="mt-5 text-lg text-zinc-100 md:text-2xl">Starts at $6.99. Cancel anytime.</p>
          <p className="mt-6 text-base text-zinc-200">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <form className="mt-5 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="h-14 flex-1 rounded border border-zinc-400/70 bg-black/60 px-4 text-base outline-none backdrop-blur-sm placeholder:text-zinc-300 focus:border-zinc-100"
            />
            <button
              type="submit"
              className="h-14 rounded bg-red-600 px-8 text-xl font-semibold transition hover:bg-red-700"
            >
              Get Started &gt;
            </button>
          </form>
        </motion.div>
      </section>

      {storySections.map((section, index) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="border-b-8 border-zinc-800 py-14 md:py-18"
        >
          <div
            className={`mx-auto grid w-full max-w-6xl gap-10 px-6 md:px-10 lg:grid-cols-2 lg:items-center ${
              section.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <h3 className="text-3xl font-extrabold leading-tight md:text-5xl">{section.title}</h3>
              <p className="mt-5 text-lg text-zinc-200 md:text-2xl">{section.description}</p>
            </div>
            <div>
              <img
                src={section.image}
                alt={section.alt}
                className="h-[280px] w-full object-cover md:h-[360px]"
                loading="lazy"
              />
            </div>
          </div>
        </motion.section>
      ))}

      <section className="border-b-8 border-zinc-800 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-center text-3xl font-extrabold md:text-5xl">Frequently Asked Questions</h3>
          <div className="mt-8 space-y-2">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={item.question}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between bg-zinc-800 px-6 py-6 text-left text-xl transition hover:bg-zinc-700 md:text-2xl"
                  >
                    <span>{item.question}</span>
                    <span className="text-4xl font-light">{isOpen ? "-" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden bg-zinc-800"
                      >
                        <p className="px-6 py-6 text-lg text-zinc-100 md:text-2xl">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <p className="mt-12 text-center text-base text-zinc-300 md:text-lg">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <form className="mx-auto mt-4 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="h-14 flex-1 rounded border border-zinc-400/70 bg-black/60 px-4 text-base outline-none placeholder:text-zinc-300 focus:border-zinc-100"
            />
            <button
              type="submit"
              className="h-14 rounded bg-red-600 px-8 text-xl font-semibold transition hover:bg-red-700"
            >
              Get Started &gt;
            </button>
          </form>
        </div>
      </section>

      <footer className="px-6 py-14 text-zinc-400 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-base">Questions? Call 1-800-000-0000</p>
          <div className="mt-7 grid grid-cols-2 gap-y-3 text-sm underline md:grid-cols-4">
            <a href="#">FAQ</a>
            <a href="#">Help Center</a>
            <a href="#">Account</a>
            <a href="#">Media Center</a>
            <a href="#">Investor Relations</a>
            <a href="#">Jobs</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Corporate Information</a>
            <a href="#">Contact Us</a>
          </div>
          <p className="mt-8 text-sm">Netflix Clone</p>
        </div>
      </footer>
    </div>
  );
}

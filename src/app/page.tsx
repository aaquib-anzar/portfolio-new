import Hero from "@/app/components/Hero";
import Main from "@/app/components/Main";
import Contact from "@/app/components/Contact";
export default function HomePage() {
  return (
    <main className="pt-24">
      <section id="home">
        <Hero/>
      </section>
      <section id="projects">
        <Main />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

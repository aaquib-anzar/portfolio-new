import React from "react";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Contact from "./components/Contact";
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

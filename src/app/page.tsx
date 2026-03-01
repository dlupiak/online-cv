import { cvData } from "@/data/cv-data";
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import OpenSource from "@/components/OpenSource";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Header profile={cvData.profile} />
        <ScrollReveal>
          <Summary text={cvData.profile.summary} />
        </ScrollReveal>
        <ScrollReveal>
          <Skills skills={cvData.skills} />
        </ScrollReveal>
        <ScrollReveal>
          <Experience experience={cvData.experience} />
        </ScrollReveal>
        <ScrollReveal>
          <Achievements achievements={cvData.achievements} />
        </ScrollReveal>
        <ScrollReveal>
          <OpenSource projects={cvData.openSource} />
        </ScrollReveal>
        <ScrollReveal>
          <Education education={cvData.education} />
        </ScrollReveal>
        <ScrollReveal>
          <Languages languages={cvData.languages} />
        </ScrollReveal>
        <Footer />
      </main>
    </>
  );
}

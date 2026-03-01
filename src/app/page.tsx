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

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Header profile={cvData.profile} />
        <Summary text={cvData.profile.summary} />
        <Skills skills={cvData.skills} />
        <Experience experience={cvData.experience} />
        <Achievements achievements={cvData.achievements} />
        <OpenSource projects={cvData.openSource} />
        <Education education={cvData.education} />
        <Languages languages={cvData.languages} />
        <Footer />
      </main>
    </>
  );
}

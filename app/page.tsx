import { AboutEducationSection } from "@/components/home/about-education-section";
import { AchievementsTimeline } from "@/components/home/achievements-timeline";
import { AgentOfficeDemo } from "@/components/home/agent-office-demo";
import { ContactPanel } from "@/components/home/contact-panel";
import { CredibilityStrip } from "@/components/home/credibility-strip";
import { ExperienceSection } from "@/components/home/experience-section";
import { Hero } from "@/components/home/hero";
import { HowIBuildSection } from "@/components/home/how-i-build-section";
import { LazySystemShowcase } from "@/components/home/lazy-system-showcase";
import { OperatingStackMarquee } from "@/components/home/operating-stack-marquee";
import { ResearchPreview } from "@/components/home/research-preview";
import { WhatIBuildSection } from "@/components/home/what-i-build-section";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionShell } from "@/components/ui/section-shell";
import { getHomeContent } from "@/lib/services/content-service";
import { listProjects } from "@/lib/services/project-service";

export default async function HomePage() {
  const [content, allProjects] = await Promise.all([
    getHomeContent(),
    listProjects(),
  ]);

  const featuredProjects = allProjects.filter((p) => p.featured);
  const engineeringProjects = allProjects.filter((p) => !p.featured);

  return (
    <main>
      {/* 01. Hero */}
      <Hero />

      {/* 02. Credibility / Proof Strip */}
      <CredibilityStrip />

      {/* Operating Stack Marquee */}
      <OperatingStackMarquee />

      {/* 03. What I Build */}
      <WhatIBuildSection />

      {/* 04. Featured Systems (Scroll-Driven 3D Showcase) */}
      <div id="work">
        <LazySystemShowcase
          id="systems"
          eyebrow="Featured Systems"
          title="Production AI & Commerce Operating Systems"
          description="Autonomous agentic architectures, LangGraph execution graphs, and real-world commercial platforms."
          projects={featuredProjects}
        />
      </div>

      {/* 05. Agent Office Control Room Demo */}
      <AgentOfficeDemo />

      {/* 06. Engineering Work */}
      <SectionShell
        eyebrow="Engineering Builds"
        title="Software & Systems Engineering"
        description="High-performance video streaming backends, financial analytics microservices, and spatial computer vision models."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {engineeringProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionShell>

      {/* 07. How I Build */}
      <HowIBuildSection />

      {/* 08. Real-world Experience / Client Proof */}
      <ExperienceSection />

      {/* 09. Journey & Achievements */}
      <div id="journey">
        <AchievementsTimeline />
      </div>

      {/* 10. About & Education */}
      <div id="about">
        <AboutEducationSection />
      </div>

      {/* 11. Research & Thinking */}
      <ResearchPreview notes={content.researchNotes} />

      {/* 12. Contact */}
      <ContactPanel />
    </main>
  );
}

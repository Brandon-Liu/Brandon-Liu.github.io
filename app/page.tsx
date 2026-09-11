import { FeaturedShowcase } from '@/components/featured-showcase';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';

export const dynamic = 'force-static';

const cadProjects = [
  'CAD 1',
  'CAD 2',
  'CAD 3',
  'CAD 4',
  'CAD 5',
  'CAD 6',
  'CAD 7',
  'CAD 8',
];

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Brandon Liu CAD showcase</h1>
      <FeaturedShowcase />
      <section
        className="cad-gallery"
        id="projects"
        aria-labelledby="projects-title"
      >
        <h2 className="sr-only" id="projects-title">
          Projects
        </h2>
        <div className="cad-grid">
          {cadProjects.map((project) => (
            <article className="cad-card" key={project}>
              <span>{project}</span>
            </article>
          ))}
        </div>
      </section>
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}

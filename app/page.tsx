import { FeaturedShowcase } from '@/components/featured-showcase';
import { ExperienceSection } from '@/components/experience-section';
import { RoboticsSection } from '@/components/robotics-section';
import { ContactSection } from '@/components/contact-section';

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
    <main className="home-showcase">
      <h1 className="sr-only">Brandon Liu CAD showcase</h1>
      <FeaturedShowcase />
      <section
        className="cad-gallery"
        id="portfolio"
        aria-label="More CAD projects"
      >
        <div className="cad-grid">
          {cadProjects.map((project) => (
            <article className="cad-card" key={project}>
              <span>{project}</span>
            </article>
          ))}
        </div>
      </section>
      <ExperienceSection />
      <RoboticsSection />
      <ContactSection />
    </main>
  );
}

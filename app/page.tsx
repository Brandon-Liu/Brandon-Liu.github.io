import Image from 'next/image';
import { FeaturedShowcase } from '@/components/featured-showcase';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';
import { featuredProjects } from '@/components/featured-projects';

export const dynamic = 'force-static';

const cadProjects: {
  label: string;
  image?: string;
  description?: string;
  width?: number;
  height?: number;
  viewBox?: string;
}[] = [
  ...featuredProjects.map((project) => ({
    label: project.label,
    width: project.kind === 'subsystems' ? 1208 : project.width,
    height: project.kind === 'subsystems' ? 1290 : project.height,
    viewBox: project.kind === 'image' ? project.viewBox : undefined,
    image:
      project.kind === 'subsystems' ? project.views[0].image : project.image,
    description:
      project.kind === 'subsystems'
        ? `${project.label}: full competition robot CAD assembly`
        : project.description,
  })),
  {
    label: 'CAD 4',
    image: '/cad-4.png',
    width: 1968,
    height: 1248,
    description:
      'CAD 4: full competition robot with a roller intake and linkage lift',
  },
  {
    label: 'CAD 5',
    image: '/cad-5.png',
    width: 997,
    height: 614,
    description: 'CAD 5: mechanical assembly with blue and red pin plates',
  },
  { label: 'CAD 6' },
  { label: 'CAD 7' },
  { label: 'CAD 8' },
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
            <article
              className={`cad-card${project.image ? ' cad-card-with-image' : ''}`}
              key={project.label}
            >
              {project.image &&
                (project.viewBox ? (
                  <svg
                    viewBox={project.viewBox}
                    preserveAspectRatio="xMidYMid meet"
                    aria-label={project.description ?? project.label}
                  >
                    <title>{project.description ?? project.label}</title>
                    <image
                      href={project.image}
                      width={project.width}
                      height={project.height}
                    />
                  </svg>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.description ?? project.label}
                    width={project.width}
                    height={project.height}
                    unoptimized
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              <span>{project.label}</span>
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

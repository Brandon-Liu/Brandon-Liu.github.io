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
    // Match the featured viewer's crop to hide the source images' bottom edge.
    viewBox: project.kind === 'image' ? project.viewBox : '0 0 1208 1286',
    image:
      project.kind === 'subsystems' ? project.views[0].image : project.image,
    description:
      project.kind === 'subsystems'
        ? `${project.label}: full competition robot CAD assembly`
        : project.description,
  })),
  {
    label: 'Over Under Robot',
    image: '/cad-4.png',
    width: 1968,
    height: 1248,
    description:
      'Over Under Robot: full competition robot with a roller intake and linkage lift',
  },
  {
    label: 'Diffy Lift Robot',
    image: '/diffy-lift-robot.png',
    width: 1696,
    height: 1455,
    description: 'Diffy Lift Robot CAD assembly with an extended vertical lift',
  },
  {
    label: 'OU Worlds Robot',
    image: '/competition-robot-white.png',
    width: 1083,
    height: 1453,
    description:
      'OU Worlds Robot with its full lift extended on a white background',
  },
  {
    label: 'Yellow Bot',
    image: '/yellow-bot-white.png',
    width: 1305,
    height: 1206,
    description: 'Yellow Bot competition robot on a white background',
  },
  {
    label: 'Cooling Manifold',
    image: '/cooling-manifold-white.png',
    width: 1599,
    height: 984,
    description: 'Cooling Manifold CAD assembly',
  },
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

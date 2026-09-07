const cadProjects = ['CAD 2', 'CAD 3', 'CAD 4', 'CAD 5', 'CAD 6', 'CAD 7'];

export default function Home() {
  return (
    <main className="home-showcase">
      <h1 className="sr-only">Brandon Liu CAD showcase</h1>

      <section className="cad-feature" aria-label="Featured CAD project">
        <div className="cad-feature-placeholder">CAD 1</div>
      </section>

      <section className="cad-gallery" aria-label="More CAD projects">
        <div className="cad-grid">
          {cadProjects.map((project) => (
            <article className="cad-card" key={project}>
              <span>{project}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

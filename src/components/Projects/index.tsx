import { projects } from '../../content/profile';
import useT from '../../i18n/useT';
import Card3D from '../Card3D';

export default function Projects() {
  const t = useT();

  return (
    <section
      id="section-projetos"
      className="bg-[var(--section-alternate)] px-5 py-24 text-[var(--text)] sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t.original.projectsTitle}
          </h2>
          <p className="font-body mt-5 text-lg text-[var(--muted)] italic">
            {t.original.projectsSubtitle}
          </p>
        </header>
        <div className="mt-14 grid justify-items-center gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const text = t.projects.items[index];
            return (
              <Card3D
                key={text.title}
                imgSrc={project.image}
                imgAlt={text.alt}
                projectHref={project.href}
                backCardTitle={t.original.projectTestTitle
                  .replace('{role}', text.role)
                  .replace('{title}', text.title)}
                backCardDescription={text.details}
              />
            );
          })}
        </div>
        <div className="mt-16 h-1 w-full bg-slate-300 dark:bg-cyan-300 dark:shadow-[0_0_16px_#8140f7]" />
      </div>
    </section>
  );
}

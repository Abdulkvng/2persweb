'use client';

interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Hydrate',
    date: 'Feb 2024',
    description: 'A simple authentication utility for Go using the general JWT flow. Allows for easy implementation and aimed for greater customizability',
    technologies: ['Go', 'Open Source'],
    link: 'https://pkg.go.dev/github.com/dooduneye/hydrate'
  },
  {
    title: 'Student Activity Calendar',
    date: 'Jan 2024',
    description: 'Leading a small team to develop a platform encompassing an app, website, and management dashboards. Providing tools for organizations to manage events, programming, and applications, and allows students to easily join organization and access event information.',
    technologies: ['Redis', 'TypeScript', 'React', 'React Native', 'Nginx', 'Docker', 'Jira', 'PostgreSQL', 'Go', 'AWS Lambda & S3', 'RTK Query', 'RTK', 'Mongo', 'Opensearch']
  },
  {
    title: 'Portfolio v2',
    date: 'Dec 2023',
    description: 'Developed using TypeScript, Server Components, and Zustand for frontend state management, integrated with Firebase including a self-developed CMS tailored for efficient data handling and content management.',
    technologies: ['Nextjs', 'TypeScript', 'Firebase', 'Zustand', 'Server Components']
  }
];

export default function ProjectSection() {
  return (
    <section className="mb-16">
      <h2 className="section-title">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="text-sm text-zinc-500">{project.date}</span>
            </div>
            <p className="text-zinc-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
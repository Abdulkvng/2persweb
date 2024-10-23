'use client';

interface Experience {
  date: string;
  location: string;
  title: string;
  company: string;
  description: string;
}

const experiences: Experience[] = [
  {
    date: 'Aug 2024',
    location: 'New York City, NY',
    title: 'Software Engineering Intern',
    company: 'Google',
    description: 'Google SWE Intern in CI&R'
  },
  {
    date: 'May - Aug 2024',
    location: 'Seattle, WA',
    title: 'Software Engineering Intern',
    company: 'Microsoft',
    description: 'Developing performance tools for data ingestion of security information.'
  },
  {
    date: 'Jul 2022 - Jun 2024',
    location: 'Boston, MA',
    title: 'Technical Lead',
    company: 'Generate',
    description: 'Leading a team of 6 developers to improve northeasterns community engagement system.'
  }
];

export default function ExperienceSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6">
            <div className="w-32 flex-shrink-0">
              <p className="text-sm text-zinc-500">{exp.date}</p>
              <p className="text-sm text-zinc-500">{exp.location}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">{exp.title}</h3>
              <p className="text-zinc-600 mb-2">{exp.company}</p>
              <p className="text-zinc-600">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
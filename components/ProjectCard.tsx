'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, date, description, technologies, link }: ProjectCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow bg-white border-zinc-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
        <span className="text-sm text-zinc-500">{date}</span>
      </div>
      <p className="text-zinc-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <Badge key={index} variant="secondary" className="bg-zinc-100 text-zinc-700 hover:bg-zinc-200">
            {tech}
          </Badge>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900"
        >
          View Project <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      )}
    </Card>
  );
}
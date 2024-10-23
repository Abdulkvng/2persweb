import { Github, Sun } from 'lucide-react';
import ProjectSection from '@/components/ProjectSection';
import ExperienceSection from '@/components/ExperienceSection';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="w-full bg-[#8AB4B3] h-14 flex items-center px-4 fixed top-0 z-50">
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
          <div className="nav-dots">
            <div className="nav-dot bg-red-500" />
            <div className="nav-dot bg-yellow-500" />
            <div className="nav-dot bg-green-500" />
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
            <Sun className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-4xl font-bold mb-6">David Oduneye</h1>
          <div className="flex gap-4 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </a>
          </div>
          <p className="text-lg text-center max-w-2xl text-zinc-600">
            I am a fourth-year Computer Science student at Northeastern University. I am honing my
            computer science skills and expanding my knowledge as a Full Stack Software and
            Machine Learning Engineer. With a strong passion for building technology that can solve
            meaningful problems, I am always seeking new opportunities to learn and grow.
          </p>
        </div>

        {/* Projects Section */}
        <ProjectSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Footer */}
        <footer className="text-center text-sm text-zinc-500 mt-16">
          © 2024 - David Oduneye
        </footer>
      </div>
    </main>
  );
}
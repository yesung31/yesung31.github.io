import React from 'react'
import { Mail, GraduationCap, Moon, Sun } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { AboutMe } from '../data/aboutme'

interface ProfileSectionProps {
  aboutMe: AboutMe
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export function ProfileSection({ aboutMe, darkMode, setDarkMode }: ProfileSectionProps) {
  if (!aboutMe) return null

  return (
    <div className="flex flex-row md:flex-col justify-between items-start gap-4 md:gap-0 md:space-y-6">
      {aboutMe.imageUrl && (
        <div className="w-28 sm:w-36 md:w-full flex-shrink-0 order-2 md:order-1">
          <div className="relative max-h-[42vh] md:w-[65%] aspect-[3/4]">
            <img
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              className="object-cover rounded-xl w-full h-full shadow-xs"
            />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0 order-1 md:order-2">
        <h1 className="font-serif text-2xl sm:text-3xl font-light tracking-wide mb-2 text-zinc-900 dark:text-zinc-100">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed tracking-wide mb-3">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed tracking-wide uppercase mb-4">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>

        {/* Minimal Icon-Only Row: Mail, GitHub, LinkedIn, CV, Scholar, Theme */}
        <div className="flex items-center gap-3.5 pt-1 text-zinc-500 dark:text-zinc-400">
          {aboutMe.email && (
            <a
              href={`mailto:${aboutMe.email}`}
              aria-label="Email"
              title="Email"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Mail size={16} />
            </a>
          )}

          {aboutMe.githubUsername && (
            <a
              href={`https://github.com/${aboutMe.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {aboutMe.linkedinUsername && (
            <a
              href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}

          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
              title="Download CV"
              className="text-xs font-semibold tracking-wider hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors leading-none"
            >
              CV
            </a>
          )}

          {aboutMe.googleScholarUrl && (
            <a
              href={aboutMe.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
              title="Google Scholar"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <GraduationCap size={16} />
            </a>
          )}

          <span className="w-px h-3.5 bg-zinc-300 dark:bg-zinc-700 mx-0.5" />

          {/* Theme Switcher Button */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </div>
    </div>
  )
}

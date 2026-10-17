import React from 'react'
import { Mail, ArrowUpRight, GraduationCap, Moon, Sun } from 'lucide-react'
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
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:space-y-8">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0">
          <div className="relative max-h-[45vh] md:w-[65%] aspect-[3/4]">
            <img
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
      )}

      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-3 text-zinc-900 dark:text-zinc-100">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 dark:text-zinc-400 text-md leading-relaxed tracking-wide mb-6">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed tracking-wide uppercase mb-6">
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

        <div className="flex gap-6 mb-6">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Blog</span>
            </a>
          )}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">CV</span>
            </a>
          )}
        </div>

        <div className="space-y-2">
          {aboutMe.email && (
            <div>
              <a
                href={`mailto:${aboutMe.email}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <Mail size={14} />
                <span>{aboutMe.email}</span>
              </a>
            </div>
          )}

          {aboutMe.googleScholarUrl && (
            <div>
              <a
                href={aboutMe.googleScholarUrl}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={14} />
                <span>Google Scholar</span>
              </a>
            </div>
          )}

          {aboutMe.githubUsername && (
            <div>
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github/{aboutMe.githubUsername}</span>
              </a>
            </div>
          )}

          {aboutMe.linkedinUsername && (
            <div>
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin/{aboutMe.linkedinUsername}</span>
              </a>
            </div>
          )}
        </div>

        {aboutMe.funDescription && (
          <div className="pt-6 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-serif italic border-t border-zinc-200 dark:border-zinc-800 mt-6">
            <p dangerouslySetInnerHTML={{ __html: aboutMe.funDescription }} />
          </div>
        )}

        {/* Dark Mode Toggle */}
        <div className="pt-6">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
          >
            {darkMode ? <Sun size={13} /> : <Moon size={13} />}
            <span>{darkMode ? 'Light Theme' : 'Dark Theme'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}


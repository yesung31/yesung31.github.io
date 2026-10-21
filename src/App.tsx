import { useState, useEffect, useMemo } from 'react'
import { EducationEntry } from './components/education-entry'
import { educationData } from './data/education'
import { PublicationEntry } from './components/publication-entry'
import { publicationData } from './data/publication'
import { ProfileSection } from './components/profile-section'
import { aboutMe } from './data/aboutme'
import { NewsEntry } from './components/news-entry'
import { newsData } from './data/news'
import { ExperienceEntry } from './components/experience-entry'
import { experienceData } from './data/experience'
import { PortfolioEntry } from './components/portfolio-entry'
import { portfolioData } from './data/portfolio'
import { interestsData } from './data/interests'
import { sectionOrder, Section } from './data/section-order'
import { ChevronDown } from 'lucide-react'

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  const [isPersonalOpen, setIsPersonalOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const [lastCommitDate, setLastCommitDate] = useState<string>(() => {
    return typeof __LAST_COMMIT_DATE__ !== 'undefined' ? __LAST_COMMIT_DATE__ : ''
  })

  useEffect(() => {
    if (import.meta.env.DEV) {
      fetch('/api/last-commit-date')
        .then((res) => res.json())
        .then((data) => {
          if (data?.date) {
            setLastCommitDate(data.date)
          }
        })
        .catch(() => {})
    }
  }, [])

  const formattedLastUpdated = useMemo(() => {
    try {
      if (lastCommitDate) {
        const d = new Date(lastCommitDate)
        return d.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      }
    } catch {
      // fallback
    }
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }, [lastCommitDate])

  return (
    <div className="min-h-screen bg-[#FFFCF8] dark:bg-[#121214] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      <div className="max-w-screen-lg mx-auto px-5 sm:px-8 py-12 sm:py-20 md:py-24">
        {/* Grid Layout directly from Tovacinni */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <div className="md:sticky top-8 md:max-h-[calc(100vh-4rem)] md:overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden space-y-8">
              <ProfileSection aboutMe={aboutMe} darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-20">
            {/* About section is first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 [&_a]:underline [&_a]:text-zinc-900 dark:[&_a]:text-zinc-100 [&_a:hover]:text-zinc-600 dark:[&_a:hover]:text-zinc-400"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder: Education -> Publications -> Experience -> Personal (collapsible) */}
            {sectionOrder.map((sectionName) => {
              switch (sectionName) {
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-10 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          Education
                        </h2>
                        <div className="space-y-10">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  )

                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-10 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          Publications & Patents
                        </h2>
                        <div className="space-y-10">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  )

                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-10 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          Experience
                        </h2>
                        <div className="space-y-10">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry key={index} experience={experience} />
                          ))}
                        </div>
                      </section>
                    )
                  )

                case Section.Personal:
                  return (
                    <section key={sectionName} className="pt-2">
                      <button
                        onClick={() => setIsPersonalOpen(!isPersonalOpen)}
                        className="flex items-center gap-3 text-left group cursor-pointer py-2"
                        aria-expanded={isPersonalOpen}
                      >
                        <h2 className="font-serif text-l tracking-wide uppercase text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                          Extra
                        </h2>
                        <span className="text-xs text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors font-mono flex items-center gap-1">
                          <span>{isPersonalOpen ? 'Collapse' : 'Expand'}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isPersonalOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </span>
                      </button>

                      {isPersonalOpen && (
                        <div className="mt-8 space-y-12">
                          {interestsData.length > 0 && (
                            <div className="space-y-3">
                              <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium font-mono">
                                Interests
                              </h3>
                              <div className="font-serif text-sm text-zinc-600 dark:text-zinc-400 space-y-2 leading-relaxed [&_a]:underline [&_a]:text-zinc-900 dark:[&_a]:text-zinc-100 [&_a:hover]:text-zinc-600 dark:[&_a:hover]:text-zinc-400">
                                {interestsData.map((interest, index) => {
                                  const content = interest.items.join(', ')
                                  const formatted = content
                                    ? content.endsWith('.')
                                      ? content
                                      : `${content}.`
                                    : ''
                                  return (
                                    <p key={index}>
                                      <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">
                                        {interest.category}:
                                      </strong>{' '}
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html: formatted,
                                        }}
                                      />
                                    </p>
                                  )
                                })}
                              </div>
                            </div>
                          )}

                          {/* Personal Projects */}
                          {portfolioData.length > 0 && (
                            <div className="space-y-10">
                              <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-medium font-mono">
                                Projects
                              </h3>
                              <div className="space-y-10">
                                {portfolioData.map((portfolio, index) => (
                                  <PortfolioEntry key={index} portfolio={portfolio} />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </section>
                  )

                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-10 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          News
                        </h2>
                        <div className="space-y-10">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  )

                default:
                  return null
              }
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8] dark:bg-[#121214]">
        <div className="flex flex-col sm:flex-row mx-auto max-w-screen-lg px-8 py-10 items-start sm:items-center justify-between gap-4">
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            <p>© {new Date().getFullYear()} {aboutMe.name}.</p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
              Built with Vite & React —{' '}
              <a
                href="https://github.com/tovacinni/research-website-template"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
              >
                Tovacinni template architecture
              </a>
              .
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-500">
            Last updated: {formattedLastUpdated}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

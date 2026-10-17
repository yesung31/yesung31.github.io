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
import { sectionOrder, Section } from './data/section-order'

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

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

  const formattedLastUpdated = useMemo(() => {
    try {
      if (typeof __LAST_COMMIT_DATE__ !== 'undefined' && __LAST_COMMIT_DATE__) {
        const d = new Date(__LAST_COMMIT_DATE__)
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
  }, [])

  return (
    <div className="min-h-screen bg-[#FFFCF8] dark:bg-[#121214] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      <div className="max-w-screen-lg mx-auto px-6 sm:px-8 py-16 sm:py-24">
        {/* Grid Layout directly from Tovacinni */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-20">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 [&_a]:underline [&_a]:text-zinc-900 dark:[&_a]:text-zinc-100 [&_a:hover]:text-zinc-600 dark:[&_a:hover]:text-zinc-400"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in configured order */}
            {sectionOrder.map((sectionName) => {
              switch (sectionName) {
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
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-zinc-900 dark:text-zinc-100 mb-10 tracking-wide uppercase">
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
                          Publications
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
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-l mb-10 tracking-wide uppercase text-zinc-900 dark:text-zinc-100">
                          Projects
                        </h2>
                        <div className="space-y-10">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
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
            {aboutMe.secretDescription && (
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                {aboutMe.secretDescription}
              </p>
            )}
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

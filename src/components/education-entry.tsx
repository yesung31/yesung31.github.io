import { Education } from '../data/education'

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-1 sm:gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 font-mono sm:mt-1">{education.year}</span>
        <div className="sm:col-span-3">
          <h3 className="text-base mb-1 font-serif text-zinc-900 dark:text-zinc-100">
            {education.institution}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{education.degree}</p>
          {education.advisor && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 italic">
              Advisor: {education.advisor}
            </p>
          )}
          {education.thesis && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 italic">
              {education.thesis.includes('Scholarship') || education.thesis.includes('GPA') ? (
                <span>{education.thesis}</span>
              ) : (
                <>
                  <span>Thesis:{' '}</span>
                  {education.thesisUrl ? (
                    <a
                      href={education.thesisUrl}
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {education.thesis}
                    </a>
                  ) : (
                    education.thesis
                  )}
                </>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}


import { Education } from '../data/education'

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-1 sm:gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 font-mono sm:mt-1">{education.year}</span>
        <div className="sm:col-span-3">
          <h3 className="text-base mb-1 font-serif text-zinc-900 dark:text-zinc-100">
            {education.institutionUrl ? (
              <a
                href={education.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                {education.institution}
              </a>
            ) : (
              education.institution
            )}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{education.degree}</p>
          {education.advisor && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 italic">
              Advisor:{' '}
              {education.advisorUrl ? (
                <a
                  href={education.advisorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {education.advisor}
                </a>
              ) : (
                education.advisor
              )}
            </p>
          )}
          {education.focus && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 italic">
              Research Focus: {education.focus}
            </p>
          )}
          {education.thesis && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 italic">
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
            </p>
          )}
          {education.grade && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 italic">
              {education.grade}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}


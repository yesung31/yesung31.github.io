import { Experience } from '../data/experience'

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-1 sm:gap-x-2">
      <span className="text-xs text-zinc-500 font-mono sm:mt-1">{experience.date}</span>
      <div className="sm:col-span-3 flex flex-col">
        <h3 className="text-base font-serif text-zinc-900 dark:text-zinc-100">
          {experience.title} —{' '}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>
        {experience.location && (
          <p className="text-xs text-zinc-500 font-mono mt-0.5">{experience.location}</p>
        )}
        {experience.advisor && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic mt-2">
            Advisor:{' '}
            {experience.advisorUrl ? (
              <a
                href={experience.advisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {experience.advisor}
              </a>
            ) : (
              experience.advisor
            )}
          </p>
        )}
        {experience.manager && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic mt-2">
            Manager: {experience.manager}
          </p>
        )}
        {experience.description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2 font-medium">
            {experience.description}
          </p>
        )}
        {experience.points && experience.points.length > 0 && (
          <ul className="list-disc list-outside ml-4 mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}


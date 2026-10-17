import { ArrowUpRight } from 'lucide-react'
import { Portfolio } from '../data/portfolio'

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {portfolio.imageUrl && (
        <div className="w-full sm:w-1/4 min-w-[160px] relative">
          <img
            src={portfolio.imageUrl}
            alt={portfolio.title}
            className="rounded-lg object-cover w-full aspect-[4/3]"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-2 text-zinc-900 dark:text-zinc-100">
          {portfolio.projectUrl ? (
            <a
              href={portfolio.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-300"
            >
              <span>{portfolio.title}</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            portfolio.title
          )}
        </h3>

        {portfolio.technologies && (
          <div className="flex gap-2 mb-3 flex-wrap">
            {portfolio.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-zinc-600 dark:text-zinc-400 px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          {portfolio.description}
        </p>

        <div className="flex gap-6">
          {portfolio.projectUrl && (
            <a
              href={portfolio.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Project</span>
            </a>
          )}
          {portfolio.codeUrl && (
            <a
              href={portfolio.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}


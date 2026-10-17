import { ArrowUpRight } from 'lucide-react'
import { News } from '../data/news'

export function NewsEntry({ news }: { news: News }) {
  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-2 font-mono">{news.date}</p>
        <h3 className="font-serif text-md mb-2 text-zinc-900 dark:text-zinc-100">
          {news.link ? (
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-300"
            >
              <span>{news.title}</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            news.title
          )}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{news.description}</p>
      </div>
    </div>
  )
}


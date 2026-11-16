import type { Plugin } from 'vite'
import { execSync } from 'node:child_process'
import { aboutMe } from './src/data/aboutme'
import { educationData } from './src/data/education'
import { experienceData } from './src/data/experience'
import { publicationData } from './src/data/publication'

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function getLastCommitDate(): string {
  try {
    return execSync('git log -1 --format=%cs').toString().trim()
  } catch {
    return new Date().toISOString().split('T')[0]
  }
}

export function seoPlugin(): Plugin {
  const siteUrl = 'https://yesung31.github.io'
  const name = aboutMe.name
  const focus =
    educationData.find((e) => e.focus)?.focus ||
    (aboutMe.description.match(/<strong>(.*?)<\/strong>/i)?.[1]
      ? stripHtml(aboutMe.description.match(/<strong>(.*?)<\/strong>/i)![1])
      : 'Artificial Intelligence')

  const institutionAbbr =
    aboutMe.institution.match(/\(([^)]+)\)/)?.[1] ||
    aboutMe.institution.replace(/\s*\(.*?\)/, '').trim()

  const rawTitle = `${name} | ${aboutMe.title} — ${focus}`
  const title =
    rawTitle.length <= 60
      ? rawTitle
      : `${name} | ${aboutMe.title} · ${focus.replace(/^Learning\s+/i, '')}`

  const metaDescription = `${name} is a ${aboutMe.title} at ${institutionAbbr}. Researching ${focus}, out-of-distribution generalization, and representation learning.`
  const avatarUrl = `${siteUrl}${aboutMe.imageUrl || '/avatar.jpg'}`
  const cvUrl = aboutMe.cvUrl || `${siteUrl}/resume/cv_yesung.pdf`
  const githubUrl = `https://github.com/${aboutMe.githubUsername}`
  const linkedinUrl = `https://www.linkedin.com/in/${aboutMe.linkedinUsername}`
  const lastCommitDate = getLastCommitDate()

  // 1. Robots.txt content (allow AI search/citation, disallow model training)
  const robotsTxt = `# Robots.txt for ${name}'s Website (${siteUrl})
# Policy: Discoverable in search & AI citation, disallowed for model training

User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=no
Allow: /

# Search Engines
User-agent: Googlebot
User-agent: Bingbot
User-agent: Applebot
Content-Signal: search=yes, ai-input=yes, ai-train=no
Allow: /

# AI Search & Retrieval (Enabled for live discovery and citation)
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
Content-Signal: search=yes, ai-input=yes, ai-train=no
Allow: /

# AI Model Training Crawlers (Disallowed to prevent training on content)
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: CCBot
Content-Signal: search=yes, ai-input=yes, ai-train=no
Disallow: /

Sitemap: ${siteUrl}/sitemap.xml
`

  // 2. Sitemap.xml content
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${lastCommitDate}</lastmod>
  </url>
</urlset>
`

  // 3. llms.txt content
  const plainBio = stripHtml(aboutMe.description)
  const llmsTxt = `# ${name}

> ${name} is a ${aboutMe.title} at ${aboutMe.institution}. Research focuses on ${focus}.

${plainBio}

## Key Links

- [Home](${siteUrl}/): Personal website and research overview.
- [Curriculum Vitae](${cvUrl}): Complete academic CV.
- [GitHub](${githubUrl}): Code repositories.
- [LinkedIn](${linkedinUrl}): Professional profile.

## Academic & Research Affiliations

${educationData
  .map(
    (e) =>
      `- [${e.institution}](${e.institutionUrl || siteUrl}): ${e.degree} (${e.year})${e.grade ? `, ${e.grade}` : ''}.`,
  )
  .join('\n')}
${experienceData
  .map(
    (x) =>
      `- [${x.company}](${x.companyUrl || siteUrl}): ${x.title} (${x.date})${x.location ? ` in ${x.location}` : ''}.`,
  )
  .join('\n')}

## Intellectual Property & Publications

${publicationData
  .map(
    (p) =>
      `- [${p.conference}: ${p.title}](${p.paperUrl || siteUrl}): ${p.authors} (${p.year}).`,
  )
  .join('\n')}

## Optional

- [Full Profile for LLMs](${siteUrl}/llms-full.txt): Complete background and academic history.
`

  // 4. llms-full.txt content
  const llmsFullTxt = `# ${name} — Academic & Research Profile

> ${name} is a ${aboutMe.title} at ${aboutMe.institution}.

- Website: ${siteUrl}/
- Email: ${aboutMe.email}
- GitHub: ${githubUrl}
- LinkedIn: ${linkedinUrl}
- CV: ${cvUrl}

---

## Biography & Research Focus

${plainBio}

---

## Education

${educationData
  .map(
    (e, i) => `${i + 1}. **${e.degree}** (${e.year})
   - Institution: ${e.institution}
   ${e.advisor ? `- Advisor: ${e.advisor}` : ''}
   ${e.thesis ? `- Thesis: *${e.thesis}*` : ''}
   ${e.focus ? `- Focus: ${e.focus}` : ''}
   ${e.grade ? `- Honors: ${e.grade}` : ''}`,
  )
  .join('\n\n')}

---

## Professional & Research Experience

${experienceData
  .map(
    (x, i) => `${i + 1}. **${x.company}** (${x.date})
   - Role: ${x.title}
   ${x.location ? `- Location: ${x.location}` : ''}
   ${x.description ? `- Description: ${x.description}` : ''}`,
  )
  .join('\n\n')}

---

## Patents & Publications

${publicationData
  .map(
    (p) => `- **${p.conference}**: *${p.title}*
  - Authors: ${p.authors}
  ${p.paperUrl ? `- Link: ${p.paperUrl}` : ''}
  ${p.tldr ? `- TL;DR: ${p.tldr}` : ''}`,
  )
  .join('\n\n')}
`

  // 5. Schema.org JSON-LD graph
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name,
        description: `Academic website and research portfolio of ${name}.`,
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: title,
        isPartOf: { '@id': `${siteUrl}/#website` },
        mainEntity: { '@id': `${siteUrl}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name,
        url: `${siteUrl}/`,
        image: avatarUrl,
        jobTitle: `${aboutMe.title}`,
        email: `mailto:${aboutMe.email}`,
        worksFor: {
          '@type': 'EducationalOrganization',
          name: aboutMe.institution,
          url: aboutMe.institutionUrl || siteUrl,
        },
        affiliation: {
          '@type': 'EducationalOrganization',
          name: aboutMe.institution,
          url: aboutMe.institutionUrl || siteUrl,
        },
        alumniOf: educationData.map((e) => ({
          '@type': 'EducationalOrganization',
          name: e.institution,
          url: e.institutionUrl || siteUrl,
        })),
        knowsAbout: [
          focus,
          'Out-of-Distribution Generalization',
          'Representation Learning',
          'Causal Representation Learning',
          'Machine Learning',
          'Artificial Intelligence',
        ],
        sameAs: [githubUrl, linkedinUrl],
      },
    ],
  }

  // 6. Pre-rendered HTML fallback
  const fallbackHtml = `
      <main class="max-w-3xl mx-auto px-6 py-12">
        <header class="mb-8">
          <h1 class="text-3xl font-serif font-bold text-zinc-900">${name}</h1>
          <p class="text-lg text-zinc-600 mt-2">${aboutMe.title} at ${aboutMe.institution}</p>
          <p class="text-sm text-zinc-500 mt-1">Email: ${aboutMe.email}</p>
        </header>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-3">About &amp; Research Focus</h2>
          <div class="text-zinc-700 leading-relaxed space-y-4">
            ${aboutMe.description}
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-3">Education</h2>
          <ul class="space-y-3 text-zinc-700">
            ${educationData
              .map(
                (e) => `<li>
              <strong>${e.degree}</strong> (${e.year})<br />
              ${e.institution} ${e.advisor ? `&bull; Advised by ${e.advisor}` : ''}
            </li>`,
              )
              .join('\n            ')}
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-3">Links &amp; Resources</h2>
          <ul class="list-disc pl-5 space-y-1 text-zinc-700">
            <li><a href="${cvUrl}" class="underline">Curriculum Vitae (PDF)</a></li>
            <li><a href="${githubUrl}" class="underline">GitHub Profile (@${aboutMe.githubUsername})</a></li>
            <li><a href="${linkedinUrl}" class="underline">LinkedIn Profile</a></li>
            ${publicationData
              .map(
                (p) =>
                  `<li><a href="${p.paperUrl || siteUrl}" class="underline">${p.conference}: ${p.title}</a></li>`,
              )
              .join('\n            ')}
            <li><a href="/llms.txt" class="underline">LLM Discovery File (llms.txt)</a></li>
          </ul>
        </section>
      </main>
`

  const metaTags = `
    <title>${title}</title>
    <meta name="description" content="${metaDescription}" />
    <meta name="author" content="${name}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="${siteUrl}/" />

    <!-- Open Graph -->
    <meta property="og:type" content="profile" />
    <meta property="og:site_name" content="${name}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${metaDescription}" />
    <meta property="og:url" content="${siteUrl}/" />
    <meta property="og:image" content="${avatarUrl}" />
    <meta property="og:image:alt" content="${name}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${metaDescription}" />
    <meta name="twitter:image" content="${avatarUrl}" />
    <meta name="twitter:image:alt" content="${name}" />

    <!-- Discovery -->
    <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM-friendly content" />
    <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    ${JSON.stringify(schemaGraph, null, 2).replace(/\n/g, '\n    ')}
    </script>
`

  return {
    name: 'vite-plugin-seo',
    transformIndexHtml(html) {
      let transformed = html

      // Remove existing title and any static meta description to avoid duplicates
      transformed = transformed.replace(/<title>[\s\S]*?<\/title>\s*/, '')
      transformed = transformed.replace(/<meta name="description" content="[\s\S]*?" \/>\s*/, '')

      // Inject full dynamic meta tags into <head>
      transformed = transformed.replace('</head>', `${metaTags}\n  </head>`)

      // Inject dynamic fallback body inside <div id="root">
      transformed = transformed.replace(
        /<div id="root"><\/div>/,
        `<div id="root">${fallbackHtml}\n    </div>`,
      )

      return transformed
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: robotsTxt,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: sitemapXml,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'llms.txt',
        source: llmsTxt,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'llms-full.txt',
        source: llmsFullTxt,
      })
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain')
          res.end(robotsTxt)
          return
        }
        if (req.url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml')
          res.end(sitemapXml)
          return
        }
        if (req.url === '/llms.txt') {
          res.setHeader('Content-Type', 'text/plain')
          res.end(llmsTxt)
          return
        }
        if (req.url === '/llms-full.txt') {
          res.setHeader('Content-Type', 'text/plain')
          res.end(llmsFullTxt)
          return
        }
        next()
      })
    },
  }
}

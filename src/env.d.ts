/// <reference types="astro/client" />
/// <reference types="astro/content" />
type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

declare module 'astro:content' {
  interface Render {
    '.md': Promise<{
      Content: import('astro').MarkdownInstance<Record<string, unknown>>['Content']
      headings: import('astro').MarkdownHeading[]
      remarkPluginFrontmatter: Record<string, unknown>
    }>
  }
}

# Token Economy for Vibe Coding

A modular, i18n-ready course teaching developers how to save tokens and AI Credits when vibe coding with GitHub Copilot.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:4321/token-economy-course` in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/content/docs/
├── en/          # English modules (default locale)
│   ├── index.mdx
│   ├── 01-hidden-tax.mdx
│   ├── 02-context-model.mdx
│   ├── 03-quick-wins.mdx
│   ├── 04-cheaper-prompts.mdx
│   ├── 05-project-setup.mdx
│   ├── 06-agents-mcp.mdx
│   ├── 07-vibe-coding-guardrails.mdx
│   └── 08-under-the-hood.mdx
└── sv/          # Swedish translations
    └── ...
```

## Contributing Translations

Translations are welcome. To add or improve a translation:

1. Copy the English file from `src/content/docs/en/` to `src/content/docs/{lang}/`
2. Translate the content, keeping frontmatter and MDX structure intact
3. Add the locale to `locales` in `astro.config.mts`
4. Add translated sidebar labels under `sidebar[0].translations`

See the [Starlight i18n guide](https://starlight.astro.build/guides/i18n/) for details.

## Source Attribution

This course synthesizes knowledge from the following sources:

- GitHub Copilot documentation and pricing pages
- [VS Code Blog](https://code.visualstudio.com/) — Copilot architecture posts
- [GitHub Blog](https://github.blog/) — Copilot engineering posts
- [Simform](https://www.simform.com/blog/) — AI Credit and token analysis
- [Xebia](https://xebia.com/blog/) — Context engineering for Copilot
- [Pochi](https://ochi.dev/) — Practical Copilot tips and workflows
- [hboon](https://github.com/hboon) — AGENTS.md and skill composition patterns
- [nanotaboada](https://github.com/nanotaboada) — Token budget research

## License

Educational material. See individual source for licensing of referenced content.
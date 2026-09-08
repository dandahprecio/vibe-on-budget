# Token Economy for Vibe Coding

A modular, i18n-ready course teaching developers to complete coding tasks with maintained quality, an understandable workflow, and reasonable consumption.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:4321/vibe-on-budget` in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/content/docs/
├── sv/          # Swedish pilot and current source structure
│   ├── index.mdx
│   ├── understand-usage.mdx
│   ├── first-task.mdx
│   ├── prompts-and-context.mdx
│   ├── sessions-and-models.mdx
│   ├── agents-and-tools.mdx
│   ├── project-instructions.mdx
│   ├── working-routine.mdx
│   ├── glossary.mdx
│   └── deep-dives/
│       ├── copilot-internals.mdx
│       └── diagnose-usage.mdx
└── en/          # English translation of the same course structure
    └── ...
```

The two deep-dives live in the `deep-dives/` subdirectory rather than alongside the main modules.

## Contributing Translations

Translations follow a shared fact base and course structure:

1. Develop and test the Swedish pilot first.
2. Translate the approved Swedish material to English from the common fact base, rather than introducing a separate content direction.
3. Verify the Swedish and English versions pairwise against the same goals, claims, examples, and course structure.
4. Keep frontmatter and MDX structure intact, then add or update the locale and translated sidebar labels in `astro.config.mts`.

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
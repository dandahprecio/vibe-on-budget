import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
	site: "https://dandahprecio.github.io",
	base: "/vibe-on-budget",
	integrations: [
		mermaid(),
		starlight({
			title: {
				en: "Token Economy for Vibe Coding",
				sv: "Tokenekonomi för Vibe Coding",
			},
			defaultLocale: "en",
			locales: {
				en: { label: "English" },
				sv: { label: "Svenska", lang: "sv" },
			},
			editLink: {
				baseUrl:
					"https://github.com/dandahprecio/vibe-on-budget/edit/main/",
			},
			lastUpdated: true,
			customCss: [
				"./node_modules/katex/dist/katex.min.css",
			],
			sidebar: [
				{
					label: "Main Track",
					translations: { sv: "Huvudspår" },
					items: [
						{
							label: "Understand Usage",
							translations: { sv: "Förstå förbrukningen" },
							slug: "understand-usage",
						},
						{
							label: "First Controlled Attempt",
							translations: { sv: "Gör ett första, kontrollerat försök" },
							slug: "first-task",
						},
						{
							label: "Clear Tasks and Right Context",
							translations: { sv: "Ge ett tydligt uppdrag och rätt kontext" },
							slug: "prompts-and-context",
						},
						{
							label: "Work Modes and Sessions",
							translations: { sv: "Välj arbetssätt och hantera sessionen" },
							slug: "sessions-and-models",
						},
						{
							label: "Agent Boundaries",
							translations: { sv: "Avgränsa agentens arbete" },
							slug: "agents-and-tools",
						},
						{
							label: "Save What Works",
							translations: { sv: "Spara det som fungerar i projektet" },
							slug: "project-instructions",
						},
						{
							label: "Compare and Build Your Routine",
							translations: { sv: "Jämför och bygg din arbetsrutin" },
							slug: "working-routine",
						},
					],
				},
				{
					label: "Deep Dives",
					translations: { sv: "Fördjupning" },
					items: [
						{
							label: "Diagnose High Usage",
							translations: { sv: "Undersök hög förbrukning" },
							slug: "deep-dives/diagnose-usage",
						},
						{
							label: "Behind the Interface",
							translations: { sv: "Förstå det som sker bakom gränssnittet" },
							slug: "deep-dives/copilot-internals",
						},
					],
				},
				{
					label: "Reference",
					translations: { sv: "Referens" },
					items: [
						{
							label: "Glossary",
							translations: { sv: "Ordlista" },
							slug: "glossary",
						},
					],
				},
			],
			plugins: [],
		}),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});
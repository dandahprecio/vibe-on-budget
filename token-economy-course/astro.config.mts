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
					label: "Modules",
					translations: {
						sv: "Moduler",
					},
					items: [
						{
							label: "1. The Hidden Tax",
							translations: { sv: "1. Den dolda skatten" },
							slug: "01-hidden-tax",
						},
						{
							label: "2. How Copilot Builds Context",
							translations: { sv: "2. Hur Copilot bygger kontext" },
							slug: "02-context-model",
						},
						{
							label: "3. Measure Before You Cut",
							translations: { sv: "3. Mät innan du kapar" },
							slug: "03-measure-before-you-cut",
						},
						{
							label: "4. Quick Wins",
							translations: { sv: "4. Snabba vinster" },
							slug: "04-quick-wins",
						},
						{
							label: "5. Writing Prompts That Cost Less",
							translations: { sv: "5. Skriva promptar som kostar mindre" },
							slug: "05-cheaper-prompts",
						},
						{
							label: "6. Project Setup for Token Efficiency",
							translations: { sv: "6. Projektinställningar för tokeneffektivitet" },
							slug: "06-project-setup",
						},
						{
							label: "7. Agents, Tools & MCP Hygiene",
							translations: { sv: "7. Agenter, verktyg och MCP-hygien" },
							slug: "07-agents-mcp",
						},
						{
							label: "8. Vibe Coding Without the Debt",
							translations: { sv: "8. Vibe coding utan teknisk skuld" },
							slug: "08-vibe-coding-guardrails",
						},
						{
							label: "9. The Big Picture",
							translations: { sv: "9. Helhetsbilden" },
							slug: "09-under-the-hood",
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
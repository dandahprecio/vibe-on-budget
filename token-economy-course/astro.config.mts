import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
	site: "https://dada-consulting.github.io",
	base: "/token-economy-course",
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
					"https://github.com/dada-consulting/token-economy-course/edit/main/",
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
							label: "3. Quick Wins",
							translations: { sv: "3. Snabba vinster" },
							slug: "03-quick-wins",
						},
						{
							label: "4. Writing Prompts That Cost Less",
							translations: { sv: "4. Skriva promptar som kostar mindre" },
							slug: "04-cheaper-prompts",
						},
						{
							label: "5. Project Setup for Token Efficiency",
							translations: { sv: "5. Projektinställningar för tokeneffektivitet" },
							slug: "05-project-setup",
						},
						{
							label: "6. Agents, Tools & MCP Hygiene",
							translations: { sv: "6. Agenter, verktyg och MCP-hygien" },
							slug: "06-agents-mcp",
						},
						{
							label: "7. Vibe Coding Without the Debt",
							translations: { sv: "7. Vibe coding utan teknisk skuld" },
							slug: "07-vibe-coding-guardrails",
						},
						{
							label: "8. Under the Hood",
							translations: { sv: "8. Under huven" },
							slug: "08-under-the-hood",
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
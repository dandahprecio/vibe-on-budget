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
							label: "Vad händer när du trycker Enter?",
							translations: { sv: "1. Vad händer när du trycker Enter?" },
							slug: "01-what-happens",
						},
						{
							label: "Vad kostar ett Enter-tryck?",
							translations: { sv: "2. Vad kostar ett Enter-tryck?" },
							slug: "02-price-and-measurement",
						},
						{
							label: "Skriv snålare prompts",
							translations: { sv: "3. Skriv snålare prompts" },
							slug: "03-cheaper-prompts",
						},
						{
							label: "Bygg ett snålt projekt",
							translations: { sv: "4. Bygg ett snålt projekt" },
							slug: "04-lean-project",
						},
						{
							label: "Kör agenter och MCP utan slöseri",
							translations: { sv: "5. Kör agenter och MCP utan slöseri" },
							slug: "05-agents-mcp",
						},
						{
							label: "Vibea utan skuld",
							translations: { sv: "6. Vibea utan skuld" },
							slug: "06-vibe-coding",
						},
						{
							label: "Vad Copilot gör åt dig",
							translations: { sv: "7. Vad Copilot gör åt dig" },
							slug: "07-under-the-hood",
						},
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
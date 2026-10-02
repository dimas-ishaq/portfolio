export interface SkillGroup {
	category: string;
	items: string[];
}

export const skillGroups: SkillGroup[] = [
	{ category: "Frontend", items: ["TypeScript", "Astro", "Tailwind", "React"] },
	{ category: "Backend", items: ["Node", "Postgres", "REST"] },
	{ category: "Tools", items: ["Git", "Figma", "Testing Library"] },
];
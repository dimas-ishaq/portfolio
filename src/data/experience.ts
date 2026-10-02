export interface Experience {
	id: string;
	role: string;
	org: string;
	period: string;
	bullets: string[];
}

export const experiences: Experience[] = [
	{
		id: "exp-1",
		role: "Frontend Developer",
		org: "Example Co",
		period: "2024 — Present",
		bullets: ["Built fast static sites with Astro and Tailwind.", "Shipped motion that respects prefers-reduced-motion."],
	},
	{
		id: "exp-2",
		role: "Junior Developer",
		org: "Another Studio",
		period: "2023 — 2024",
		bullets: ["Worked across design and frontend.", "Learned to keep bundles small."],
	},
];
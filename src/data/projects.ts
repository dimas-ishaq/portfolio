export interface Project {
	id: string;
	title: string;
	desc: string;
	tags: string[];
	link?: string;
	image?: string;
}

export const projects: Project[] = [
	{
		id: "project-one",
		title: "Project One",
		desc: "Short description of what this project does and why it exists.",
		tags: ["TypeScript", "Astro"],
		link: "https://example.com",
	},
	{
		id: "project-two",
		title: "Project Two",
		desc: "Short description of what this project does and why it exists.",
		tags: ["Node", "Postgres"],
	},
	{
		id: "project-three",
		title: "Project Three",
		desc: "Short description of what this project does and why it exists.",
		tags: ["React", "Vite"],
		link: "https://example.com",
	},
];
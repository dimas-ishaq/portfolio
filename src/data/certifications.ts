export interface Certification {
	id: string;
	title: string;
	issuer: string;
	desc?: string;
	link?: string;
}

export const certifications: Certification[] = [
	{
		id: "bangkit-2023",
		title: "Bangkit Academy 2023",
		issuer: "Google / GoTo / Traveloka",
		desc: "Cloud Computing Learning Path",
	},
	{
		id: "google-cloud",
		title: "Menjadi Google Cloud Engineer",
		issuer: "Dicoding / Google Cloud",
		desc: "Course completion — Cloud Computing Fundamentals, Infrastructure, Networking; credential period ended 3 May 2026.",
	},
	{
		id: "dicoding-fe-expert",
		title: "Menjadi Front-End Web Developer Expert",
		issuer: "Dicoding",
		desc: "Completed 23 May 2024 · valid until 23 May 2027 — mobile-first, accessibility, clean code, PWA, testing, performance, CI/CD.",
	},
	{
		id: "dicoding-more",
		title: "More Dicoding courses",
		issuer: "Dicoding",
		desc: "Additional learning — verify via public Dicoding profile.",
	},
];
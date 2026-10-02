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
		title: "Google Cloud",
		issuer: "Google Cloud",
		desc: "Cloud Computing Fundamentals, Infrastructure, Networking",
	},
	{
		id: "dicoding-bundle",
		title: "59+ Sertifikat Dicoding",
		issuer: "Dicoding",
		desc: "Backend dengan Google Cloud, JavaScript, Git & GitHub, React Developer, Front-End Developer",
	},
];
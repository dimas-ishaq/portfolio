export interface SocialLink {
	label: string;
	href: string;
}

export interface Stat {
	value: string;
	label: string;
}

export const profile = {
	name: "Dimas Maulana Ishaq",
	role: "Application Support | Software Developer | Moodle LMS Administrator | IT Educator",
	tagline:
		"Membangun, mengelola, dan mendukung sistem informasi pendidikan, LMS Moodle, aplikasi berbasis web, serta infrastruktur pembelajaran digital untuk meningkatkan efisiensi operasional dan pengalaman pengguna.",
	email: "dimasmaulanaishaq01@gmail.com",
	location: "Indonesia",
	openTo: [
		"Application Support",
		"LMS Administrator",
		"Junior Software Engineer",
		"IT Support",
		"System Administrator",
		"Technical Trainer",
	],
	links: [{ label: "GitHub", href: "https://github.com/dimas-ishaq" }] as SocialLink[],
	highlights: [
		"Moodle User and Course Administration",
		"School Assessment System Support",
		"Application Development and Deployment",
		"Technology Training for Educators",
	],
	stats: [] satisfies Stat[],
	subjectsTaught: [
		"Pemrograman Dasar",
		"Basis Data",
		"Pemrograman Berorientasi Objek",
		"Pemrograman Perangkat Bergerak",
		"Koding dan Kecerdasan Artifisial",
	],
};
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
	role: "Application Support Engineer | Moodle LMS Administrator",
	tagline:
		"Membangun, mengelola, dan mendukung sistem informasi pendidikan, LMS Moodle, aplikasi berbasis web, serta infrastruktur pembelajaran digital untuk meningkatkan efisiensi operasional dan pengalaman pengguna.",
	email: "dimas@example.com",
	location: "Indonesia",
	openTo: [
		"Application Support",
		"LMS Administrator",
		"Junior Software Engineer",
		"IT Support",
		"System Administrator",
		"Technical Trainer",
	],
	links: [] as SocialLink[],
	stats: [
		{ value: "59+", label: "Sertifikat Dicoding" },
		{ value: "1000+", label: "Akun Moodle dikelola" },
		{ value: "5+", label: "Tahun layanan pengguna" },
		{ value: "10+", label: "Proyek sistem pendidikan" },
	] satisfies Stat[],
	subjectsTaught: [
		"Pemrograman Dasar",
		"Basis Data",
		"Pemrograman Berorientasi Objek",
		"Pemrograman Perangkat Bergerak",
		"Koding dan Kecerdasan Artifisial",
	],
};
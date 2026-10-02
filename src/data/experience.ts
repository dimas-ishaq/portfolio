export interface Experience {
	id: string;
	role: string;
	org: string;
	period: string;
	bullets: string[];
}

export const experiences: Experience[] = [
	{
		id: "guru-pplg",
		role: "Guru PPLG / IT Educator",
		org: "SMK Plus Pelita Nusantara",
		period: "Saat ini",
		bullets: [
			"Mengajar software development, basis data, OOP, mobile, serta koding dan AI.",
			"Menyusun modul Kurikulum Merdeka dan media pembelajaran digital.",
			"Mengintegrasikan AI dalam pembelajaran praktik.",
		],
	},
	{
		id: "moodle-admin",
		role: "Moodle Administrator",
		org: "SMK Plus Pelita Nusantara",
		period: "Saat ini",
		bullets: [
			"Instalasi, konfigurasi, deployment, dan maintenance Moodle.",
			"Mengelola user, course, quiz, serta mendukung ujian online.",
			"Memberikan pelatihan dan dukungan kepada guru pengguna LMS.",
		],
	},
	{
		id: "application-support",
		role: "Application Support",
		org: "Sistem Pendidikan",
		period: "Saat ini",
		bullets: [
			"Deployment dan maintenance sistem aplikasi.",
			"Troubleshooting, dukungan pengguna, dan monitoring database.",
			"Mendukung aplikasi PPDB dan sistem ujian sekolah/TKA.",
		],
	},
];
export interface Project {
	id: string;
	title: string;
	desc: string;
	tags: string[];
	category?: string;
	features?: string[];
	link?: string;
	image?: string;
}

export const projects: Project[] = [
	{
		id: "lms-moodle",
		title: "LMS Moodle Sekolah",
		category: "Education Technology",
		desc: "Implementasi LMS Moodle untuk pembelajaran dan ujian online.",
		features: ["Course & user management", "Quiz & ujian online", "Pelatihan guru", "Deployment & maintenance"],
		tags: ["Moodle", "PHP", "MySQL", "Linux"],
	},
	{
		id: "ppdb-wawancara",
		title: "Sistem Wawancara PPDB",
		category: "Web Application",
		desc: "Sistem penilaian wawancara penerimaan peserta didik baru.",
		features: ["Input data siswa", "Penilaian wawancara", "Rekap hasil", "Database terpusat"],
		tags: ["Laravel", "MySQL", "PHP", "Tailwind"],
	},
	{
		id: "ujian-tka",
		title: "Sistem Ujian Sekolah / TKA",
		category: "Computer Based Test",
		desc: "Aplikasi ujian berbasis komputer untuk pelaksanaan sekolah/TKA.",
		features: ["Manajemen soal", "Manajemen peserta", "Laporan nilai", "Monitoring ujian"],
		tags: ["PHP", "MySQL", "JavaScript"],
	},
	{
		id: "dashboard-nilai",
		title: "Dashboard Nilai Akademik",
		category: "Data Analytics",
		desc: "Rekap dan visualisasi data akademik.",
		features: ["Rekap nilai", "Analisis akademik", "Visualisasi data"],
		tags: ["NodeJS", "MySQL", "Chart.js"],
	},
	{
		id: "rest-api",
		title: "REST API Project",
		category: "Backend Development",
		desc: "API backend umum sebagai fondasi integrasi.",
		tags: ["NodeJS", "ExpressJS", "MySQL"],
	},
];
export interface Project {
	id: string;
	title: string;
	desc: string;
	tags: string[];
	category?: string;
	role?: string;
	features?: string[];
	link?: string;
	site?: string;
	image?: string;
}

export const projects: Project[] = [
	{
		id: "ppdb-wawancara",
		title: "PPDB Interview Management System",
		category: "Education Technology | Web Application",
		role: "Application Developer · Application Support · System Maintainer",
		desc: "Aplikasi untuk membantu petugas mencatat, mengelola, dan merekap hasil wawancara penerimaan peserta didik baru secara terstruktur.",
		features: ["Analisis kebutuhan petugas wawancara", "Pengembangan alur pencatatan hasil", "Pengelolaan data calon siswa", "Dukungan penggunaan dan maintenance"],
		tags: ["PHP", "Laravel", "MySQL"],
		link: "https://github.com/dimas-ishaq/penus-wawancara",
	},
	{
		id: "cbt-prem",
		title: "Computer-Based Testing Platform",
		category: "Computer Based Test | School System",
		role: "Application Implementation · Deployment · Technical Support",
		desc: "Implementasi aplikasi ujian berbasis komputer untuk menyiapkan peserta, mengelola pelaksanaan ujian, dan mendukung pengguna saat asesmen.",
		features: ["Konfigurasi sistem", "Koordinasi akun peserta", "Dukungan teknis saat ujian", "Troubleshooting dan pemeliharaan"],
		tags: ["PHP", "MySQL", "JavaScript"],
		link: "https://github.com/dimas-ishaq/cbt-prem",
	},
	{
		id: "lms-moodle",
		title: "Moodle LMS Implementation",
		category: "LMS | Educational Technology",
		role: "System Administration · User Support",
		desc: "Implementasi dan pengelolaan Moodle untuk pembelajaran, asesmen, manajemen pengguna, dan koordinasi aktivitas akademik.",
		features: ["Instalasi dan konfigurasi", "Manajemen user dan role", "Administrasi course dan kuis", "Pelatihan guru dan troubleshooting"],
		tags: ["Moodle", "PHP", "MySQL", "Linux"],
		site: "https://lms.smkpluspenus.my.id",
	},
	{
		id: "talentsync",
		title: "TalentSync HR Application",
		category: "Business Application | Database",
		role: "Application Developer",
		desc: "Aplikasi HR berbasis Laravel dan Blade untuk mengeksplorasi pengelolaan proses serta data sumber daya manusia melalui aplikasi web.",
		tags: ["Laravel", "PHP", "Blade"],
		link: "https://github.com/dimas-ishaq/TalentSync",
	},
	{
		id: "sistem-presensi",
		title: "Sistem Aplikasi Presensi",
		category: "Operational System",
		role: "Application Developer",
		desc: "Aplikasi pencatatan presensi berbasis web untuk pengelolaan data kehadiran.",
		tags: ["JavaScript"],
		link: "https://github.com/dimas-ishaq/Sistem-Aplikasi-Presensi",
	},
	{
		id: "gudang-pintar",
		title: "Gudang Pintar",
		category: "Inventory Application",
		role: "Application Developer",
		desc: "Aplikasi berbasis TypeScript untuk mengeksplorasi digitalisasi pengelolaan data gudang.",
		tags: ["TypeScript"],
		link: "https://github.com/dimas-ishaq/gudang-pintar",
	},
	{
		id: "backend-cicd",
		title: "Backend Engineering & CI/CD",
		category: "Backend | Testing | CI/CD",
		role: "Learning Project",
		desc: "Proyek pembelajaran backend yang menunjukkan praktik pengembangan, pengujian, dan integrasi berkelanjutan pada aplikasi JavaScript.",
		tags: ["JavaScript", "Node.js", "CI/CD"],
		link: "https://github.com/dimas-ishaq/dicoding-backend-expert",
	},
	{
		id: "student-performance",
		title: "Student Performance Data Analysis",
		category: "Data Science | Education Data",
		role: "Learning Project",
		desc: "Analisis data performa siswa untuk mengolah, mengeksplorasi, dan menyajikan insight dari data pendidikan.",
		tags: ["Python", "Jupyter Notebook", "Data Analysis"],
		link: "https://github.com/dimas-ishaq/Student-s-Performance-Dicoding",
	},
];
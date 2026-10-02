export interface SkillGroup {
	category: string;
	items: string[];
}

export const skillGroups: SkillGroup[] = [
	{
		category: "Application Support",
		items: ["User Support", "Incident Management", "Troubleshooting", "Ticket Handling", "Deployment Aplikasi", "Monitoring Sistem"],
	},
	{
		category: "Database",
		items: ["MySQL", "MariaDB", "PostgreSQL", "SQL Query", "Database Design", "Backup & Recovery"],
	},
	{
		category: "LMS & E-Learning",
		items: ["Moodle Administration", "User Management", "Course & Quiz Management", "Server Deployment", "Maintenance"],
	},
	{
		category: "Web Development",
		items: ["PHP", "Laravel", "JavaScript", "ReactJS", "NodeJS", "REST API"],
	},
	{
		category: "Cloud & Infrastructure",
		items: ["Google Cloud", "Linux Server", "Hosting", "CI/CD", "Git", "GitHub"],
	},
];
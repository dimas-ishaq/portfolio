export interface SkillGroup {
	category: string;
	items: string[];
}

export const skillGroups: SkillGroup[] = [
	{
		category: "Application Support",
		items: ["Application Deployment", "System Configuration", "User Administration", "Troubleshooting", "Incident Documentation", "Maintenance", "User Training"],
	},
	{
		category: "Database",
		items: ["MySQL", "MariaDB", "SQL Query", "Database Design"],
	},
	{
		category: "LMS & E-Learning",
		items: ["Moodle Administration", "User Management", "Course & Quiz Management", "Server Deployment", "Maintenance"],
	},
	{
		category: "Web Development",
		items: ["PHP", "Laravel", "JavaScript", "TypeScript", "React", "Node.js", "REST API", "HTML & CSS"],
	},
	{
		category: "Cloud & Infrastructure",
		items: ["Google Cloud", "Linux Server", "Hosting", "CI/CD", "Git", "GitHub"],
	},
];
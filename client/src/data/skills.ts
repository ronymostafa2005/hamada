export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "laptop-code",
    skills: [
      { name: "React.js", level: 5 },
      { name: "Vue.js", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Tailwind CSS", level: 5 }
    ]
  },
  {
    title: "Backend Development", 
    icon: "server",
    skills: [
      { name: "Python", level: 5 },
      { name: "Node.js", level: 4 },
      { name: "Django", level: 4 },
      { name: "PostgreSQL", level: 5 }
    ]
  },
  {
    title: "Odoo Development",
    icon: "cogs", 
    skills: [
      { name: "Module Development", level: 5 },
      { name: "ORM & Models", level: 5 },
      { name: "QWeb Templates", level: 4 },
      { name: "API Integration", level: 4 }
    ]
  }
];

export const additionalSkills = [
  "Docker", "Git", "AWS", "Linux", "Redis", "Nginx", "Jenkins", "Figma"
];

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
      { name: "XML Views", level: 5 },
      { name: "Python Backend", level: 5 },
      { name: "OWL JavaScript", level: 4 },
      { name: "Portal Development", level: 4 },
      { name: "Controllers", level: 5 },
      { name: "Security Groups", level: 4 },
      { name: "Website Builder", level: 4 },
      { name: "APIs & Integration", level: 5 }
    ]
  }
];

export const additionalSkills = [
  "Docker", "Git", "AWS", "Linux", "Redis", "Nginx", "Jenkins", "Figma"
];

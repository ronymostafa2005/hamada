export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "web" | "odoo";
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
    details?: string;
    caseStudy?: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React frontend, Node.js backend, and payment integration.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: "2", 
    title: "Manufacturing ERP System",
    description: "Custom Odoo implementation for manufacturing company with inventory and production modules.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "odoo",
    technologies: ["Odoo", "Python", "PostgreSQL"],
    links: {
      details: "#",
      caseStudy: "#"
    }
  },
  {
    id: "3",
    title: "Portfolio Website",
    description: "Modern portfolio website for creative agency with smooth animations and responsive design.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["React", "Tailwind", "Framer Motion"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: "4",
    title: "Retail POS Integration",
    description: "Custom Odoo POS module with advanced reporting and multi-location inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "odoo",
    technologies: ["Odoo", "JavaScript", "XML"],
    links: {
      details: "#",
      caseStudy: "#"
    }
  },
  {
    id: "5",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["Vue.js", "Chart.js", "Laravel"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: "6",
    title: "HR Management System", 
    description: "Complete HR solution with employee management, payroll, and attendance tracking modules.",
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "odoo",
    technologies: ["Odoo", "Python", "REST API"],
    links: {
      details: "#",
      caseStudy: "#"
    }
  }
];

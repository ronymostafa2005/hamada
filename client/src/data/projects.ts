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
    title: "1st Decor - Interior Design Website",
    description: "Modern e-commerce platform for interior design and decoration services with elegant UI and smooth user experience.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    links: {
      demo: "https://1stdecor.com",
      github: "#"
    }
  },
  {
    id: "2",
    title: "Aboghalib Office - Law Firm Website",
    description: "Professional website for legal services with appointment booking and case management features.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["WordPress", "PHP", "MySQL", "Bootstrap"],
    links: {
      demo: "https://aboghaliaoffice.com",
      github: "#"
    }
  },
  {
    id: "3",
    title: "Lopsy - E-commerce Platform",
    description: "Full-featured online store with payment integration and inventory management system.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["React", "Node.js", "Stripe API", "PostgreSQL"],
    links: {
      demo: "https://lopsy.org",
      github: "#"
    }
  },
  {
    id: "4",
    title: "Maharh - Saudi Real Estate Platform",
    description: "Comprehensive real estate platform for property listings and management in Saudi Arabia.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API"],
    links: {
      demo: "https://maharh.com.sa/",
      github: "#"
    }
  },
  {
    id: "5",
    title: "Priceless Medical - Healthcare Platform",
    description: "Medical services platform with appointment booking and patient management system.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "web",
    technologies: ["React", "Django", "PostgreSQL", "WebRTC"],
    links: {
      demo: "https://pricelessmed.com/",
      github: "#"
    }
  },
  {
    id: "6",
    title: "Manufacturing ERP System",
    description: "Custom Odoo implementation with inventory tracking, production planning, and quality control modules using advanced XML views and Python controllers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "odoo",
    technologies: ["Python", "XML Views", "OWL JS", "Controllers", "PostgreSQL"],
    links: {
      details: "#",
      caseStudy: "#"
    }
  },
  {
    id: "7",
    title: "Customer Portal & Website Integration",
    description: "Comprehensive portal solution with customer self-service features, website builder integration, and custom security groups management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "odoo",
    technologies: ["Portal Development", "Website Builder", "Security Groups", "XML", "Python"],
    links: {
      details: "#",
      caseStudy: "#"
    }
  },
  {
    id: "8",
    title: "Third-Party API Integration Suite",
    description: "Complete integration solution connecting Odoo with external systems including payment gateways, shipping providers, and accounting software through REST APIs.",
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "odoo",
    technologies: ["APIs & Integration", "Python", "Controllers", "XML Views", "OWL JS"],
    links: {
      details: "#",
      caseStudy: "#"
    }
  }
];

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Info, FileText } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { useLanguage } from "@/contexts/language-context";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "odoo">("all");
  const { t } = useLanguage();

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const filterButtons = [
    { id: "all" as const, label: t("projects.all") },
    { id: "web" as const, label: t("projects.web") },
    { id: "odoo" as const, label: t("projects.odoo") }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("projects.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((button) => (
            <Button
              key={button.id}
              onClick={() => setActiveFilter(button.id)}
              variant={activeFilter === button.id ? "default" : "outline"}
              className="px-6 py-2 rounded-full font-medium"
              data-testid={`filter-${button.id}`}
            >
              {button.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-project-${project.id}`}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`badge-tech-${tech.toLowerCase().replace('.', '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
                      data-testid={`link-demo-${project.id}`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
                      data-testid={`link-github-${project.id}`}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.links.details && (
                    <a
                      href={project.links.details}
                      className="text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
                      data-testid={`link-details-${project.id}`}
                    >
                      <Info size={16} />
                      Details
                    </a>
                  )}
                  {project.links.caseStudy && (
                    <a
                      href={project.links.caseStudy}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
                      data-testid={`link-case-study-${project.id}`}
                    >
                      <FileText size={16} />
                      Case Study
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LaptopIcon, Server, ServerCog, Star } from "lucide-react";
import { skillCategories, additionalSkills } from "@/data/skills";
import { useLanguage } from "@/contexts/language-context";

const SkillsSection = () => {
  const { t } = useLanguage();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "laptop-code":
        return LaptopIcon;
      case "server":
        return Server;
      case "cogs":
        return ServerCog;
      default:
        return LaptopIcon;
    }
  };

  const renderStars = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={
              star <= level
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("skills.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = getIconComponent(category.icon);
            return (
              <Card 
                key={category.title} 
                className="p-8 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <IconComponent className="text-primary text-3xl mr-4" />
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="flex items-center justify-between"
                        data-testid={`skill-${skill.name.toLowerCase().replace(/[.\s]+/g, '-')}`}
                      >
                        <span>{skill.name}</span>
                        {renderStars(skill.level)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4" data-testid="additional-skills">
            {additionalSkills.map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="px-4 py-2 text-base"
                data-testid={`badge-skill-${skill.toLowerCase()}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

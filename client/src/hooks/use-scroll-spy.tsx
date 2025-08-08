import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
      const scrollPosition = window.scrollY + offset;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(section.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}

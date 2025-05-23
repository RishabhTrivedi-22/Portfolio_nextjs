const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
          
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // This creates a threshold in the middle of the viewport
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id], div[id]");
    console.log(sections);
    
    sections.forEach((section) => observer.observe(section));
    
    

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
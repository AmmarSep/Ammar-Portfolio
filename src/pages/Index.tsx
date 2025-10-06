import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, Github, Briefcase, GraduationCap } from "lucide-react";

const Index = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ammar_Resume.pdf';
    link.download = 'Ammar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    "Java Development": ["Java SE/EE", "Spring Boot Framework", "API Development", "Microservices Integration"],
    "Databases": ["SQL (MySQL, Oracle)", "NoSQL (MongoDB)"],
    "Cloud Platforms": ["GCP (Google Cloud Platform)", "Cloud Foundry"],
    "Frontend Technologies": ["HTML", "CSS", "JavaScript", "JSP", "AJAX", "ReactJS"],
    "Build Tools": ["Maven", "Gradle"],
    "Project Management": ["Jira", "Confluence", "Trello", "Redmine", "ALM"],
    "IDEs": ["IntelliJ IDEA", "Eclipse", "Visual Studio Code", "STS"],
    "Version Control": ["GitHub", "GitLab", "BitBucket"],
    "AI Tools": ["Github Copilot", "ChatGPT", "Meta AI", "Anthropic Claude"]
  };

  const experiences = [
    {
      company: "Capgemini",
      period: "Feb 2022 – Present",
      type: "IT Experience",
      responsibilities: [
        "Leveraged Liferay portal development for creating interactive and user-friendly web applications",
        "Utilized JavaScript, AJAX, JSP and other frontend technologies to create dynamic user interfaces",
        "Proficient in using leading IDEs such as Visual Studio Code, IntelliJ IDEA, Eclipse, and Spring Tool Suite"
      ]
    },
    {
      company: "Accenture",
      period: "Aug 2021 - Feb 2022",
      type: "IT Experience",
      responsibilities: [
        "Developed Java-based applications, leveraging frameworks like Spring Boot for rapid and efficient development"
      ]
    },
    {
      company: "Asta Systech",
      period: "Dec 2019 – July 2021",
      type: "IT Experience",
      responsibilities: [
        "Demonstrated expertise in debugging Java projects, both frontend and backend",
        "Managed project tasks and workflows using Jira, ensuring timely completion of tickets and deliverables"
      ]
    },
    {
      company: "Non IT Role",
      period: "Nov 2015 – Dec 2019",
      type: "Non IT Experience",
      responsibilities: [
        "Utilized AutoCAD and Revit software for designing mechanical and electrical systems",
        "Created detailed drawings, layouts, and schematics for HVAC, plumbing, drainage, fire fighting equipment"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Tamilnadu Open University",
      status: "Currently Pursuing (Expected 2025)",
      year: "2023 - 2025"
    },
    {
      degree: "Bachelor of Engineering",
      institution: "National Engineering College",
      status: "Completed",
      year: "2015"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Rosemary Matric Higher Secondary School",
      status: "Completed",
      year: "2011"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
                AMMAR S S
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-100">
                Full Stack Software Engineer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                5+ years of IT experience specializing in Java development, Spring Boot, and modern web technologies
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-300">
              <a href="mailto:s.s.ammar@outlook.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>s.s.ammar@outlook.com</span>
              </a>
              <a href="tel:+919751883398" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span>+91 9751883398</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Whitefield, Bangalore</span>
              </div>
            </div>

            <Button
              size="lg"
              onClick={handleDownloadResume}
              className="mt-6 text-lg px-8 py-6 shadow-elegant hover:shadow-xl transition-all animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a results-oriented IT professional with extensive experience in Java development. I specialize in 
                developing APIs, integrating microservices, and working with frameworks like Spring Boot, JSP, and JavaScript 
                for efficient and scalable solutions. Also an expertise in HTML, CSS and Bootstrap.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="shadow-elegant hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{exp.type}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 self-start md:self-auto">
                      {exp.period}
                    </Badge>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <span>{edu.status}</span>
                    <Badge variant="secondary" className="w-fit mt-2">{edu.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-bold">Get My Complete Resume</h2>
          <p className="text-xl text-muted-foreground">
            Download the full PDF version of my resume for detailed information
          </p>
          <Button
            size="lg"
            onClick={handleDownloadResume}
            className="text-lg px-12 py-6 shadow-elegant hover:shadow-xl transition-all"
          >
            <Download className="h-6 w-6 mr-2" />
            Download Resume PDF
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2024 Ammar S S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

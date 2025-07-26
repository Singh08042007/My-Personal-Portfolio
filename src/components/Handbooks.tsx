import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, ExternalLink } from "lucide-react";

const Handbooks = () => {
  const handbooks = [
    {
      title: "Hackathons For Complete Beginners",
      description: "A comprehensive guide covering everything beginners need to know about participating in hackathons - from preparation to execution and beyond.",
      topics: ["Getting Started", "Team Formation", "Idea Development", "Technical Skills", "Presentation Tips", "Post-Hackathon Strategy"],
      link: "https://drive.google.com/file/d/1zoIoe5BfTUeUOA7w5BWAEHZjdjImCn79/view?usp=sharing",
      icon: <BookOpen className="h-6 w-6" />,
      type: "PDF Guide"
    }
  ];

  return (
    <section id="handbooks" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Written <span className="text-primary">Handbooks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides and resources I've created to help others learn and grow in the tech community.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {handbooks.map((handbook, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {handbook.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {handbook.title}
                      </CardTitle>
                      <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                        {handbook.type}
                      </span>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {handbook.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {handbook.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full border border-border"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    className="flex-1 group/btn"
                  >
                    <a
                      href={handbook.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      View Handbook
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="group/download"
                  >
                    <a
                      href={handbook.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4 group-hover/download:scale-110 transition-transform" />
                      Download
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">More handbooks coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Handbooks;
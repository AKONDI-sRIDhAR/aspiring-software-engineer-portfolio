import Navigation from '@/components/Navigation'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Code2, 
  Palette, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Globe, 
  Calendar,
  MapPin,
  ExternalLink,
  Sparkles,
  Database,
  Layers,
  Zap
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Open to Opportunities</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Siripireddy Bhavana Reddy
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Aspiring Software Engineer
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Highly motivated B.Tech CSE candidate (CGPA 6.5) proficient in <span className="text-primary font-semibold">Java, C, and Python</span>. 
            Combines a practical mindset for process optimization with foundational experience in front-end research and technical content generation.
          </p>

          <div className="flex flex-wrap gap-3 justify-center pt-6">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-card-foreground font-medium hover:bg-accent transition-colors">
              <Code2 className="w-4 h-4" />
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate learner focused on building impactful solutions through code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Card */}
            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2 border-l-2 border-primary pl-4">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <p className="font-semibold text-foreground">B.Tech in Computer Science Engineering</p>
                      <span className="text-xs text-muted-foreground">Sep 2023 - Sep 2027</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Manav Rachna University</p>
                    <p className="text-sm text-primary font-medium">CGPA: 6.5 (till 4th semester)</p>
                  </div>
                  
                  <div className="space-y-2 border-l-2 border-accent pl-4">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <p className="font-semibold text-foreground">11th - 12th Standard (MPC)</p>
                      <span className="text-xs text-muted-foreground">Jul 2021 - May 2023</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Sri Chaitanya Junior College</p>
                    <p className="text-sm text-accent font-medium">Score: 80%</p>
                  </div>
                  
                  <div className="space-y-2 border-l-2 border-muted-foreground pl-4">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <p className="font-semibold text-foreground">10th Standard</p>
                      <span className="text-xs text-muted-foreground">Jul 2020 - May 2021</span>
                    </div>
                    <p className="text-sm text-muted-foreground">KKR Gowtham Public School</p>
                    <p className="text-sm font-medium">Score: 98%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages Card */}
            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">Telugu</span>
                    <Badge variant="default" className="bg-primary">Native</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">English</span>
                    <Badge variant="default" className="bg-primary">Fluent</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">Spanish</span>
                    <Badge variant="secondary">Beginner</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">Hindi</span>
                    <Badge variant="secondary">Beginner</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills Matrix</h2>
            <p className="text-muted-foreground">Technical proficiency across multiple domains</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card className="border-border/50 relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              <CardContent className="pt-6 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Technical Skills</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-3 font-medium">Programming Languages</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="px-3 py-1 border-primary/50 text-primary hover:bg-primary/10">
                        <Database className="w-3 h-3 mr-1" />
                        Java
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1 border-primary/50 text-primary hover:bg-primary/10">
                        <Zap className="w-3 h-3 mr-1" />
                        C
                      </Badge>
                      <Badge variant="outline" className="px-3 py-1 border-primary/50 text-primary hover:bg-primary/10">
                        <Layers className="w-3 h-3 mr-1" />
                        Python
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Design/UX Skills */}
            <Card className="border-border/50 relative overflow-hidden group hover:border-accent/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors"></div>
              <CardContent className="pt-6 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Palette className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Design & UX</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="px-3 py-1 border-accent/50 text-accent hover:bg-accent/10">
                    Prototyping Tools
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 border-accent/50 text-accent hover:bg-accent/10">
                    User Research
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 border-accent/50 text-accent hover:bg-accent/10">
                    Interaction Design
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 border-accent/50 text-accent hover:bg-accent/10">
                    Visual Design
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground">Professional journey and growth</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
            
            <div className="space-y-8 relative">
              {/* Internship */}
              <Card className="ml-20 border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="absolute -left-12 top-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-primary-foreground" />
                  </div>
                  
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Front End Developer & Research Intern</h3>
                      <p className="text-muted-foreground">Engineer's World Pvt Ltd</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Jun 2025 - Aug 2025</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Researched SEO best practices and optimization strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Aided in technical website content generation and development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Contributed to front-end research initiatives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Work</h2>
            <p className="text-muted-foreground">Showcasing future projects and innovations</p>
          </div>

          <Card className="border-border/50 border-dashed">
            <CardContent className="py-20 text-center">
              <div className="max-w-md mx-auto space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Projects Coming Soon</h3>
                <p className="text-muted-foreground">
                  Exciting projects are in development. Stay tuned for innovative solutions and creative implementations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Awards & Certifications</h2>
            <p className="text-muted-foreground">Recognition and continuous learning</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground font-medium">NPTEL Certification</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground font-medium">Cisco Certification</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground font-medium">LinkedIn Certification</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Awards */}
            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Awards</h3>
                </div>
                
                <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/20">
                        <Award className="w-8 h-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">Best Volunteer Award</h4>
                        <p className="text-sm text-muted-foreground">Dr OP Bhalla Foundation</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Recognized for outstanding contribution and dedication to volunteer initiatives
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground">Open to opportunities and collaborations</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <Card className="border-border/50 hover:border-primary/50 transition-colors group">
              <CardContent className="pt-6">
                <a href="mailto:your.email@example.com" className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">[Your Email]</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="border-border/50 hover:border-accent/50 transition-colors group">
              <CardContent className="pt-6">
                <a href="tel:7207893400" className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+91 7207893400</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </CardContent>
            </Card>

            {/* LinkedIn */}
            <Card className="border-border/50 hover:border-primary/50 transition-colors group">
              <CardContent className="pt-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-medium text-foreground">[Your LinkedIn]</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-border/50 hover:border-accent/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2025 Siripireddy Bhavana Reddy. Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
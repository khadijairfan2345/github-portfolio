"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Menu, X, Github, Linkedin, Mail, Code, Brain, Database, Cpu, Users, ChevronDown } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "work", "leadership", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Python", level: 95, icon: Code },
    { name: "C++, C#, Java, R", level: 90, icon: Code },
    { name: "HTML & CSS, Bootstrap", level: 95, icon: Code },
    { name: "React.js, Node.js, Flask", level: 85, icon: Code },
    { name: "Deep Learning, Machine Learning", level: 90, icon: Brain },
    { name: "Computer Vision, NLP", level: 90, icon: Brain },
    { name: "EDA, Data Preprocessing", level: 85, icon: Database },
    { name: "TensorFlow, PyTorch", level: 90, icon: Cpu },
    { name: "Docker, CI/CD, Git, GitHub", level: 85, icon: Code },
    { name: "SQL, NoSQL, Firebase", level: 80, icon: Database },
  ]

  const workExperience = [
    {
      role: "Senior Computer Vision Engineer | Team Lead",
      company: "VisionRD",
      duration: "Jul 2024 – Aug 2025",
      description: [
        "Enhanced DistriFusion by integrating Hugging Face pipelines (Stable Diffusion 3, ControlNets, Flux, Inpaint) for high-res distributed inference.",
        "Integrated Stable Diffusion 3 ControlNet into PipeFusion; optimized displaced patch pipeline for multi-GPU systems.",
        "Designed and deployed vFuseAct: a real-time action segmentation model (30 FPS) for egocentric video streams.",
        "Achieved 98%+ accuracy (Haval) and 99% (Thal Engineering) on live automotive production lines.",
      ],
    },
    {
      role: "Systems Engineer, Deep Learning",
      company: "Vector Inc.",
      duration: "Aug 2023 – May 2024",
      description: [
        "Developed advanced pose estimation and body sizing algorithms for vFit, a virtual try-on system.",
        "Used OpenCV, Mediapipe, DensePose, PoseNet, and BodyPix to compute size measurements from keypoints.",
      ],
    },
    {
      role: "Research Fellow, AI",
      company: "CoMSAIL Lab, University of Notre Dame",
      duration: "Jun 2023 – Jul 2023",
      description: [
        "Implemented Physics-Informed Neural Networks (PINNs) using PyTorch; designed custom loss functions to embed physical laws.",
        "Processed and analyzed holographic data from MATLAB, improving accuracy of 3D particle field inference.",
        "Selected as a Sister2Sister Scholar for summer research at Notre Dame.",
      ],
    },
    {
      role: "Research Fellow",
      company: "AI & ML Lab, FAST-NUCES",
      duration: "Feb 2023 – Oct 2023",
      description: [
        "Created and annotated RomU-NER: the first comprehensive Roman Urdu NER dataset (10k entities, 100k vocabulary).",
        "Achieved 86.7% precision using Bi-LSTM-based NER system for Roman Urdu entity extraction.",
      ],
    },
  ]

  const leadership = [
    {
      title: "Campus Lead, Google Developer Student Clubs - FAST Islamabad",
      description:
        "Led initiatives to inspire tech growth among students, organizing workshops and events to foster a learning community.",
    },
    {
      title: "Speaker & Outreach Manager, Google Developer Groups Islamabad",
      description:
        "Spearheaded outreach efforts and engaged local tech enthusiasts through events and speaker sessions.",
    },
    {
      title: "Campus Lead, Pakistani Women in Computing",
      description:
        "Supported initiatives aimed at reducing gender disparity in tech by organizing networking and educational events for women in tech.",
    },
    {
      title: "Computing Secretary, NaSCon '23",
      description:
        "Organized and executed 19 computing events, enhancing tech exposure and practical skills for attendees.",
    },
    {
      title: "Founder & Vice President, Umeed-e-Nau",
      description:
        "Founded a social impact organization, raising 1,000,000 PKR for medical cases, ration, and education drives, demonstrating a commitment to social welfare.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900">khadijairfan2345@gmail.com</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "work", "leadership", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item === "leadership" ? "Community Experience" : item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {["home", "about", "skills", "work", "leadership", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-600 hover:text-blue-600"
                >
                  {item === "leadership" ? "Community Experience" : item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Hi,
                  <br />I am <span className="text-blue-600">Khadija</span>
                  <br />
                  <span className="text-3xl lg:text-4xl text-gray-600">Computer Vision Engineer</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Passionate about building innovative AI solutions and leading tech communities to create meaningful
                  impact.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("work")}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  View My Work
                </Button>
              </div>

              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/khadijairfan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://github.com/khadijairfan2345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github size={28} />
                </a>
                <a
                  href="mailto:khadijairfan2345@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Khadija Irfan"
                      className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full">
                  <Brain size={32} />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <ChevronDown
              size={32}
              className="mx-auto text-gray-400 animate-bounce cursor-pointer"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">I am Khadija Irfan</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I am currently enrolled in FAST NUCES Islamabad Campus for the program Bachelor in Artificial
                  Intelligence as a senior. I've always had a keen eye for the world of technology. Exploring it these
                  past three years has been nothing but exciting and inspiring.
                </p>
                <p>
                  Immensely engaged in the technology industry, and having experienced the emerging Industry 4.0 skills,
                  I envision being a part of this process of revolution to bring forth certain solutions that address
                  global problems. My intent to use technology to address the direst problems in the world has led me to
                  explore the growth and delve into the dynamic world of Data Sciences and Artificial Intelligence.
                </p>
                <p>
                  I see myself as a creative professional in Artificial Intelligence, and Intelligent Agents where I
                  will be involved in bringing about innovative new ventures, products, and opportunities for the tech
                  space around me.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="About Khadija"
                className="rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a versatile Computer Vision Engineer, I possess a broad range of skills that encompass programming, AI,
              and full-stack development. My expertise lies in building innovative solutions using cutting-edge
              technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <IconComponent size={20} className="text-blue-600" />
                        </div>
                        <span className="font-semibold text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Linguistic Proficiency</h3>
            <div className="flex justify-center space-x-6">
              <Badge variant="secondary" className="px-4 py-2">
                English (Fluent)
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Urdu (Native)
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Punjabi (Native)
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.role}</h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">{job.company}</h4>
                    </div>
                    <Badge variant="outline" className="self-start md:self-center">
                      {job.duration}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership & Community Involvement</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 flex-grow">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
              and AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">khadijairfan2345@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                    <p className="text-gray-600">linkedin.com/in/khadijairfan</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Github className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">GitHub</h3>
                    <p className="text-gray-600">github.com/khadijairfan2345</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div>
                    <Input placeholder="Your Name" className="w-full" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="w-full" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={6} className="w-full" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Khadija Irfan</h3>
          <p className="text-gray-400 mb-6">Computer Vision Engineer & AI Enthusiast</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/khadijairfan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/khadijairfan2345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a href="mailto:khadijairfan2345@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">© 2025 Khadija Irfan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

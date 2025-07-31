"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Code,
  Brain,
  Database,
  Cpu,
  Users,
  ChevronDown,
  Star,
  Sparkles,
  Award,
  BookOpen,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "work",
        "publications",
        "research",
        "leadership",
        "contact",
      ]
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
    // Skills & Programming Languages
    { name: "Python, Java, C, C++, C#", level: 95, icon: Code, category: "Skills & Programming Languages" },
    { name: "R, MATLAB, Assembly (MASM)", level: 90, icon: Code, category: "Skills & Programming Languages" },
    { name: "JavaScript, HTML & CSS", level: 95, icon: Code, category: "Skills & Programming Languages" },
    { name: "Node.js, React.js, Flask", level: 85, icon: Code, category: "Skills & Programming Languages" },
    { name: "SQL, NoSQL, SPARQL", level: 85, icon: Database, category: "Skills & Programming Languages" },
    { name: "Bash Scripting, Data Structures", level: 90, icon: Code, category: "Skills & Programming Languages" },
    {
      name: "Agile Development, Project Management",
      level: 85,
      icon: Users,
      category: "Skills & Programming Languages",
    },

    // DevOps/Tools
    { name: "MySQL, MongoDB", level: 90, icon: Database, category: "DevOps/Tools" },
    { name: "Tableau, Vim", level: 80, icon: Cpu, category: "DevOps/Tools" },
    { name: "AWS, Docker", level: 85, icon: Cpu, category: "DevOps/Tools" },
    { name: "Git, GitHub", level: 95, icon: Code, category: "DevOps/Tools" },
    { name: "CI/CD pipelines, MLFlow, DVC", level: 85, icon: Cpu, category: "DevOps/Tools" },
    { name: "Airflow", level: 80, icon: Cpu, category: "DevOps/Tools" },

    // AI, ML & Data
    { name: "NumPy, Pandas, Spark", level: 90, icon: Brain, category: "AI, ML & Data" },
    { name: "PyTorch, TensorFlow", level: 95, icon: Brain, category: "AI, ML & Data" },
    { name: "Scikit-Learn, Keras", level: 90, icon: Brain, category: "AI, ML & Data" },
    { name: "OpenCV, Computer Vision", level: 90, icon: Brain, category: "AI, ML & Data" },
    { name: "Transformers, Diffusion", level: 90, icon: Brain, category: "AI, ML & Data" },
    { name: "Langchain, Huggingface", level: 85, icon: Brain, category: "AI, ML & Data" },
    { name: "NLP, Kaggle", level: 90, icon: Brain, category: "AI, ML & Data" },
    { name: "Socket Programming, Network Programming", level: 80, icon: Code, category: "AI, ML & Data" },
    { name: "Multi GPU support, CUDA, TensorRT", level: 80, icon: Cpu, category: "AI, ML & Data" },
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

  const publications = [
    {
      title: "vRD-OCR: Multi-Head Long Text Recognition in Low Quality Images",
      authors: "K. Irfan, O. Amjad, and A. Saqib",
      venue: "Computer Vision Projects Expo 2024",
      location: "Islamabad, Pakistan",
      year: "2024",
      type: "Conference Paper",
      link: "https://app.readytensor.ai/publications/vrd-ocr_multi-head_long_text_recognition_in_low_quality_images_s3TebOv2I3iTvrd",
    },
    {
      title: "Sequence-driven Neural Network models for NER Tagging in Roman Urdu",
      authors: "M. Ali Nadeem, K. Irfan, K. Atiq, M. O. Beg, and M. Umair Arshad",
      venue: "2022 International Conference on Frontiers of Information Technology (FIT)",
      location: "Islamabad, Pakistan",
      year: "2022",
      pages: "pp. 171-176",
      doi: "10.1109/FIT57066.2022.00040",
      type: "IEEE Conference",
      link: "https://ieeexplore.ieee.org/document/10043076",
    },
  ]

  const researchProjects = [
    {
      title: "Sliced Inference Support for Improved Results for Object Detection Models",
      type: "Technical Contribution",
      platform: "GitHub PR",
      link: "https://github.com/lyuwenyu/RT-DETR/pull/468",
      description:
        "Enhanced object detection model performance through sliced inference implementation for RT-DETR framework.",
    },
    {
      title: "Regnet & DLA34 Backbone Support for RTEDTR",
      type: "Technical Contribution",
      platform: "GitHub PR",
      link: "https://github.com/lyuwenyu/RT-DETR/pull/454",
      description: "Extended RT-DETR architecture with additional backbone support for improved model flexibility.",
    },
    {
      title:
        "Unmasking Bias: Can AI-Driven Visual Recognition Systems Reflect South Asia's Cultural and Gender Diversity?",
      type: "Research Article",
      platform: "Medium",
      link: "https://medium.com/@khadijairfan2345/unmasking-bias-can-ai-driven-visual-recognition-systems-reflect-south-asias-cultural-and-gender-06fb0ad56ae9",
      description:
        "Critical analysis of cultural and gender bias in AI visual recognition systems with focus on South Asian representation.",
    },
    {
      title:
        "Privacy First: Creating Secure Data Collection Protocols for Sensitive Health Information in Remote Communities",
      type: "Research Article",
      platform: "Medium",
      link: "https://medium.com/@khadijairfan2345/privacy-first-creating-secure-data-collection-protocols-for-sensitive-health-information-in-708e0d9ec03b",
      description:
        "Framework for ethical and secure health data collection in underserved communities with privacy-preserving methodologies.",
    },
    {
      title: "AI for Social Mobility: Creating Smart Educational Pathways for First-Generation Learners in STEM",
      type: "Research Article",
      platform: "Medium",
      link: "https://medium.com/@khadijairfan2345/ai-for-social-mobility-creating-smart-educational-pathways-for-first-generation-learners-in-stem-27a29e27bad5",
      description:
        "Innovative AI-driven approaches to support first-generation STEM students through personalized educational pathways.",
    },
  ]

  const education = [
    {
      institution: "Brown University",
      location: "Providence, RI",
      degree: "Master of Science in Computer Science",
      gpa: "4.0",
      duration: "Expected May 2027",
      coursework:
        "Robotics, Agentic AI, Software Engineering, Artificial Intelligence, Machine Learning, and Visual Computing",
      type: "Graduate",
    },
    {
      institution: "FAST - NUCES",
      location: "Islamabad, Pakistan",
      degree: "Bachelor of Science in Artificial Intelligence, Magna Cum Laude",
      gpa: "3.80/4.00",
      duration: "May 2024",
      achievements: "Mehbul Haq Silver Medalist | 8x Semester Medals and Scholarships | 8x Dean's Honor List",
      type: "Undergraduate",
    },
  ]

  const leadership = [
    {
      title: "Campus Lead, Google Developer Student Clubs - FAST Islamabad",
      description:
        "Led initiatives to inspire tech growth among students, organizing workshops and events to foster a learning community.",
      image: "/github-portfolio/images/gdsc-group-photo.jpg",
      featured: true,
    },
    {
      title: "Speaker & Outreach Manager, Google Developer Groups Islamabad",
      description:
        "Spearheaded outreach efforts and engaged local tech enthusiasts through events and speaker sessions.",
      image: "/github-portfolio/images/gdg-devfest-photo.jpg",
      featured: true,
    },
    {
      title: "Campus Lead, Pakistani Women in Computing",
      description:
        "Supported initiatives aimed at reducing gender disparity in tech by organizing networking and educational events for women in tech.",
      image: "/github-portfolio/images/pwic-event-photo.jpg",
      featured: true,
    },
    {
      title: "Computing Secretary, NaSCon '23",
      description:
        "Organized and executed 19 computing events, enhancing tech exposure and practical skills for attendees.",
      image: "/github-portfolio/images/nascon-awards.jpg",
      featured: true,
    },
    {
      title: "Founder & Vice President, Umeed-e-Nau",
      description:
        "Founded a social impact organization, raising 1,000,000 PKR for medical cases, ration, and education drives, demonstrating a commitment to social welfare.",
      image: "/github-portfolio/images/umeedenau-children.jpg",
      featured: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-white/20 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Khadija Irfan
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 bg-white/60 backdrop-blur-lg rounded-full px-2 py-2 shadow-lg shadow-black/5">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "education", label: "Education" },
                { id: "skills", label: "Skills" },
                { id: "work", label: "Experience" },
                { id: "publications", label: "Publications" },
                { id: "research", label: "Research" },
                { id: "leadership", label: "Community" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 transform scale-105"
                      : "text-gray-600 hover:text-blue-600 hover:bg-white/80 hover:shadow-md"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-2xl hover:bg-white/80 transition-all duration-300 shadow-lg shadow-black/5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20 bg-white/90 backdrop-blur-xl rounded-b-3xl shadow-xl">
              <div className="space-y-2 px-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "education", label: "Education" },
                  { id: "skills", label: "Skills" },
                  { id: "work", label: "Experience" },
                  { id: "publications", label: "Publications" },
                  { id: "research", label: "Research" },
                  { id: "leadership", label: "Community" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-blue-600 hover:bg-white/60"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="text-yellow-500 animate-pulse" size={24} />
                  <span className="text-sm font-semibold text-gray-600 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    Available for opportunities
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-gray-900">Hi,</span>
                  <span className="block">
                    I am{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                      Khadija
                    </span>
                  </span>
                  <span className="block text-xl lg:text-2xl text-gray-600 font-medium mt-4 leading-relaxed">
                    MS Computer Science at <span className="text-blue-600 font-semibold">Brown University</span>
                    <br />
                    <span className="text-purple-600">xVisionRD</span> |{" "}
                    <span className="text-indigo-600">xVECTOR Inc.</span> |{" "}
                    <span className="text-pink-600">S2S Alumnus</span>
                  </span>
                </h1>

                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  Passionate about building <span className="text-blue-600 font-semibold">innovative AI solutions</span>{" "}
                  and leading tech communities to create{" "}
                  <span className="text-purple-600 font-semibold">meaningful impact</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
                >
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("work")}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <BookOpen className="mr-2" size={20} />
                  View My Work
                </Button>
              </div>

              <div className="flex space-x-6">
                {[
                  { href: "https://www.linkedin.com/in/khadijairfan/", icon: Linkedin, color: "hover:text-blue-600" },
                  { href: "https://github.com/khadijairfan2345", icon: Github, color: "hover:text-purple-600" },
                  { href: "mailto:khadijairfan234@gmail.com", icon: Mail, color: "hover:text-pink-600" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className={`p-3 bg-white/60 backdrop-blur-sm rounded-2xl text-gray-600 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110`}
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-2 shadow-2xl shadow-blue-500/25">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src="/github-portfolio/images/khadija-profile.jpg"
                      alt="Khadija Irfan"
                      className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-4 rounded-2xl shadow-lg shadow-yellow-500/25 animate-bounce">
                  <Brain size={32} />
                </div>
                <div className="absolute -top-4 -left-4 bg-gradient-to-br from-green-400 to-blue-500 text-white p-3 rounded-2xl shadow-lg shadow-green-500/25 animate-pulse">
                  <Star size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <ChevronDown
              size={32}
              className="mx-auto text-gray-400 animate-bounce cursor-pointer hover:text-blue-600 transition-colors duration-300"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                I am Khadija Irfan
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  I'm Khadija Irfan, a <span className="text-blue-600 font-semibold">Computer Vision Engineer</span> and{" "}
                  <span className="text-purple-600 font-semibold">AI Researcher</span> currently pursuing my Master's in
                  Computer Science at Brown University. With a background in AI from FAST-NUCES (Magna Cum Laude), I
                  design real-time, production-grade systems—from action segmentation on edge devices to multi-GPU
                  diffusion model pipelines.
                </p>
                <p>
                  My work has been deployed in{" "}
                  <span className="text-green-600 font-semibold">live automotive factories</span>, achieving 98–99%
                  accuracy. I've also conducted research at the University of Notre Dame and published on low-resource
                  OCR and Roman Urdu NER. I'm passionate about building scalable, inclusive AI solutions that drive{" "}
                  <span className="text-pink-600 font-semibold">real-world impact</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    3+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    30+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="/github-portfolio/images/khadija-about.jpg"
                  alt="Khadija Irfan in professional setting"
                  className="relative rounded-3xl shadow-2xl shadow-blue-500/20 max-w-md w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg transform hover:scale-[1.02] rounded-3xl"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-2">
                            {edu.institution}
                          </h3>
                          <p className="text-gray-600 mb-2 font-medium">{edu.location}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className="self-start bg-gradient-to-r from-blue-100 to-purple-100 border-blue-300 text-blue-700 font-semibold"
                        >
                          {edu.type}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h4 className="text-lg font-semibold text-blue-600">{edu.degree}</h4>
                          <span className="text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {edu.duration}
                          </span>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-700">GPA:</span>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {edu.gpa}
                            </span>
                          </div>
                        </div>

                        {edu.coursework && (
                          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                            <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                              <BookOpen size={16} className="mr-2 text-blue-600" />
                              Relevant Coursework:
                            </h5>
                            <p className="text-gray-600">{edu.coursework}</p>
                          </div>
                        )}

                        {edu.achievements && (
                          <div className="mt-4">
                            <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                              <Award size={16} className="mr-2 text-yellow-600" />
                              Achievements:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {edu.achievements.split(" | ").map((achievement, achIndex) => (
                                <Badge
                                  key={achIndex}
                                  className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-yellow-300 hover:shadow-md transition-shadow"
                                >
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          </div>

          {/* Categorized Skills */}
          <div className="space-y-16">
            {["Skills & Programming Languages", "DevOps/Tools", "AI, ML & Data"].map((category, categoryIndex) => {
              const categorySkills = skills.filter((skill) => skill.category === category)
              if (categorySkills.length === 0) return null

              const gradients = [
                "from-blue-500 to-purple-600",
                "from-purple-500 to-pink-600",
                "from-pink-500 to-red-600",
              ]

              return (
                <div key={category}>
                  <h3
                    className={`text-3xl font-semibold bg-gradient-to-r ${gradients[categoryIndex]} bg-clip-text text-transparent mb-8 text-center`}
                  >
                    {category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {categorySkills.map((skill, index) => {
                      const IconComponent = skill.icon
                      return (
                        <Card
                          key={index}
                          className="p-6 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg transform hover:scale-105 rounded-3xl group"
                        >
                          <CardContent className="p-0">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`p-3 bg-gradient-to-br ${gradients[categoryIndex]} rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow`}
                                >
                                  <IconComponent size={20} className="text-white" />
                                </div>
                                <span className="font-semibold text-gray-900">{skill.name}</span>
                              </div>
                              <span
                                className={`text-lg font-bold bg-gradient-to-r ${gradients[categoryIndex]} bg-clip-text text-transparent`}
                              >
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                              <div
                                className={`bg-gradient-to-r ${gradients[categoryIndex]} h-3 rounded-full transition-all duration-1000 shadow-lg`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
              Linguistic Proficiency
            </h3>
            <div className="flex justify-center space-x-6 flex-wrap gap-4">
              {["English (Fluent)", "Urdu (Native)", "Punjabi (Native)"].map((lang, index) => (
                <Badge
                  key={index}
                  className="px-6 py-3 text-lg bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-blue-300 hover:shadow-lg transition-shadow rounded-2xl"
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg transform hover:scale-[1.02] rounded-3xl"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-2">
                        {job.role}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">{job.company}</h4>
                    </div>
                    <Badge className="self-start md:self-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-300 font-semibold">
                      {job.duration}
                    </Badge>
                  </div>
                  <ul className="space-y-3">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg transform hover:scale-[1.02] rounded-3xl"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start justify-between">
                      <Badge className="self-start bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-300 font-semibold">
                        {pub.type}
                      </Badge>
                      <span className="text-blue-600 font-bold text-lg">{pub.year}</span>
                    </div>

                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent leading-tight">
                      {pub.title}
                    </h3>

                    <p className="text-gray-600 font-medium">{pub.authors}</p>

                    <div className="space-y-2 text-gray-600">
                      <p className="font-medium">{pub.venue}</p>
                      <p>{pub.location}</p>
                      {pub.pages && <p>{pub.pages}</p>}
                      {pub.doi && (
                        <p className="text-sm">
                          DOI: <span className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">{pub.doi}</span>
                        </p>
                      )}
                    </div>

                    {pub.link && (
                      <div className="pt-4">
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl">
                            View Publication
                          </Button>
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Projects Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Independent Research Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Technical contributions and thought leadership in AI ethics, privacy, and social impact through
              open-source contributions and research articles.
            </p>
          </div>

          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg transform hover:scale-[1.02] rounded-3xl"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-300 font-semibold">
                        {project.type}
                      </Badge>
                      <Badge className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 font-semibold">
                        {project.platform}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">{project.description}</p>

                    {project.link && (
                      <div className="pt-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl">
                            {project.platform === "GitHub PR" ? "View Pull Request" : "Read Article"}
                          </Button>
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Leadership & Community Involvement
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {leadership.map((item, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg transform hover:scale-[1.02] rounded-3xl ${
                  item.featured ? "lg:p-12" : ""
                }`}
              >
                <CardContent className="p-0">
                  {item.featured ? (
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg">
                            <Users className="text-white" size={28} />
                          </div>
                          <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-300 font-semibold">
                            Featured Role
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                      </div>
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20"></div>
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={`${item.title} Community Event`}
                            className="relative rounded-3xl shadow-2xl shadow-blue-500/20 w-full max-w-lg transform hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-4 shadow-lg">
                          <Users className="text-white" size={28} />
                        </div>
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-3 leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 flex-grow leading-relaxed">{item.description}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
              and AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    info: "khadijairfan234@gmail.com",
                    gradient: "from-blue-500 to-purple-600",
                  },
                  {
                    icon: Linkedin,
                    title: "LinkedIn",
                    info: "linkedin.com/in/khadijairfan",
                    gradient: "from-purple-500 to-pink-600",
                  },
                  {
                    icon: Github,
                    title: "GitHub",
                    info: "github.com/khadijairfan2345",
                    gradient: "from-pink-500 to-red-600",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <contact.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{contact.title}</h3>
                      <p className="text-gray-600">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl">
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="w-full h-12 rounded-2xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="w-full h-12 rounded-2xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full rounded-2xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Khadija Irfan
          </h3>
          <p className="text-gray-300 mb-8 text-lg">Computer Vision Engineer & AI Enthusiast</p>
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { href: "https://www.linkedin.com/in/khadijairfan/", icon: Linkedin },
              { href: "https://github.com/khadijairfan2345", icon: Github },
              { href: "mailto:khadijairfan234@gmail.com", icon: Mail },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-gray-400">© 2025 Khadija Irfan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

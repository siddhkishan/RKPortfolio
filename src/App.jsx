import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, FileText, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-2"
        >
          👋 Hello, I'm <span className="text-purple-700">RK</span>
        </motion.h1>
        <p className="text-center text-lg text-gray-700 mb-6">
          Power Platform Developer | Automations Expert | Creator of WAM App 🚀
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <Button asChild variant="outline">
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-4 w-4" /> Contact
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/siddhkishan" target="_blank">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">✨ Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-xl mb-2">Work Activity Management App</h3>
                <p className="text-gray-700 mb-2">Real-time productivity tracker with planner for team management and auto logs.</p>
                <a
                  href="https://github.com/siddhkishan/WAM-App"
                  className="text-purple-700 hover:underline"
                  target="_blank"
                >
                  View on GitHub
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-xl mb-2">CF Assist Tool</h3>
                <p className="text-gray-700 mb-2">Excel-VBA based automation tool for email, PDF, productivity, and more.</p>
                <a
                  href="https://github.com/siddhkishan/CF-Assist"
                  className="text-purple-700 hover:underline"
                  target="_blank"
                >
                  View on GitHub
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} RK | Built with 💜 React + Tailwind CSS
        </footer>
      </div>
    </main>
  );
}

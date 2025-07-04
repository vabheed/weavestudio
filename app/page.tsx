"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Users, Code, BarChart3, GitBranch, Brain, Store, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FORM_LINK } from "@/lib/constants"

export default function LandingPage() {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleGetEarlyAccess = () => {
    window.open(FORM_LINK, "_blank")
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-stone-900">Weavestudio</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/roadmap" className="text-stone-600 hover:text-stone-900 transition-colors">
                Roadmap
              </Link>
              <button onClick={scrollToFooter} className="text-stone-600 hover:text-stone-900 transition-colors">
                Contact
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button onClick={handleGetEarlyAccess} className="bg-stone-900 hover:bg-stone-800 text-white">
                Get Early Access
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
                  Supercharge your product with Agentic-AI
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
                  Effortlessly design agentic workflows for your application. Define your tools and worklfow, and we'll
                  handle the rest.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleGetEarlyAccess}
                  className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4"
                >
                  Get Early Access
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-3 h-3 text-orange-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">No‑Code Graph Builder</h3>
                    <p className="text-stone-600 text-sm">
                      We make your products think, learn, and adapt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-3 h-3 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Universal AI Integration</h3>
                    <p className="text-stone-600 text-sm">
                      Connect to ChatGPT, Claude, Gemini, and any MCP-compatible AI client.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-3 h-3 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Production‑Ready Deployment</h3>
                    <p className="text-stone-600 text-sm">
                      Secure hosting, authentication, and comprehensive observability for enterprise-grade workflow
                      deployments with possible on-prem deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-stone-500 italic">Weave a workflow, for one-for all</p>
          </div>

          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-100 to-transparent z-10 pointer-events-none"></div>
            <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
              <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-stone-600 ml-4">Weavestudio Workspace</div>
                </div>
              </div>
              <div className="p-8">
                <Image
                  src="/images/workflow-interface.png"
                  alt="AI Workflow Canvas Interface showing drag-and-drop agent orchestration"
                  width={1320}
                  height={660}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">How It Works</h2>
            <p className="text-xl text-stone-600">Four simple steps to AI-powered automation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Define Custom Tools",
                description:
                  "Provide a simple JSON file describing your APIs and tools—no complex integrations required.",
                step: "01",
              },
              {
                icon: Store,
                title: "Adopt Server Tools",
                description:
                  "We have a lot of integrations and tools ready to be spun up. Use these directly along with your custom tools.",
                step: "02",
              },
              {
                icon: GitBranch,
                title: "Compose Workflows",
                description: "Drag agents onto the canvas, link nodes, set triggers to create powerful automation.",
                step: "03",
              },
              {
                icon: Brain,
                title: "Context‑Aware Execution",
                description:
                  "Our proprietary engine optimizes each run using historical data and contextual intelligence.",
                step: "04",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                      <item.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-stone-900">{item.title}</h3>
                  <p className="text-stone-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Role */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Solutions by Role</h2>
            <p className="text-xl text-stone-600">Tailored for every team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Enterprises",
                description: "Integrate seamlessly with existing software, slash automation costs.",
                color: "blue",
              },
              {
                icon: Code,
                title: "Developers",
                description:
                  "Simply provide a JSON file of your tools and start building workflows. Just connect and define—we handle the rest.",
                color: "purple",
              },
              {
                icon: BarChart3,
                title: "Analysts & Ops Teams",
                description: "Automate repetitive tasks, gain real‑time insights.",
                color: "green",
              },
            ].map((item, index) => (
              <Card key={index} className="border-stone-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-stone-900">{item.title}</h3>
                  <p className="text-stone-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="footer" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to orchestrate intelligence?</h2>
          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              onClick={handleGetEarlyAccess}
              className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-4 text-lg"
            >
              Get Early Access
            </Button>
          </div>
          <div className="text-stone-400">
            <p>Contact: info@weavestudio.ai</p>
          </div>
        </div>
      </section>
    </div>
  )
}

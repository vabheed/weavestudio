"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Layers, ArrowRight, Plug, Blocks, Wand2, Cloud, Rocket, DollarSign, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FORM_LINK } from "@/lib/constants"

export default function LandingPage() {
  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })
  }

  const openForm = () => {
    window.open(FORM_LINK, "_blank")
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold text-foreground">Weavestudio</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/roadmap"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Roadmap
            </Link>
            <button
              onClick={scrollToFooter}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>
          <Button onClick={openForm} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Early Access
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] 2xl:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Your Stack + WeaveStudio ={" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] whitespace-nowrap inline-block">
              Agents assemble
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            You define the agents. We make them run. Autonomous. Simple. Fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openForm}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-2xl">
          <Image
            src="/images/workflow-interface.png"
            alt="Weavestudio workflow interface showing drag-and-drop agent builder"
            width={1320}
            height={660}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-50 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <Card className="bg-card border-stone-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Layers className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">No Drama Llama</h3>
              <p className="text-muted-foreground leading-relaxed">
                We fit in smooth with your tech-stack, no setup drama.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-stone-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Faster to Market</h3>
              <p className="text-muted-foreground leading-relaxed">
                Go from use-case to working AI solutions in days not months!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-stone-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-purple-500/10 to-orange-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Mindful Costs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built to save compute, time, and money, so your team can focus on growth.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-stone-200 hover:shadow-lg transition-all hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">Multimodal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Agents can process and generate text, audio, video, and more across all modalities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-stone-50 to-stone-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">How It Works</h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Give your software a will, Give it WeaveStudio
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <Card className="bg-card border-stone-200 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="absolute -top-8 -right-8 text-8xl font-bold text-stone-100 select-none">1</div>
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                <Plug className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3 whitespace-nowrap">Works with Anything</h3>
              <p className="text-muted-foreground leading-relaxed">
                Can connect with any tech stack or application to use it as an environment of execution
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-stone-200 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="absolute -top-8 -right-8 text-8xl font-bold text-stone-100 select-none">2</div>
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                <Blocks className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3 whitespace-nowrap">Readymade Lego Blocks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Constructs the building blocks from the execution environment for use within the blueprint
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-stone-200 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="absolute -top-8 -right-8 text-8xl font-bold text-stone-100 select-none">3</div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                <Wand2 className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3 whitespace-nowrap">Snap Merge Build</h3>
              <p className="text-muted-foreground leading-relaxed">
                Construct blueprint visually or with SDK to create a comprehensive goal oriented multi-agent workflow
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-stone-200 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="absolute -top-8 -right-8 text-8xl font-bold text-stone-100 select-none">4</div>
              <div className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                <Cloud className="h-10 w-10 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3 whitespace-nowrap">Batteries Included!</h3>
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Orchestration and Infrastructure out of the box, everything needed to get started
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <footer id="footer" className="bg-stone-900 text-stone-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to orchestrate intelligence?</h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Join forward-thinking teams already building the future with Weavestudio
          </p>
          <Button onClick={openForm} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 mb-12">
            Get Early Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="border-t border-stone-800 pt-8">
            <p className="text-sm text-stone-500">
              Contact us at{" "}
              <a href="mailto:info@weavestudio.ai" className="text-primary hover:underline">
                info@weavestudio.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

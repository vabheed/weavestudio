"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Hammer, Wrench, HardHat, Truck } from "lucide-react"
import Link from "next/link"
import { FORM_LINK } from "@/lib/constants"

export default function RoadmapPage() {
  const openForm = () => {
    window.open(FORM_LINK, "_blank")
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Construction Scene */}
        <div className="relative bg-card border border-stone-200 rounded-2xl p-12 overflow-hidden shadow-xl">
          {/* Background mountains */}
          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
            <div className="absolute bottom-0 left-0 w-64 h-24 bg-muted rounded-t-full" />
            <div className="absolute bottom-0 right-0 w-48 h-20 bg-muted rounded-t-full" />
          </div>

          {/* Road being built */}
          <div className="relative z-10 mb-12">
            <div className="h-4 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary animate-road-progress" />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-muted-foreground">0%</span>
              <span className="text-xs font-semibold text-primary">75% Complete</span>
              <span className="text-xs text-muted-foreground">100%</span>
            </div>
          </div>

          {/* Construction workers */}
          <div className="relative z-10 flex justify-center gap-12 mb-8">
            <div className="animate-bounce-1">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <HardHat className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="animate-bounce-2">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <HardHat className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="animate-bounce-3">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <HardHat className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Floating tools */}
          <div className="absolute top-20 left-20 animate-float-1 opacity-60">
            <Hammer className="h-8 w-8 text-primary" />
          </div>
          <div className="absolute top-32 right-32 animate-float-2 opacity-60">
            <Wrench className="h-8 w-8 text-primary" />
          </div>
          <div className="absolute bottom-32 right-20 animate-float-3 opacity-60">
            <Truck className="h-8 w-8 text-primary" />
          </div>

          {/* Dust clouds */}
          <div className="absolute bottom-24 left-32 w-24 h-24 bg-muted rounded-full animate-pulse-slow opacity-30" />
          <div className="absolute bottom-20 right-40 w-32 h-32 bg-muted rounded-full animate-pulse-slow opacity-20" />

          {/* Main content */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Roadmap Under Construction</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're putting the final touches on our product roadmap. Great things are coming soon!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={openForm} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Early Access
              </Button>
              <Link href="/">
                <Button variant="outline" size="lg">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Want to stay updated? Join our early access program to be the first to know about our progress.
          </p>
        </div>
      </div>
    </div>
  )
}

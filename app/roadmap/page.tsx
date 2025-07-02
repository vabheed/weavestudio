"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Wrench, HardHat, Hammer } from "lucide-react"
import Link from "next/link"
import { FORM_LINK } from "@/lib/constants"

export default function RoadmapPage() {
  const handleGetEarlyAccess = () => {
    window.open(FORM_LINK, "_blank")
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold text-stone-900">Weavestudio</span>
            </Link>

            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated Construction Scene */}
          <div className="mb-12 relative">
            <div className="relative w-80 h-60 mx-auto bg-gradient-to-b from-blue-100 to-green-100 rounded-2xl overflow-hidden border-2 border-stone-200">
              {/* Sky and ground */}
              <div className="absolute bottom-0 w-full h-20 bg-amber-200"></div>

              {/* Mountains in background */}
              <div className="absolute bottom-20 left-4 w-16 h-12 bg-gray-400 transform rotate-12"></div>
              <div className="absolute bottom-20 right-8 w-20 h-16 bg-gray-500 transform -rotate-6"></div>

              {/* Road being built with animation */}
              <div className="absolute bottom-0 left-0 w-full h-8 bg-gray-600 rounded-t-lg overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gray-800 animate-pulse transition-all duration-1000 ease-in-out"
                  style={{
                    width: "60%",
                    animation: "roadProgress 4s ease-in-out infinite",
                  }}
                ></div>
                {/* Road lines */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-yellow-300 transform -translate-y-1/2 opacity-60"></div>
                <div className="absolute top-1/2 left-4 w-8 h-0.5 bg-yellow-400 transform -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-16 w-8 h-0.5 bg-yellow-400 transform -translate-y-1/2"></div>
              </div>

              {/* Construction workers with bounce animation */}
              <div
                className="absolute bottom-8 left-12"
                style={{
                  animation: "bounce 2s ease-in-out infinite",
                  animationDelay: "0s",
                }}
              >
                <div className="w-8 h-8 bg-orange-400 rounded-full relative border-2 border-orange-600">
                  <div className="w-4 h-2 bg-yellow-300 absolute top-0 left-2 rounded-t-full"></div>
                </div>
                <div className="w-2 h-6 bg-blue-600 mx-auto"></div>
                <div className="w-4 h-2 bg-blue-800 mx-auto rounded-b"></div>
              </div>

              <div
                className="absolute bottom-8 right-16"
                style={{
                  animation: "bounce 2s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              >
                <div className="w-8 h-8 bg-orange-400 rounded-full relative border-2 border-orange-600">
                  <div className="w-4 h-2 bg-yellow-300 absolute top-0 left-2 rounded-t-full"></div>
                </div>
                <div className="w-2 h-6 bg-green-600 mx-auto"></div>
                <div className="w-4 h-2 bg-green-800 mx-auto rounded-b"></div>
              </div>

              {/* Construction equipment */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div
                  className="w-12 h-8 bg-yellow-500 rounded relative border-2 border-yellow-600"
                  style={{ animation: "pulse 3s ease-in-out infinite" }}
                >
                  <div className="w-3 h-3 bg-gray-800 absolute top-2 left-2 rounded"></div>
                  <div className="w-3 h-3 bg-gray-800 absolute top-2 right-2 rounded"></div>
                  <div className="w-8 h-1 bg-yellow-600 absolute bottom-1 left-2"></div>
                </div>
              </div>

              {/* Floating tools with custom animation */}
              <div
                className="absolute top-16 left-8"
                style={{
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "0s",
                }}
              >
                <Hammer className="w-6 h-6 text-gray-600" />
              </div>

              <div
                className="absolute top-20 right-12"
                style={{
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "1.5s",
                }}
              >
                <Wrench className="w-5 h-5 text-gray-700" />
              </div>

              <div
                className="absolute top-12 right-20"
                style={{
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "3s",
                }}
              >
                <HardHat className="w-5 h-5 text-orange-600" />
              </div>

              {/* Progress indicator */}
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-white/90 rounded-full p-2 shadow-sm">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: "99%",
                        animation: "progressBar 4s ease-in-out infinite",
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">Almost There!</div>
                </div>
              </div>

              {/* Dust clouds */}
              <div
                className="absolute bottom-12 left-20 w-4 h-4 bg-gray-300 rounded-full opacity-50"
                style={{ animation: "pulse 2s ease-in-out infinite" }}
              ></div>
              <div
                className="absolute bottom-14 right-24 w-3 h-3 bg-gray-400 rounded-full opacity-40"
                style={{ animation: "pulse 2.5s ease-in-out infinite" }}
              ></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900">We're doing some final touches</h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Our roadmap is under construction! We're putting the finishing touches on our plans and will share our
              exciting journey with you very soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                onClick={handleGetEarlyAccess}
                className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-4"
              >
                Get Early Access
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-4 bg-transparent"
              >
                Notify Me When Ready
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes roadProgress {
          0% { width: 40%; }
          25% { width: 65%; }
          50% { width: 80%; }
          75% { width: 65%; }
          100% { width: 40%; }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-8px) rotate(5deg); 
          }
          66% { 
            transform: translateY(-4px) rotate(-3deg); 
          }
        }
        
        @keyframes bounce {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-6px); 
          }
        }
        
        @keyframes progressBar {
          0% { width: 65%; }
          50% { width: 85%; }
          100% { width: 65%; }
        }
      `}</style>
    </div>
  )
}

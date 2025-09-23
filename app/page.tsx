import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GenerateSection } from "@/components/generate-section"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <GenerateSection />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

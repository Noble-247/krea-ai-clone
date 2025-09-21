import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

// bg-gradient-to-br from-orange-400
// bg-gradient-to-br from-blue-600 to-blue-800

export function HeroSection() {
  return (
    <section className="px-6 py-8">
      <div className="flex gap-4 max-w-7xl mx-auto">
        {/* WAN 2.2 Card */}
        <Card className="flex-1 bg-[url('/images/futuristic-ai-woman-1.jpg')] bg-cover via-pink-400 to-purple-500 border-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative px-8 h-80 flex flex-col justify-between">
            <div className="text-xs text-white/80 uppercase tracking-wide">
              FEATURED MODEL
            </div>
            <div className="pt-16 pb-4 flex flex-col h-full justify-between">
              <div>
                <h2 className="text-5xl font-bold text-white mb-2 text-center mt-10">
                  WAN 2.2
                </h2>
                <div className="flex justify-between items-end mt-12">
                  <div>
                    <h3 className="text-xl text-white mb-4">
                      WAN 2.2 Image generation
                    </h3>
                    <p className="text-white/90 text-sm max-w-sm">
                      Generate complex images with this brand new and powerful
                      WAN 2.2 model. Exceptional prompt adherence and
                      ultra-realistic results.
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      variant="default"
                      className="bg-white border-white/20 text-black/70 hover:bg-white/20 hover:text-white"
                    >
                      Try WAN 2.2
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Open Source Card */}
        <Card className="flex-1 bg-[url('/images/premium-ai-whiskey.jpg')] bg-cover border-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative px-8 h-80 flex flex-col justify-between">
            <div className="text-xs text-white/80 uppercase tracking-wide">
              OS MODEL
            </div>
            <div className="pt-16 pb-4 flex flex-col h-full justify-between">
              <div>
                <h2 className="text-5xl font-bold text-white mb-2 text-center mt-10">
                  Open Sour
                </h2>
                <h3 className="text-xl text-white mb-4 mt-10">FLUX1 Krea</h3>
                <p className="text-white/90 text-sm max-w-sm mt-5">
                  We're most proud to present our FLUX1 Krea model which Source.
                  Download and run our model anytime, read the technical report
                  or contribute to the community.
                </p>
              </div>
              {/* No button for this card, but structure matches */}
            </div>
          </div>
        </Card>
      </div>

      {/* Navigation dots */}
      <div className="relative flex justify-center items-center mt-6 max-w-7xl mx-auto">
        <div className="flex gap-3">
          <div className="w-2 h-2 bg-foreground rounded-full" />
          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full" />
          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full" />
          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full" />
          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full" />
          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full" />
          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full" />
          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
        <div className="absolute right-0 flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

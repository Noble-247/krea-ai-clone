import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// bg-gradient-to-br from-orange-400
// bg-gradient-to-br from-blue-600 to-blue-800

export function HeroSection() {
  return (
    <section className='px-2 sm:px-6 py-2 sm:py-8'>
      <div className='flex flex-col md:flex-row gap-3 sm:gap-6 max-w-[95%] mx-auto'>
        {/* WAN 2.2 Card */}
        <Card className="flex-1 bg-[url('/images/futuristic-ai-woman-1.jpg')] bg-cover bg-center border-0 overflow-hidden relative min-h-[300px] sm:min-h-[400px]">
          <div className='absolute inset-0 bg-black/30' />
          <div className='relative px-3 sm:px-8 h-full flex flex-col justify-between py-4 sm:py-6'>
            <div className='text-[10px] sm:text-xs text-white/80 uppercase tracking-wide'>
              FEATURED MODEL
            </div>
            <div className='flex flex-col h-full justify-between'>
              <h2 className='text-2xl sm:text-5xl font-bold text-white mb-2 text-center mt-4 sm:mt-10'>
                WAN 2.2
              </h2>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 text-center sm:text-left'>
                <div>
                  <h3 className='text-lg sm:text-xl text-white mb-2 sm:mb-4'>
                    WAN 2.2 Image generation
                  </h3>
                  <p className='text-white/90 text-xs sm:text-sm max-w-sm leading-relaxed'>
                    Generate complex images with this brand new and powerful WAN
                    2.2 model. Exceptional prompt adherence and ultra-realistic
                    results.
                  </p>
                </div>
                <div className='w-full sm:w-auto'>
                  <Button
                    variant='default'
                    className='w-auto bg-white border-white/20 text-black/70 hover:bg-white/20 hover:text-white cursor-pointer'>
                    Try WAN 2.2
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Open Source Card */}
        <Card className="flex-1 bg-[url('/images/premium-ai-whiskey.jpg')] bg-cover bg-center border-0 overflow-hidden relative min-h-[300px] sm:min-h-[400px]">
          <div className='absolute inset-0 bg-black/30' />
          <div className='relative px-3 sm:px-8 h-full flex flex-col justify-between py-4 sm:py-6'>
            <div className='text-[10px] sm:text-xs text-white/80 uppercase tracking-wide'>
              OS MODEL
            </div>
            <div className='flex flex-col h-full justify-between text-center sm:text-left'>
              <h2 className='text-2xl sm:text-5xl font-bold text-white mb-2 text-center mt-4 sm:mt-10'>
                Open Sour
              </h2>
              <div>
                <h3 className='text-lg sm:text-xl text-white mb-2 sm:mb-4'>
                  FLUX1 Krea
                </h3>
                <p className='text-white/90 text-xs sm:text-sm max-w-sm leading-relaxed'>
                  We're most proud to present our FLUX1 Krea model which Source.
                  Download and run our model anytime, read the technical report
                  or contribute to the community.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Navigation dots */}
      <div className='relative flex justify-center items-center mt-3 sm:mt-6 max-w-[95%] mx-auto'>
        <div className='flex gap-2 sm:gap-3'>
          <div className='w-2 h-2 bg-foreground rounded-full cursor-pointer' />
          <div className='w-2 h-2 bg-muted-foreground/50 rounded-full cursor-pointer' />
          <div className='w-2 h-2 bg-muted-foreground/50 rounded-full cursor-pointer' />
          <div className='w-2 h-2 bg-muted-foreground/50 rounded-full cursor-pointer' />
          <div className='w-2 h-2 bg-muted-foreground/50 rounded-full cursor-pointer' />
          <div className='w-2 h-2 bg-muted-foreground/50 rounded-full cursor-pointer' />
          <div className='w-2 h-2 bg-muted-foreground/50 rounded-full cursor-pointer' />
          <div className='w-2 h-2 bg-muted-foreground/50 rounded-full cursor-pointer' />
        </div>
        <div className='absolute right-0 flex gap-1 sm:gap-2'>
          <Button
            variant='ghost'
            size='sm'
            className='h-8 w-8 sm:h-9 sm:w-9 p-0 text-muted-foreground hover:text-foreground cursor-pointer'>
            <ChevronLeft className='w-4 h-4' />
          </Button>
          <Button
            variant='ghost'
            size='sm'
            className='h-8 w-8 sm:h-9 sm:w-9 p-0 text-muted-foreground hover:text-foreground cursor-pointer'>
            <ChevronRight className='w-4 h-4 ' />
          </Button>
        </div>
      </div>
    </section>
  );
}

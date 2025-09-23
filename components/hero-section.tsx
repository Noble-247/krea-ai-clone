'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const featuredSlides = [
  {
    title: 'WAN 2.2',
    subtitle: 'WAN 2.2 Image generation',
    description:
      'Generate complex images with this brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic results.',
    image: '/images/futuristic-ai-woman-1.jpg',
  },
  {
    title: 'WAN 3.0',
    subtitle: 'Next Gen AI',
    description:
      'Experience the next generation of AI image generation with improved quality and faster processing.',
    image: '/images/ai-generated-2.jpg',
  },
  {
    title: 'Style Transfer',
    subtitle: 'Advanced Style Models',
    description:
      'Transform your images with cutting-edge style transfer technology.',
    image: '/images/style-transfer-1.jpg',
  },
  // Add more slides as needed
];

const osSlides = [
  {
    title: 'Open Source',
    subtitle: 'FLUX1 Krea',
    description:
      "We're most proud to present our FLUX1 Krea model which is open source. Download and run our model anytime, read the technical report or contribute to the community.",
    image: '/images/premium-ai-whiskey.jpg',
  },
  {
    title: 'Community Model',
    subtitle: 'FLUX2 Community',
    description:
      'Join our growing community of developers and contribute to the next generation of open-source AI models.',
    image: '/images/community-ai.jpg',
  },
  // Add more slides as neededm
];

export function HeroSection() {
  const [currentFeaturedSlide, setCurrentFeaturedSlide] = useState(0);
  const [currentOsSlide, setCurrentOsSlide] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentFeaturedSlide(index);
  };

  const handleOsNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentOsSlide(
        (curr) => (curr - 1 + osSlides.length) % osSlides.length
      );
    } else {
      setCurrentOsSlide((curr) => (curr + 1) % osSlides.length);
    }
  };

  return (
    <section className='px-2 sm:px-6 py-2 sm:py-8'>
      <div className='flex flex-col lg:flex-row gap-3 sm:gap-6 max-w-[95%] mx-auto'>
        <div className='flex-2'>
          {/* WAN 2.2 Card */}
          <Card
            className='border-0 overflow-hidden relative min-h-[300px] sm:min-h-[400px]'
            style={{
              backgroundImage: `url(${featuredSlides[currentFeaturedSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className='absolute inset-0 bg-black/30' />
            <div className='relative px-3 sm:px-8 h-full flex flex-col justify-between py-4 sm:py-6'>
              <div className='text-[10px] sm:text-xs text-white/80 uppercase tracking-wide'>
                FEATURED MODEL
              </div>
              <div className='flex flex-col h-full justify-between'>
                <h2 className='text-3xl sm:text-5xl font-bold text-white mb-2 text-center mt-6 sm:mt-10'>
                  {featuredSlides[currentFeaturedSlide].title}
                </h2>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 text-center sm:text-left'>
                  <div>
                    <h3 className='text-lg mt-8 sm:mt-12 sm:text-2xl text-white mb-2 sm:mb-4'>
                      {featuredSlides[currentFeaturedSlide].subtitle}
                    </h3>
                    <p className='text-white/90 text-sm sm:text-base max-w-sm leading-relaxed'>
                      {featuredSlides[currentFeaturedSlide].description}
                    </p>
                  </div>
                  <div className='w-full sm:w-auto'>
                    <Button
                      variant='default'
                      className='w-auto bg-white border-white/20 text-black/70 hover:bg-white/20 hover:text-white cursor-pointer rounded-full'>
                      Try {featuredSlides[currentFeaturedSlide].title}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          {/* Navigation Dots */}
          <div className='flex gap-1 mt-3 sm:mt-6 justify-center lg:justify-end'>
            {featuredSlides.map((_, index) => (
              <Button
                key={index}
                variant='ghost'
                size='sm'
                onClick={() => handleDotClick(index)}
                className='h-4 w-4 sm:h-5 sm:w-5 p-0 text-muted-foreground hover:text-foreground cursor-pointer'>
                <div
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    index === currentFeaturedSlide
                      ? 'bg-foreground'
                      : 'bg-muted-foreground/50'
                  }`}
                />
              </Button>
            ))}
          </div>
        </div>

        <div className='flex-1'>
          {/* Open Source Card */}
          <Card
            className='border-0 overflow-hidden relative min-h-[300px] sm:min-h-[400px]'
            style={{
              backgroundImage: `url(${osSlides[currentOsSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className='absolute inset-0 bg-black/30' />
            <div className='relative px-3 sm:px-8 h-full flex flex-col justify-between py-4 sm:py-6'>
              <div className='text-[10px] sm:text-xs text-white/80 uppercase tracking-wide'>
                OS MODEL
              </div>
              <div className='flex flex-col h-full justify-between text-center sm:text-left'>
                <h2 className='text-3xl sm:text-5xl font-bold text-white mb-2 text-center mt-6 sm:mt-10'>
                  {osSlides[currentOsSlide].title}
                </h2>
                <div>
                  <h3 className='text-lg mt-8 sm:mt-12 sm:text-2xl text-white mb-2 sm:mb-4'>
                    {osSlides[currentOsSlide].subtitle}
                  </h3>
                  <p className='text-white/90 text-sm sm:text-base max-w-sm leading-relaxed'>
                    {osSlides[currentOsSlide].description}
                  </p>
                </div>
              </div>
            </div>
          </Card>
          {/* Navigation Arrows */}
          <div className='flex gap-1 sm:gap-2 mt-2 sm:mt-6  justify-center lg:justify-end'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => handleOsNavigation('prev')}
              className='h-4 w-4 sm:h-5 sm:w-5 p-0 text-muted-foreground hover:text-foreground cursor-pointer'>
              <ChevronLeft className='w-3 h-3' />
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => handleOsNavigation('next')}
              className='h-4 w-4 sm:h-5 sm:w-5 p-0 text-muted-foreground hover:text-foreground cursor-pointer'>
              <ChevronRight className='w-3 h-3 ' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

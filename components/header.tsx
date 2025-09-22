'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Home,
  Image,
  Video,
  PenOff,
  Eraser,
  PaintbrushVertical,
  Folder,
  Headphones,
  Bell,
  Menu,
  X,
} from 'lucide-react';
import { ThemeSwitcher } from './theme-switcher';

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <header className='flex items-center justify-between px-2 sm:px-4 py-3 bg-background border-b border-border relative'>
      {/* Left side - Logo */}
      <div className='flex items-center gap-2'>
        <div className='w-6 h-6 bg-foreground rounded flex items-center justify-center'>
          <span className='text-background text-sm font-bold'>K</span>
        </div>
        <Avatar className='w-6 h-6 hidden sm:block'>
          <AvatarImage src='/placeholder.svg?height=24&width=24' />
          <AvatarFallback className='bg-purple-800 text-white text-xs'>
            U
          </AvatarFallback>
        </Avatar>
        <span className='text-sm text-muted-foreground hidden sm:block'>
          businesscontentcreator
        </span>
      </div>

      {/* Center - Navigation */}
      <div className='hidden md:flex items-center gap-1 border border-border rounded-3xl px-2 py-1 bg-muted shadow-sm'>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground hover:bg-background'>
          <Home className='w-4 h-4' />
        </Button>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground hover:bg-background'>
          <Image className='w-4 h-4' />
        </Button>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground hover:bg-background'>
          <Video className='w-4 h-4' />
        </Button>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground hover:bg-background'>
          <PenOff className='w-4 h-4' />
        </Button>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground hover:bg-background'>
          <Eraser className='w-4 h-4' />
        </Button>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground hover:bg-background'>
          <PaintbrushVertical className='w-4 h-4' />
        </Button>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground hover:bg-background'>
          <Folder className='w-4 h-4' />
        </Button>
      </div>

      {/* Mobile Navigation Hamburger */}
      <div className='md:hidden flex items-center gap-1'>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground'
          aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileNavOpen((open) => !open)}>
          {mobileNavOpen ? (
            <X className='w-5 h-5' />
          ) : (
            <Menu className='w-5 h-5' />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Icons (collapsible, animated) */}
      <div
        className={`absolute top-full left-0 w-full bg-background border-b border-border flex flex-col items-center gap-1 py-2 z-20 md:hidden transition-all duration-300 ease-in-out
        ${
          mobileNavOpen
            ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
            : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
        }`}
        style={{ willChange: 'opacity, transform' }}
        aria-hidden={!mobileNavOpen}>
        <div className='flex gap-2'>
          <Button variant='ghost' size='sm' className='text-muted-foreground'>
            <Home className='w-4 h-4' />
          </Button>
          <Button variant='ghost' size='sm' className='text-muted-foreground'>
            <Image className='w-4 h-4' />
          </Button>
          <Button variant='ghost' size='sm' className='text-muted-foreground'>
            <Video className='w-4 h-4' />
          </Button>
          <Button variant='ghost' size='sm' className='text-muted-foreground'>
            <PenOff className='w-4 h-4' />
          </Button>
          <Button variant='ghost' size='sm' className='text-muted-foreground'>
            <Eraser className='w-4 h-4' />
          </Button>
          <Button variant='ghost' size='sm' className='text-muted-foreground'>
            <PaintbrushVertical className='w-4 h-4' />
          </Button>
          <Button variant='ghost' size='sm' className='text-muted-foreground'>
            <Folder className='w-4 h-4' />
          </Button>
        </div>
      </div>

      {/* Right side - User actions */}
      <div className='flex items-center gap-2'>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground hidden sm:flex'>
          <Image className='w-4 h-4' />
          <span className='text-xs ml-1'>Gallery</span>
        </Button>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground hidden sm:flex'>
          <Headphones className='w-4 h-4' />
          <span className='text-xs ml-1'>Support</span>
        </Button>
        <Button
          variant='ghost'
          size='sm'
          className='text-muted-foreground hover:text-foreground'>
          <Bell className='w-4 h-4' />
        </Button>
        <ThemeSwitcher />
        <Avatar className='w-6 h-6'>
          <AvatarImage src='/placeholder.svg?height=24&width=24' />
          <AvatarFallback className='bg-purple-800 text-white text-xs'>
            U
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

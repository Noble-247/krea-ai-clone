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
  User,
} from 'lucide-react';
import { ThemeSwitcher } from './theme-switcher';

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <header className='flex items-center justify-between px-2 sm:px-4 py-3 bg-background relative'>
      {/* Left side - Logo */}
      <div className='flex items-center gap-2'>
        <div className='w-6 h-6 bg-foreground rounded flex items-center justify-center'>
          <span className='text-background text-lg font-bold'>K</span>
        </div>
        {/* Remove the Avatar from mobile view */}
        <div className='hidden sm:flex items-center gap-2'>
           <Avatar className='w-10 h-10'>
                <AvatarImage src='/placeholder-user.jpg?height=40&width=40' />
                <AvatarFallback className='bg-purple-800 text-white'>
                  <User />
                </AvatarFallback>
              </Avatar>
          <span className='text-sm text-muted-foreground'>
            businesscontentcreator
          </span>
        </div>
      </div>

      {/* Center - Navigation */}
      <div className='hidden md:flex items-center gap-1 border border-border rounded-3xl px-2 py-1 bg-muted shadow-sm'>
        <Button
          variant='ghost'
          size='lg'
          className='text-muted-foreground hover:text-foreground hover:bg-background cursor-pointer'>
          <Home className='w-6 h-6' />
        </Button>
        <Button
          variant='ghost'
          size='lg'
          className='text-muted-foreground hover:text-foreground hover:bg-background cursor-pointer'>
          <Image className='w-6 h-6' />
        </Button>
        <Button
          variant='ghost'
          size='lg'
          className='text-muted-foreground hover:text-foreground hover:bg-background cursor-pointer'>
          <Video className='w-6 h-6' />
        </Button>
        <Button
          variant='ghost'
          size='lg'
          className='text-muted-foreground hover:text-foreground hover:bg-background cursor-pointer'>
          <PenOff className='w-6 h-6' />
        </Button>
        <Button
          variant='ghost'
          size='lg'
          className='text-muted-foreground hover:text-foreground hover:bg-background cursor-pointer'>
          <Eraser className='w-6 h-6' />
        </Button>
        <Button
          variant='ghost'
          size='lg'
          className='text-muted-foreground hover:text-foreground hover:bg-background cursor-pointer'>
          <PaintbrushVertical className='w-6 h-6' />
        </Button>
        <Button
          variant='ghost'
          size='lg'
          className='text-muted-foreground hover:text-foreground hover:bg-background cursor-pointer'>
          <Folder className='w-6 h-6' />
        </Button>
      </div>

      {/* Mobile Navigation Side Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-background border-l border-border z-30 md:hidden transition-transform duration-300 ease-in-out ${
          mobileNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className='flex flex-col h-full'>
          {/* Header with close button */}
          <div className='p-4 border-b border-border flex items-center justify-between'>
            <span className='font-medium'>Menu</span>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setMobileNavOpen(false)}
              className='hover:bg-muted'>
              <X className='w-5 h-5' />
            </Button>
          </div>

          {/* Content wrapper */}
          <div className='p-4 flex flex-col h-full'>
            {/* User Profile Section */}
            <div className='flex items-center gap-3 pb-4 border-b border-border'>
              <Avatar className='w-10 h-10'>
                <AvatarImage src='/placeholder-user.jpg?height=40&width=40' />
                <AvatarFallback className='bg-purple-800 text-white'>
                  <User />
                </AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <span className='text-sm font-medium'>My Account</span>
                <span className='text-xs text-muted-foreground'>
                  View Profile
                </span>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className='flex flex-col gap-2 py-4'>
              <Button variant='ghost' className='justify-start w-full'>
                <Home className='w-4 h-4 mr-3' />
                Home
              </Button>
              <Button variant='ghost' className='justify-start w-full'>
                <Image className='w-4 h-4 mr-3' />
                Images
              </Button>
              <Button variant='ghost' className='justify-start w-full'>
                <Video className='w-4 h-4 mr-3' />
                Videos
              </Button>
              <Button variant='ghost' className='justify-start w-full'>
                <PenOff className='w-4 h-4 mr-3' />
                Inpainting
              </Button>
              <Button variant='ghost' className='justify-start w-full'>
                <Eraser className='w-4 h-4 mr-3' />
                Erase
              </Button>
              <Button variant='ghost' className='justify-start w-full'>
                <PaintbrushVertical className='w-4 h-4 mr-3' />
                Paint
              </Button>
              <Button variant='ghost' className='justify-start w-full'>
                <Folder className='w-4 h-4 mr-3' />
                Files
              </Button>
            </nav>

            {/* Bottom Actions */}
            <div className='mt-auto border-t border-border pt-4 flex flex-col gap-2'>
              <Button variant='ghost' className='justify-start w-full'>
                <Bell className='w-4 h-4 mr-3' />
                Notifications
              </Button>
              <Button variant='ghost' className='justify-start w-full'>
                <Headphones className='w-4 h-4 mr-3' />
                Support
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileNavOpen && (
        <div
          className='fixed inset-0 bg-background/80 backdrop-blur-sm z-20 md:hidden'
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* Right side - User actions */}
      <div className='flex items-center gap-2'>
        <Button
          variant='ghost'
          size='lg'
          className='text-muted-foreground hover:text-foreground hidden sm:flex cursor-pointer'>
          <Image className='w-6 h-6' />
          <span className='text-sm ml-1'>Gallery</span>
        </Button>
        <Button
          variant='ghost'
          size='lg'
          className='text-muted-foreground hover:text-foreground hidden sm:flex cursor-pointer'>
          <Headphones className='w-6 h-6' />
          <span className='text-sm ml-1'>Support</span>
        </Button>
        <Button
          variant='ghost'
          size='lg'
          className='text-muted-foreground hover:text-foreground cursor-pointer hidden md:flex'>
          <Bell className='w-6 h-6' />
        </Button>
        <ThemeSwitcher />
        <Avatar className='w-6 h-6 cursor-pointer hidden md:block'>
          <AvatarImage src='/placeholder-user.jpg?height=24&width=24' />
          <AvatarFallback className='bg-purple-800 text-white text-sm'>
            <User />
          </AvatarFallback>
        </Avatar>
        {/* Add Menu Button for mobile */}
        <Button
          variant='ghost'
          size='lg'
          className='text-muted-foreground cursor-pointer md:hidden'
          aria-label='Open menu'
          onClick={() => setMobileNavOpen(true)}>
          <Menu className='w-6 h-6' />
        </Button>
      </div>
    </header>
  );
}

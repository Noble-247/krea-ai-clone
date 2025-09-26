'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  const isDark = theme === 'dark';

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='relative text-muted-foreground hover:text-foreground cursor-pointer mr-0.5 lg:mr-6'>
      <Sun
        className={`absolute h-8 w-8 transition-all duration-300 ease-in-out ${
          isDark
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 -rotate-90 scale-0'
        }`}
      />
      <Moon
        className={`absolute h-8 w-8 transition-all duration-300 ease-in-out ${
          isDark
            ? 'opacity-0 rotate-90 scale-0'
            : 'opacity-100 rotate-0 scale-100'
        }`}
      />
    </Button>
  );
}

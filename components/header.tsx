"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Sun,
  Moon,
  Brain,
} from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b border-border">
      {/* Left side - Logo */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
          <span className="text-background text-sm font-bold">K</span>
        </div>
        {/* <div><Brain /></div>  */}
        <Avatar className="w-6 h-6">
          <AvatarImage src="/placeholder.svg?height=24&width=24" />
          <AvatarFallback className="bg-purple-800 text-white text-xs">
            U
          </AvatarFallback>
        </Avatar>
        <span className="text-sm text-muted-foreground">
          businesscontentcreator
        </span>
      </div>

      {/* Center - Navigation */}
      <div className="flex items-center gap-1 border border-border rounded-3xl px-2 py-1 bg-muted shadow-sm">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-background"
        >
          <Home className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-background"
        >
          <Image className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-background"
        >
          <Video className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-background"
        >
          <PenOff className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-background"
        >
          <Eraser className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-background"
        >
          <PaintbrushVertical className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-background"
        >
          <Folder className="w-4 h-4" />
        </Button>
      </div>

      {/* Right side - User actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground text-xs"
        >
          <Image className="w-4 h-4" />{" "}
          <span className="text-xs ml-1">Gallery</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <Headphones className="w-4 h-4" />
          <span className="text-xs ml-1">Support</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <Bell className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-muted-foreground hover:text-foreground"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
        <Avatar className="w-6 h-6">
          <AvatarImage src="/placeholder.svg?height=24&width=24" />
          <AvatarFallback className="bg-purple-800 text-white text-xs">
            U
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

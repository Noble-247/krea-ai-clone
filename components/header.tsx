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
} from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
  return (
    <header className="flex items-center justify-between px-2 sm:px-4 py-3 bg-background border-b border-border">
      {/* Left side - Logo */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
          <span className="text-background text-sm font-bold">K</span>
        </div>
        <Avatar className="w-6 h-6 hidden sm:block">
          <AvatarImage src="/placeholder.svg?height=24&width=24" />
          <AvatarFallback className="bg-purple-800 text-white text-xs">
            U
          </AvatarFallback>
        </Avatar>
        <span className="text-sm text-muted-foreground hidden sm:block">
          businesscontentcreator
        </span>
      </div>

      {/* Center - Navigation */}
      <div className="hidden md:flex items-center gap-1 border border-border rounded-3xl px-2 py-1 bg-muted shadow-sm">
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

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-1">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Home className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Image className="w-4 h-4" />
        </Button>
      </div>

      {/* Right side - User actions */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hidden sm:flex"
        >
          <Image className="w-4 h-4" />
          <span className="text-xs ml-1">Gallery</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hidden sm:flex"
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
        <ThemeSwitcher />
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
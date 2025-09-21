import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  BrainCog,
  ChevronDown,
  Image,
  MicVocal,
  Pencil,
  PersonStanding,
  Sparkles,
  Video,
} from "lucide-react";

const tools = [
  {
    name: "Image",
    description: "Generate images with custom styles in Flux and Ideogram",
    icon: <Image />,
    badge: "NEW",
    badgeColor: "bg-blue-500",
    iconBgColor: "bg-gray-600",
  },
  {
    name: "Video",
    description: "Generate videos with Huluu, Pica, Runway, Liama, and more",
    icon: <Video />,
    badge: null,
    badgeColor: null,
    iconBgColor: "bg-orange-400",
  },
  {
    name: "Realtime",
    description: "Realtime AI rendering on a camera, Instant feedback loops",
    icon: <Activity />,
    badge: null,
    badgeColor: null,
    iconBgColor: "bg-blue-500",
  },
  {
    name: "Enhancer",
    description: "Upgrade and enhance images and videos up to 22k",
    icon: <Sparkles />,
    badge: "NEW",
    badgeColor: "bg-blue-500",
    iconBgColor: "bg-gray-700",
  },
  {
    name: "Edit",
    description: "Add objects, change styles, or expand photos and generators",
    icon: <Pencil />,
    badge: "NEW",
    badgeColor: "bg-blue-500",
    iconBgColor: "bg-purple-950",
  },
  {
    name: "Video Lipsync",
    description: "Lipsync any video to any audio",
    icon: <MicVocal />,
    badge: "NEW",
    badgeColor: "bg-blue-500",
    iconBgColor: "bg-gray-600",
  },
  {
    name: "Motion Transfer",
    description: "Transfer motion to images and animate characters",
    icon: <PersonStanding />,
    badge: "NEW",
    badgeColor: "bg-blue-500",
    iconBgColor: "bg-gray-800",
  },
  {
    name: "Train",
    description: "Train to replicate your style, products, or characters",
    icon: <BrainCog />,
    badge: null,
    badgeColor: null,
    iconBgColor: "bg-gray-500",
  },
];

export function GenerateSection() {
  return (
    <section className="px-4 sm:px-6 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            Generate
          </h2>
          <Button
            variant="ghost"
            className="text-blue-400 hover:text-blue-300 text-sm flex items-center font-bold"
          >
            <ChevronDown className="block" />{" "}
            <span className="block">Show all</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="bg-card border border-gray-100 dark:border-gray-900 p-2 hover:bg-accent transition-colors"
            >
              <div className="flex gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`shrink-0 w-12 h-12 ${tool.iconBgColor} rounded-lg flex items-center justify-center text-lg text-gray-50`}
                  >
                    {tool.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm text-foreground">
                          {tool.name}
                        </h3>
                        {tool.badge && (
                          <span
                            className={`px-2 py-0.5 text-xs font-medium text-white rounded ${tool.badgeColor}`}
                          >
                            {tool.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-transparent"
                >
                  Open
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

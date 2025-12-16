export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "design-build",
    title: "Design + Build",
    description: "Full landscape architecture, permitting, and construction management.",
    icon: "/icons/compass.svg",
    features: ["Concept + planting plans", "Permits & HOA packages", "Dedicated project manager"],
  },
  {
    id: "enhancements",
    title: "Enhancement Projects",
    description: "Targeted upgrades for lighting, outdoor living, or water efficiency.",
    icon: "/icons/trowel.svg",
    features: ["Lighting + controls", "Outdoor kitchens + fire features", "Turf + planting refreshes"],
  },
  {
    id: "irrigation",
    title: "Irrigation & Water",
    description: "Smart controllers, retrofits, and repairs that keep landscapes efficient.",
    icon: "/icons/drop.svg",
    features: ["Smart controller installs", "Drip + spray retrofits", "Emergency leak response"],
  },
  {
    id: "maintenance",
    title: "Weekly Maintenance",
    description: "Detail-oriented crews keep estates, HOAs, and commercial sites pristine.",
    icon: "/icons/leaf.svg",
    features: ["Mowing + edging", "Tree + shrub care", "Seasonal color rotations"],
  },
  {
    id: "cleanup",
    title: "Cleanups & Prep",
    description: "One-time cleanups before events, listings, or seasonal transitions.",
    icon: "/icons/rake.svg",
    features: ["Storm + fire cleanup", "Mulch + gravel refresh", "On-demand hauling"],
  },
];

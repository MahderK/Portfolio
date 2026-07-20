export const projects = [
  {
    id: "tabletap",
    title: "TableTap",
    description:
      "A QR-ordering and POS system built for Ethiopian restaurants. Customers scan, order, and pay from their table — no app install needed.",
    tags: [
      "Next.js",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "WebSockets",
    ],
    github: "Proprietary",
    live: null, // swap in URL once deployed
    status: "In Development",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "This site. A terminal-first portfolio that doubles as a mini desktop OS. Built with React + Vite.",
    tags: ["React", "Vite", "Tailwind"],
    github: "https://github.com/MahderK/Portfolio",
    live: "https://mahderk.github.io/Portfolio/",
    status: "Live",
  },
  {
    id: "server",
    title: "Linux Server",
    description:
      "Fully Functional Linux-based home server using repurposed desktop, configured for 24/7 operation.",
    tags: ["Ubuntu 22.4 LTS", "Tailscale", "Nextcloud"],
    github: null,
    live: null,
    status: "In Development",
  },
];

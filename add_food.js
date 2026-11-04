import fs from 'fs';

let content = fs.readFileSync('src/data/portfolio.js', 'utf8');

const target = `      caseStudyNotes: {
        headline: "Business Architecture & Direct Inquiry Integration",
        architecture: "React 19 SPA Architecture with Tailwind CSS Styling",
        technicalSolution:
          "Engineered a frictionless inquiry pipeline transforming chosen fleet packages into structured WhatsApp bookings directly connecting drivers to the business host.",
      },
    },
  ],`;

const replacement = `      caseStudyNotes: {
        headline: "Business Architecture & Direct Inquiry Integration",
        architecture: "React 19 SPA Architecture with Tailwind CSS Styling",
        technicalSolution:
          "Engineered a frictionless inquiry pipeline transforming chosen fleet packages into structured WhatsApp bookings directly connecting drivers to the business host.",
      },
    },
    {
      id: "food-ordering",
      index: "06",
      title: "Online Food Ordering Platform",
      category: "Full-Stack Application",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      summary:
        "An end-to-end ordering application featuring dynamic menu categorization, synchronized cart state management, and an Express/MongoDB order processing pipeline.",
      contribution:
        "Architected the full system end-to-end: built the modular React interface with quantity state handlers, configured Express REST endpoints for item retrieval, and designed MongoDB schemas for dish catalogs and customer orders.",
      features: [
        "Dynamic culinary menu with real-time category filtering",
        "Synchronized shopping cart with quantity adjustments and state persistence",
        "Structured checkout flow with customer delivery address capture",
        "Custom REST API routes for catalog retrieval, cart updates, and order creation",
        "MongoDB document collections structured for items, categories, and order history",
      ],
      githubUrl: "https://github.com/yashtank075-ai/food-del",
      image: "/food-del-preview.png",
      caseStudyNotes: {
        architecture: "React Client → Express REST Gateway → MongoDB Storage",
        primaryChallenge:
          "Synchronizing cart state across navigation changes while maintaining responsive quantity mutation and order summary calculations.",
        technicalSolution:
          "Centralized state management with custom React hooks connected to transactional REST endpoints.",
      },
    },
  ],`;

// Normalize \r\n to \n for replacement, then write back
const normalized = content.replace(/\r\n/g, '\n');
if (normalized.includes(target)) {
  const result = normalized.replace(target, replacement);
  fs.writeFileSync('src/data/portfolio.js', result, 'utf8');
  console.log('Successfully appended food-ordering to portfolio.js');
} else {
  console.log('Target not found in normalized content');
}


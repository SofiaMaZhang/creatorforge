export const site = {
  name: "CreatorForge",
  tagline: "Where young creators build, connect, and grow.",
  positioning: "Every kid has a big idea waiting to be forged into reality.",
  motto: "Think like an artist. Build like an engineer.",
  description:
    "CreatorForge is a platform for kids 8 and older to download playful challenges, get the right tools, collaborate with specialists, and build real tech and art projects — then present their solutions to the world.",
  email: "hello@creatorforge.com",
  phone: "(617) 875-1960",
  address: "269 Pearl Street, Cambridge, MA 02139",
  webcast: {
    zoom: "https://zoom.us/j/7030709799",
    teams:
      "https://teams.live.com/meet/9394701480656?p=7kpbPy3FtJZU4VTSB1",
  },
};

export const nav = [
  { label: "Missions", href: "/missions" },
  { label: "For Parents", href: "/parents" },
  { label: "For Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Download playful challenges",
    description:
      "Start with a story-driven mission and step-by-step tips that turn a big problem into a fun build.",
    icon: "download",
  },
  {
    number: "02",
    title: "Get the right tools & supplies",
    description:
      "Grab a curated kit of parts, code, and materials so creators spend time building, not hunting for gear.",
    icon: "toolbox",
  },
  {
    number: "03",
    title: "Collaborate with specialists",
    description:
      "Work live with university mentors in art, engineering, and computer science who coach every step.",
    icon: "people",
  },
  {
    number: "04",
    title: "Build robots & projects",
    description:
      "Combine art and technology to build robots, games, websites, and contraptions that actually work.",
    icon: "robot",
  },
  {
    number: "05",
    title: "Present your solution",
    description:
      "Document the journey and pitch it to the world on The Forge Showcase — presenting is half the magic.",
    icon: "present",
  },
];

export type Mission = {
  title: string;
  category: string;
  blurb: string;
  story: string;
  tags: string[];
  accent: "ember" | "teal" | "violet" | "amber";
};

export const missions: Mission[] = [
  {
    title: "The Great Machine Heist",
    category: "Contraptions",
    blurb:
      "Design a wild Rube Goldberg machine that completes one simple task the most ridiculous way possible.",
    story:
      "A vault of stolen ideas can only be cracked by a chain reaction of clever contraptions. Can your machine pull it off?",
    tags: ["Engineering", "Physics", "Design"],
    accent: "ember",
  },
  {
    title: "Trash to Treasure",
    category: "Art + Sustainability",
    blurb:
      "Turn recycled materials into a toy, sculpture, or flying machine that helps clean up the planet.",
    story:
      "The world has too much trash and not enough green. Build something amazing out of what others threw away.",
    tags: ["Art", "Sustainability", "Making"],
    accent: "teal",
  },
  {
    title: "Code a Game World",
    category: "Software",
    blurb:
      "Program your own playable game or website, from pixel art to logic, and ship it to real players.",
    story:
      "Dream up a world, then code the rules that bring it to life. Your friends become your first players.",
    tags: ["Coding", "Game Design", "Web"],
    accent: "violet",
  },
  {
    title: "Robot to the Rescue",
    category: "Robotics",
    blurb:
      "Build and program a robot that senses, moves, and solves a real-world problem on its own.",
    story:
      "Greedy scoundrels are making big messes. Engineer a robot that sets things right and saves the day.",
    tags: ["Robotics", "Sensors", "Logic"],
    accent: "amber",
  },
];

export type Mentor = {
  initials: string;
  field: string;
  school: string;
  accent: "ember" | "teal" | "violet" | "amber";
};

export const mentors: Mentor[] = [
  { initials: "AE", field: "Mechanical Engineering", school: "MIT", accent: "ember" },
  { initials: "JP", field: "Computer Science", school: "Cornell", accent: "teal" },
  { initials: "RK", field: "Fine Arts & Design", school: "MassArt", accent: "violet" },
  { initials: "SL", field: "Electrical Engineering", school: "Harvard", accent: "amber" },
];

export const mentorSchools = [
  "MIT",
  "Cornell",
  "Harvard",
  "MassArt",
  "and more leading universities",
];

export const stats = [
  { value: "5,000+", label: "young creators served worldwide" },
  { value: "30+", label: "story-driven missions to choose from" },
  { value: "288k+", label: "reusable Build-It-Blocks created" },
  { value: "8–18", label: "ages welcomed (we start at 8)" },
];

export const buildItBlocks = {
  title: "Build-It-Blocks",
  subtitle: "A library of functional building blocks, born at the MIT Media Lab.",
  body: "Instead of starting from a blank page, creators snap together tested, modular building blocks — for code, mechanisms, and art — to build complex solutions fast. It reinforces the engineer's golden rule: break a big problem into simple parts.",
  points: [
    "Reusable code subroutines and mechanical mechanisms",
    "Build complex, unique solutions quickly",
    "Mentors can guide art + tech without being experts in everything",
    "Over 288,000 composite blocks built by the community",
  ],
};

export const showcase = {
  title: "The Forge Showcase",
  subtitle: "Like a portfolio and a playground in one.",
  body: "Presenting a project matters as much as building it. On The Forge Showcase, creators post their builds, tell the story behind them, and collaborate with makers around the world — building a real portfolio that shines on school and program applications.",
};

export const parents = {
  hero: {
    title: "Confident, capable, creative kids",
    subtitle:
      "CreatorForge complements school with hands-on projects that build real skills — and real joy.",
  },
  benefits: [
    {
      title: "Skills that last",
      body: "Every mission blends art and technology, plus teamwork, problem-solving, and presentation skills kids carry for life.",
    },
    {
      title: "Mentors who inspire",
      body: "Your child works live with vetted art, engineering, and CS students from top universities — positive role models, not just teachers.",
    },
    {
      title: "Fun with a purpose",
      body: "Playful, kid-tested storylines make hard ideas feel like a game. It's the 'non-school' approach kids actually ask for.",
    },
    {
      title: "A portfolio that grows",
      body: "Kids document and present their work, building a portfolio that strengthens future school and program applications.",
    },
  ],
  how: [
    {
      title: "Homecasts",
      body: "A single mission unfolds over eight weekly one-hour live webcasts with a small group of 8–12 creators, led by a CreatorForge specialist. Scheduled for after school and weekends.",
    },
    {
      title: "Workshops & Camps",
      body: "After-school workshops or a one-week camp session, led on-site or by webcast — great for schools, programs, and summer.",
    },
  ],
  safety: [
    "Small groups of 8–12 with a dedicated specialist",
    "Live, supervised sessions — never anonymous",
    "A moderated showcase community built for young creators",
  ],
  faq: [
    {
      q: "What ages is CreatorForge for?",
      a: "We welcome creators ages 8–18, with most missions designed for ages 8–13. Challenges scale up as kids grow.",
    },
    {
      q: "Does my child need experience or special equipment?",
      a: "No experience needed. Each mission lists the simple supplies required, and many use everyday or recycled materials plus free software.",
    },
    {
      q: "How much time does a mission take?",
      a: "Most missions run eight weekly one-hour sessions, plus optional building time between sessions.",
    },
    {
      q: "How do I get started?",
      a: "Tell us a bit about your creator on the Join page and a territory manager will share schedules and pricing for your area.",
    },
  ],
};

export const partners = {
  education: {
    title: "Education Partners",
    tagline: "Project-based A-STEM where art drives technology.",
    body: "We help schools and programs transform technology education — complementing standardized curricula with playful, project-based learning that coaches kids to think like artists and build like engineers.",
    points: [
      "30+ eight-week, story-driven projects on real social issues",
      "A-STEM model: art and social science drive STEM",
      "Build-It-Blocks library so any teacher can guide art + tech",
      "We recruit and train university teaching assistants as mentors",
    ],
  },
  retail: {
    title: "Retail Partners",
    tagline: "Weekly family engagement your customers pay for.",
    body: "Inspired by MIT's Constructionism research, our STEAM program turns trash into treasure with recycled materials — delivered through live weekly family webcasts that deepen brand loyalty.",
    points: [
      "Live weekly webcast sessions families build along with",
      "Recycled-materials projects: toys, robots, flying machines",
      "Brand association with education and the environment",
      "Online relationships that drive repeat engagement",
    ],
  },
};

export type Job = {
  title: string;
  type: string;
  team: "Business" | "Technical" | "Teaching";
  summary: string;
  responsibilities: string[];
  comp: string;
};

export const jobs: Job[] = [
  {
    title: "COO → CEO",
    type: "Part time to full time",
    team: "Business",
    summary:
      "A leader passionate about education and entrepreneurship to guide CreatorForge through a rapid growth phase.",
    responsibilities: [
      "Shape a mission-driven ed-tech company at an inflection point",
      "Close complex deals and partnerships",
      "Engage investors and partners with strategic fluency",
    ],
    comp: "Meaningful equity + performance bonus + base aligned with early-stage startups",
  },
  {
    title: "Content Developer",
    type: "Part time, 5–10 hrs/week",
    team: "Technical",
    summary:
      "Builders — programmers, engineers, writers, artists, architects — to evolve our libraries of storylines, building blocks, videos, and lessons.",
    responsibilities: [
      "Write project storylines and lessons",
      "Develop graphics, videos, mechanisms, and code subroutines",
      "Document and manage projects",
    ],
    comp: "$15–$20 / hr (+ target-based bonuses)",
  },
  {
    title: "Platform / Multimedia Developer",
    type: "Part time, 5–10 hrs/week",
    team: "Technical",
    summary:
      "Evolve our web presence and The Forge Showcase — a game-like environment for playful inventors.",
    responsibilities: [
      "Design system architecture",
      "Code with HTML5, CSS, JavaScript, React, AWS, MySQL, PHP",
      "Direct a team of interns, artists, and programmers",
    ],
    comp: "$10–$20 / hr (+ target-based bonuses)",
  },
  {
    title: "Product Manager",
    type: "Part time to full time",
    team: "Technical",
    summary:
      "Ensure our development teams deliver products that creators and families truly value.",
    responsibilities: [
      "Maintain functional specs and roadmaps",
      "Build the customer feedback loop and test products",
      "Keep projects on spec, on time, and on budget",
    ],
    comp: "Meaningful equity + performance bonus + base aligned with early-stage startups",
  },
  {
    title: "Operations Manager",
    type: "Part time to full time",
    team: "Business",
    summary:
      "Run the day-to-day business — from recruiting workshop leaders to managing supplies and customer relationships.",
    responsibilities: [
      "Recruit, train, and manage workshop leaders",
      "Manage customer relationships and the database",
      "Coordinate regional territory development",
    ],
    comp: "Meaningful equity + performance bonus + base aligned with early-stage startups",
  },
  {
    title: "Regional Manager",
    type: "Part time, 10–20 hrs/week",
    team: "Business",
    summary:
      "Teachers, parents, artists, engineers, and business developers to grow regional territories.",
    responsibilities: [
      "Recruit, train, and manage workshop leaders",
      "Sell memberships and schedule webcast workshops",
      "Guide kids through art, code, and engineering projects",
    ],
    comp: "$15–$35 / hr (percentage of business generated and managed)",
  },
  {
    title: "Workshop Leader",
    type: "Part time, 5–10 hrs/week",
    team: "Teaching",
    summary:
      "Artists, engineers, and programmers to lead after-school workshops and camps on-site in Boston and remotely worldwide.",
    responsibilities: [
      "Teach kids art, programming, and engineering tricks",
      "Manage, motivate, and engage small groups",
      "Document results and celebrate wins",
    ],
    comp: "$15–$20 / hr (+ target-based bonuses)",
  },
];

export const about = {
  story: [
    {
      heading: "How we started",
      body: "In 2006, an engineer with a unique artistic vision turned a lifelong hobby into a passion-driven studio on a small storefront down the street from Harvard Yard in Cambridge, Massachusetts.",
    },
    {
      heading: "Where we are now",
      body: "That first studio grew into a global learning lab serving kids ages 8–18 in schools, after-school programs, camps, and at home via live webcasts — built on technology-in-education research from the MIT Media Lab.",
    },
    {
      heading: "What we believe",
      body: "The next generation will need to use technology creatively to solve hard, important problems. We blend art and engineering so kids learn to think like artists and build like engineers — together.",
    },
  ],
  pillars: [
    {
      title: "Playful content",
      body: "Story-driven missions, kid-tested over a decade, that make hard ideas fun.",
    },
    {
      title: "A mentor network",
      body: "University art, engineering, and CS students trained as role-model coaches.",
    },
    {
      title: "Collaboration tools",
      body: "Live webcast workshops that connect creators wherever they are.",
    },
    {
      title: "A creative community",
      body: "The Forge Showcase, where creators share builds and grow a portfolio.",
    },
  ],
};

export const territoryManagers = [
  { region: "Boston, USA", name: "Territory Manager" },
  { region: "Mexico", name: "Territory Manager" },
  { region: "Canada", name: "Territory Manager" },
  { region: "Beijing, China", name: "Territory Manager" },
  { region: "Texas & Japan", name: "Territory Manager" },
];

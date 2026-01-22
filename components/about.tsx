"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Cv } from "@/components/cv";

export function About() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "Rust",
        "Solidity",
        "TypeScript",
        "Python",
        "Go",
        "SQL",
        "JavaScript",
        "C/C++",
        "HTML/CSS",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Next.js",
        "React",
        "Node.js",
        "NestJS",
        "Express",
        "FastAPI",
        "Axum",
        "Dioxus",
        "Django",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: "Blockchain & Web3",
      skills: [
        "Smart Contracts",
        "Foundry",
        "Hardhat",
        "Ethers.js",
        "Viem/Wagmi",
        "OpenZeppelin",
        "ERC Standards (20/721/1155)",
        "DeFi Protocols",
        "Gas Optimization",
        "Security Auditing",
      ],
    },
    {
      title: "Infrastructure & DevOps",
      skills: [
        "AWS (ECS, Lambda, S3)",
        "Docker",
        "Terraform",
        "Cloudflare",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Git/GitHub Actions",
        "Linux",
      ],
    },
    {
      title: "AI & Data Engineering",
      skills: [
        "OpenCV",
        "CUDA",
        "YOLOv3",
        "Computer Vision",
        "RESTful APIs",
        "System Architecture",
        "CI/CD Pipelines",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a creative developer with a passion for building user-friendly web applications,
                EVM smart contracts, and backend APIs. I've worked with a variety of clients from
                startups to established businesses.
              </p>

              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-foreground">Programming Heroes:</strong>{" "}
                  <span className="text-muted-foreground">
                    Andrej Karpathy, Chris Lattner, Donald Knuth, George Hotz, Grant Sanderson,
                    Satoshi Nakamoto, ThePrimeagen.
                  </span>
                </p>
                <p>
                  <strong className="text-foreground">Favorite Reads:</strong>{" "}
                  <span className="text-muted-foreground">
                    Clean Code, The Pragmatic Programmer, Rust In Action, The Master Algorithm.
                  </span>
                </p>
                <p>
                  <strong className="text-foreground">Favorite Language:</strong>{" "}
                  <span className="text-muted-foreground">
                    Rust. I drank the Kool-Aid. It's not just the memory safety or performance; I
                    genuinely find the developer experience and type system empowering.
                  </span>
                </p>
              </div>

              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-semibold border-b pb-2">Skills & Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {skillCategories.map((category) => (
                    <div key={category.title} className="space-y-2">
                      <h4 className="text-sm font-medium text-primary">{category.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-6">
                <Cv />
              </div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden rounded-xl border border-primary/20 shadow-2xl mx-auto w-full max-w-md bg-muted"
              >
                {/* Placeholder for profile image if it fails to load */}
                <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-neutral-700">
                  <span className="sr-only">Profile Image</span>
                </div>
                <Image
                  src="/profile.webp"
                  alt="Kenneth Smith"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </motion.div>

              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  My Journey
                </h3>
                <div className="space-y-8 ml-2">
                  <div className="relative pl-6 pb-6 border-l border-primary/20 last:border-0">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5 ring-4 ring-background"></div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-baseline flex-wrap gap-2">
                        <h4 className="font-medium text-lg">Full Stack Blockchain Developer</h4>
                        <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded">
                          02/2025 - Present
                        </span>
                      </div>
                      <div className="text-sm font-medium text-primary mb-1">cryptoart.com</div>
                      <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                        <li>
                          Lead developer of upgradeable ERC721 NFTs implementing ERC7160 using
                          Solidity and Foundry.
                        </li>
                        <li>
                          Led audits, identified critical vulnerabilities, and shipped secure
                          Ethereum Mainnet deployments.
                        </li>
                        <li>
                          Built production-ready frontend with React and Vite, integrating smart
                          contracts and RESTful APIs.
                        </li>
                        <li>
                          Designed and deployed a NestJS backend with PostgreSQL on AWS ECS,
                          Cloudfront with Terraform.
                        </li>
                        <li>
                          Managed HTTPS certs, DNS, and multi-domain routing with Cloudflare and AWS
                          ACM.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-6 pb-6 border-l border-primary/20 last:border-0">
                    <div className="absolute w-3 h-3 bg-primary/70 rounded-full -left-[6.5px] top-1.5 ring-4 ring-background"></div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-baseline flex-wrap gap-2">
                        <h4 className="font-medium text-lg">Full Stack Blockchain Developer</h4>
                        <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded">
                          09/2024 - 01/2025
                        </span>
                      </div>
                      <div className="text-sm font-medium text-primary mb-1">Cytric</div>
                      <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                        <li>
                          Engineered production-grade smart contracts using Solidity and Hardhat for
                          unit/integration testing.
                        </li>
                        <li>
                          Developed RESTful APIs with GO and built MongoDB-based indexing service
                          for blockchain events.
                        </li>
                        <li>
                          Integrated Web3.js and Ethers.js libraries with Next.js frontend and
                          FastAPI to synchronize blockchain data.
                        </li>
                        <li>
                          Built scalable cloud infrastructure using AWS services for
                          high-performance 3D asset rendering and blockchain integration.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-6 pb-6 border-l border-primary/20 last:border-0">
                    <div className="absolute w-3 h-3 bg-primary/40 rounded-full -left-[6.5px] top-1.5 ring-4 ring-background"></div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-baseline flex-wrap gap-2">
                        <h4 className="font-medium text-lg">Smart Contract Developer</h4>
                        <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded">
                          08/2023 - 08/2024
                        </span>
                      </div>
                      <div className="text-sm font-medium text-primary mb-1">Freelance</div>
                      <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                        <li>
                          Developed smart contracts with Foundry for a NFT staking game on the EVM.
                        </li>
                        <li>
                          Implemented ERC20 and ERC721 tokens and upgradeable contracts, enhancing
                          the game's flexibility and security.
                        </li>
                        <li>
                          Built blockchain apps using Rust and Axum on the backend and Dioxus on the
                          frontend.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-6 border-l border-primary/20 last:border-l-0">
                    <div className="absolute w-3 h-3 bg-muted-foreground/30 rounded-full -left-[6.5px] top-1.5 ring-4 ring-background"></div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-baseline flex-wrap gap-2">
                        <h4 className="font-medium text-lg">AI Software Engineer Internship</h4>
                        <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded">
                          02/2023 - 06/2023
                        </span>
                      </div>
                      <div className="text-sm font-medium text-primary mb-1">Polaris</div>
                      <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                        <li>
                          Achieved a 99% accuracy rate in defect detection by designing OpenCV
                          computer vision algorithms using YOLOV3.
                        </li>
                        <li>
                          Optimized neural networks on CUDA, resulting in a 30% improvement in
                          processing speed.
                        </li>
                        <li>
                          Maintained and updated software tools in C++ and Python, ensuring high
                          performance in object detection applications.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

import { SiTypescript, SiPython, SiNextdotjs, SiPrisma, SiTailwindcss, SiPostgresql,SiCloudinary ,SiZod ,SiShadcnui  } from "react-icons/si"
import { SiLangchain, SiOllama  } from "react-icons/si" 
import { IconType } from "react-icons"
import chromadb  from "@/components/icons/chromadb"

export interface projectinterface {
  title: string
  imageurl: string
  description: string
  icons: IconType[]
  liveurl?: string
  github: string
}

export const projectinfo: projectinterface[] = [
  {
    title: "AI-Powered Legal Case Retrieval System",
    description:
      "Developing a semantic search engine for legal case discovery using a Retrieval-Augmented Generation (RAG) framework and a fine-tuned LLM. Designed to understand the contextual nuances of legal queries and improve research accuracy for finding case precedents.",
    imageurl: "/rag_chat.png",
    icons: [SiTypescript, SiPython,SiOllama,SiLangchain,chromadb,SiNextdotjs,SiShadcnui],
    github:
      "https://github.com/Manishhhsys/AI-Powered-Legal-Case-Retrieval-System",
  },
  {
    title: "Department Website (AI&DS)",
    description:
      "Built a full-stack platform for the AI & Data Science department using Next.js, Prisma, and ShadCN. Features secure authentication, an admin dashboard, and a responsive design to centralize departmental resources and streamline communication.",
    imageurl: "/branch_pic.png",
    icons: [SiNextdotjs, SiPrisma,SiPostgresql, SiTailwindcss,SiCloudinary,SiZod,SiShadcnui],
    liveurl: "https://idea-nmamit.in/",
    github: "https://github.com/idea-nmamit/Branch-Website",
  },
  {
    title: "Full-Stack Brain Tumor Prediction Tool",
    description:
      "Developed a brain tumor detection web app integrating a CNN model (86% accuracy) with Next.js, Prisma, and ShadCN for the front-end and back-end, and Flask for model inference. Users can upload MRI scans and get instant diagnostic results.",
    imageurl: "/Brain_tumor.png",
    icons: [SiNextdotjs, SiPrisma, SiTailwindcss,SiPostgresql,SiPython,SiZod,SiShadcnui],
    github: "https://github.com/Manishhhsys/Brain-Tumor-Prediction-Tool",
  },
]

interface Projects {
    title: string,
    description?: string,
    Image: string,
    href: string
}

export const projects: Projects[] = [
    {
        title: "Mystery Message",
        description: "Anonymous Messaging Platform with AI features",
        Image: "/mystery-message.png",
        href: "mystery-messages.in"
    },
    {
        title: "Personal Portfolio",
        description: "A personal portfolio website showcasing my skills, projects, and experience.",
        Image: "/portfolio.png",
        href: "https://akash-halder-portfolio.vercel.app/"
    }
]
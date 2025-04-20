export type Plan = {
    title: string;
    price: number;
    duration: string;
    features: string[];
    popular?: boolean;
};

// dummy data for dashbaord layout
interface Dash_Pricing{
    name:string,
    price:string,
    description:string,
    features:Array<string>,
    period?:string,
    popular?:boolean,
    current?:boolean,
    color:string
}

export const yearlyPlans: Plan[] = [
    {
        title: "Free",
        price: 0,
        duration: "Lifetime",
        features: ["10 free AI credits", "Basic support", "Limited tools"]
    },
    {
        title: "Advanced",
        price: 150,
        duration: "Per year",
        features: ["Unlimited access", "Priority support", "AI customization"],
        popular: true,
    },
    {
        title: "Team",
        price: 180,
        duration: "Per year",
        features: ["Everything in Advanced", "Team Collaboration", "Admin Panel"],
    },
];

export const monthlyPlans: Plan[] = [
    {
        title: "Free",
        price: 0,
        duration: "Lifetime",
        features: ["10 free AI credits", "Basic support", "Limited tools"]
    },
    {
        title: "Advanced",
        price: 15,
        duration: "Per month",
        features: ["Unlimited access", "Priority support", "AI customization"],
        popular: true,
    },
    {
        title: "Team",
        price: 20,
        duration: "Per month",
        features: ["Everything in Advanced", "Team Collaboration", "Admin Panel"],
    },
];


// exporting plans for Dashboard
export const plans:Dash_Pricing[] = [
    {
      name: "Free",
      price: "$0",
      description: "Basic AI content generation",
      features: [
        "5 AI content generations per month",
        "3 AI image generations per month",
        "Basic text formats",
        "Standard response time"
      ],
      current: true,
      color: "bg-muted"
    },
    {
      name: "Gold",
      price: "$19",
      period: "/month",
      description: "More AI credits for individuals",
      features: [
        "50 AI content generations per month",
        "25 AI image generations per month",
        "All text formats",
        "Faster response time",
        "Save history for 3 months",
        "Priority support"
      ],
      popular: true,
      color: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800"
    },
    {
      name: "Platinum",
      price: "$49",
      period: "/month",
      description: "More AI credits for businesses",
      features: [
        "Unlimited AI content generations",
        "100 AI image generations per month",
        "All text and image formats",
        "Fastest response time",
        "Save history forever",
        "Priority support",
        "Custom templates",
        "Team collaboration"
      ],
      color: "bg-slate-50 dark:bg-slate-950/30 border-slate-200 dark:border-slate-800"
    }
];

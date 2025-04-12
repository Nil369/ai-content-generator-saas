import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Zap } from "lucide-react";

export default function BillingPage() {
  const plans = [
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

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Billing</h1>
        <p className="text-muted-foreground">Manage your subscription and payment details</p>
      </div>
      
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Current Plan
            </CardTitle>
            <CardDescription>
              You are currently on the Free plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="text-primary border-primary">
                Free Plan
              </Badge>
              <p className="text-sm text-muted-foreground">5 credits remaining this month</p>
            </div>
            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '50%' }}></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Credits reset on August 30, 2023</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Usage</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`border ${plan.popular ? 'ring-2 ring-primary' : ''} relative ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 -right-3">
                  <Badge className="bg-primary text-primary-foreground">
                    <Zap className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.current ? "outline" : "default"} 
                  className="w-full"
                  disabled={plan.current}
                >
                  {plan.current ? "Current Plan" : "Upgrade"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 
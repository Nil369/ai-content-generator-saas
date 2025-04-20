"use client";

import { useState } from "react";
import { monthlyPlans, yearlyPlans } from "@/constants/pricing";
import { cn } from "@/lib/utils"; 
import Navbar from "@/components/Navbar";
import { Check } from "lucide-react";
import Footer from "@/components/Footer";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const plans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <>
      <Navbar />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Our pricing plans</h2>
            <p className="text-xl text-gray-500 mb-12">
              <span className="text-indigo-500 font-semibold">Free 10 credits</span> per AI tool. No credit card required.
            </p>
            <div className="mb-10 flex justify-center">
              <span className="flex items-center">
                <svg
                  className="w-16 h-11"
                  viewBox="0 0 65 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.0964 4.02732C39.5251 4.74637 37.1135 5.87152 34.9795 7.36979C34.0529 8.02188 33.2561 8.68389 32.5982 9.38799C32.5386 9.38153 32.482 9.38579 32.4118 9.38233C30.1332 9.37225 27.711 10.2114 25.0194 11.9465C20.4292 14.906 16.7212 19.2023 14.2904 24.3897C12.0636 29.1502 11.0911 34.265 11.4596 39.2591L7.6368 36.04L6.83225 37.0047L12.587 41.8449L16.9956 35.7576L15.9819 35.024L13.1146 38.9812C12.4253 28.9566 17.4523 18.8014 25.9225 13.3583C27.861 12.1112 29.6087 11.3798 31.2299 11.146C30.6487 12.083 30.2872 13.0624 30.1426 14.0738C29.9087 15.7573 30.5083 17.6123 31.7101 18.8943C32.6977 19.9474 33.9541 20.4744 35.2551 20.3764C36.5669 20.2755 37.7738 19.5103 38.5629 18.2841C39.4661 16.8873 39.6838 15.1043 39.1492 13.6472C38.4686 11.7917 36.7603 10.3508 34.6701 9.73325C35.0524 9.40674 35.4806 9.07896 35.9331 8.75591C42.0235 4.51004 50.3771 3.60724 57.2293 6.46459L57.8719 4.92101C54.237 3.40628 50.175 2.84314 46.1137 3.2738C44.7513 3.40049 43.4035 3.6618 42.0964 4.02732ZM37.5828 14.2008C37.9503 15.1845 37.7787 16.3883 37.1605 17.3586C36.9123 17.7517 36.3954 18.3817 35.5811 18.6094C35.4419 18.6483 35.2889 18.6795 35.1406 18.6863C34.3594 18.743 33.5726 18.4082 32.933 17.7318C32.0791 16.8263 31.6418 15.4691 31.8087 14.2898C31.9645 13.1944 32.4639 12.1301 33.2993 11.1106C35.286 11.3987 36.9819 12.5889 37.5828 14.2008Z"
                    fill="#9CA3AF"
                  />
                </svg>

                <span className="inline-block whitespace-nowrap text-xs leading-4 font-semibold tracking-wide bg-indigo-50 text-indigo-600 rounded-full py-2 px-4">
                  Save 20%
                </span>
              </span>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center items-center bg-gray-100 rounded-full p-1.5 max-w-sm mx-auto">
              <button
                onClick={() => setIsYearly(true)}
                className={cn(
                  "w-1/2 text-center font-semibold py-3 rounded-full transition-all hover:cursor-pointer",
                  isYearly ? "bg-indigo-600 text-white" : "text-gray-400 hover:text-indigo-600"
                )}
              >
                Bill Yearly
              </button>
              <button
                onClick={() => setIsYearly(false)}
                className={cn(
                  "w-1/2 text-center font-semibold py-3 rounded-full transition-all hover:cursor-pointer",
                  !isYearly ? "bg-indigo-600 text-white" : "text-gray-400 hover:text-indigo-600"
                )}
              >
                Bill Monthly
              </button>
            </div>
          </div>

          {/* Plan Cards */}
          <div className="grid gap-6 lg:grid-cols-3 mt-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  "relative p-6 xl:p-12 rounded-2xl border transition-all duration-300",
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                    : "border-gray-300 text-center hover:border-indigo-600"
                )}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <div className="text-lg">{plan.duration}</div>
                </div>

                {plan.popular && (
                  <span className="absolute top-6 right-6 bg-white text-indigo-600 text-sm font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}

                <ul className="mb-8 text-sm text-left space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-5" /> <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Gradient Button */}
                <button className="relative inline-block px-5 py-2.5 rounded-full font-semibold text-indigo-600 bg-white transition-all duration-300 overflow-hidden z-0 group hover:cursor-pointer">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#439cfb] to-[#f187fb] rounded-full z-[-2] opacity-100 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-[0.7] bg-white rounded-full z-[-2] group-hover:opacity-0 transition-opacity duration-300"></span>
                  <span className="relative z-10 group-hover:text-white">Purchase Plan</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

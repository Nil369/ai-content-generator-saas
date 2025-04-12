import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  FileText, 
  Image as ImageIcon, 
  MessageSquare, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-muted-foreground">Track your content performance and usage</p>
      </div>
      
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Content Created", value: "124", icon: <FileText className="text-blue-500" />, change: "+12%" },
          { title: "Images Generated", value: "85", icon: <ImageIcon className="text-purple-500" />, change: "+24%" },
          { title: "Chat Sessions", value: "237", icon: <MessageSquare className="text-green-500" />, change: "+18%" },
          { title: "API Usage", value: "68%", icon: <TrendingUp className="text-orange-500" />, change: "-2%" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                  <div className="flex items-baseline">
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                    <span className={`ml-2 text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-primary/10">
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Content Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
            <CardDescription>Weekly content creation across types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-end justify-between gap-2 border-b border-l">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="flex space-x-1">
                    <div 
                      className="w-5 bg-blue-500 rounded-t-sm" 
                      style={{ height: `${Math.floor(Math.random() * 150) + 50}px` }}
                    ></div>
                    <div 
                      className="w-5 bg-purple-500 rounded-t-sm" 
                      style={{ height: `${Math.floor(Math.random() * 100) + 30}px` }}
                    ></div>
                    <div 
                      className="w-5 bg-green-500 rounded-t-sm" 
                      style={{ height: `${Math.floor(Math.random() * 80) + 20}px` }}
                    ></div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">{day}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                <span className="text-xs text-muted-foreground">Text</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                <span className="text-xs text-muted-foreground">Images</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                <span className="text-xs text-muted-foreground">Chat</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Usage Breakdown</CardTitle>
            <CardDescription>Distribution by content type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-60">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  {/* SVG donut chart */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="150 251.2"></circle>
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="75 251.2" strokeDashoffset="-150"></circle>
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#22c55e" strokeWidth="20" strokeDasharray="26.2 251.2" strokeDashoffset="-225"></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">446</div>
                      <div className="text-xs text-muted-foreground">Total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                  <span className="text-sm font-medium">Text</span>
                </div>
                <div className="text-lg font-bold">60%</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                  <span className="text-sm font-medium">Images</span>
                </div>
                <div className="text-lg font-bold">30%</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  <span className="text-sm font-medium">Chat</span>
                </div>
                <div className="text-lg font-bold">10%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest content creation activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { icon: <FileText />, title: "Blog Post: '10 AI Tools for Content Creators'", time: "2 hours ago", type: "Text" },
              { icon: <ImageIcon />, title: "Generated 5 product images for marketing", time: "5 hours ago", type: "Image" },
              { icon: <MessageSquare />, title: "Chat session about Twitter marketing strategy", time: "Yesterday", type: "Chat" },
              { icon: <FileText />, title: "Landing page copy for SaaS product", time: "2 days ago", type: "Text" },
              { icon: <ImageIcon />, title: "Generated social media banner", time: "3 days ago", type: "Image" },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-4 py-3 border-b last:border-0">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <div className="px-2 py-1 text-xs rounded-full bg-muted">
                  {activity.type}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View All Activity</Button>
        </CardFooter>
      </Card>
    </div>
  );
} 
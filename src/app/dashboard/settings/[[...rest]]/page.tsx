"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  Bell, 
  Globe, 
  Lock, 
  UserCircle, 
  Palette, 
  Moon, 
  Sun, 
  Monitor, 
  Check, 
  Upload,
  Save,
  Key,
  Shield,
  MailIcon,
  BellRing
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { UserProfile, useUser } from '@clerk/nextjs';
import { dark, shadesOfPurple } from '@clerk/themes'
import { toast } from 'react-hot-toast';


// Theme color options
const themeColorOptions = [
  { value: 'zinc', label: 'Zinc', color: 'hsl(240 3.7% 44.1%)' },
  { value: 'slate', label: 'Slate', color: 'hsl(215.4 16.3% 46.9%)' },
  { value: 'stone', label: 'Stone', color: 'hsl(25 5.3% 44.7%)' },
  { value: 'gray', label: 'Gray', color: 'hsl(220 8.9% 46.1%)' },
  { value: 'neutral', label: 'Neutral', color: 'hsl(0 0% 45.1%)' },
  { value: 'red', label: 'Red', color: 'hsl(0 84.2% 60.2%)' },
  { value: 'rose', label: 'Rose', color: 'hsl(346.8 77.2% 49.8%)' },
  { value: 'blue', label: 'Blue', color: 'hsl(217.2 91.2% 59.8%)' },
  { value: 'green', label: 'Green', color: 'hsl(142.1 76.2% 36.3%)' },
  { value: 'purple', label: 'Purple', color: 'hsl(250 95.2% 51.6%)' },
];

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { user, isLoaded } = useUser();
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [themeColor, setThemeColor] = useState('purple');
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Load saved color theme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedColor = localStorage.getItem('theme-color') || 'purple';
      setThemeColor(savedColor);
    }
  }, []);

  // Set user form data when user is loaded
  useEffect(() => {
    if (isLoaded && user) {
      setUserForm({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.primaryEmailAddress?.emailAddress || '',
      });
    }
  }, [isLoaded, user]);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  // Handle changes to the user form
  const handleUserFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle color theme change
  const handleThemeColorChange = (color: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-color', color);
    }
    setThemeColor(color);
    
    // Apply class to html element - Fixed to ensure theme changes are applied
    const html = document.documentElement;
    const body = document.body;
    
    themeColorOptions.forEach(option => {
      html.classList.remove(`theme-${option.value}`);
      body.classList.remove(`theme-${option.value}`);
    });
    
    html.classList.add(`theme-${color}`);
    body.classList.add(`theme-${color}`);
    
    // Ensure all dashboard elements get the theme update
    const dashboardElements = document.querySelectorAll('[data-theme-color]');
    dashboardElements.forEach(element => {
      themeColorOptions.forEach(option => {
        element.classList.remove(`theme-${option.value}`);
      });
      element.classList.add(`theme-${color}`);
      element.setAttribute('data-theme-color', color);
    });

    // Force a reload if needed to ensure theme is applied everywhere
    setTimeout(() => window.location.reload(), 300);
  };

  const handleSaveSettings = (section: string) => {
    setLoading(true);
    
    // Handle user info updates
    if (section === 'userinfo' && user) {
      user.update({
        firstName: userForm.firstName,
        lastName: userForm.lastName,
      }).then(() => {
        setLoading(false);
        toast.success('User information updated successfully!');
      }).catch(error => {
        console.error("Error updating user:", error);
        setLoading(false);
        toast.error('Error updating user information');
      });
    } 
    // Handle theme changes
    else if (section === 'theme') {
      // Save theme settings
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme-color', themeColor);
      }
      
      // Force theme application
      handleThemeColorChange(themeColor);
      
      // Simulate API call for theme settings
      setTimeout(() => {
        setLoading(false);
        toast.success('Theme settings saved successfully!');
      }, 800);
    }
    else {
      // Simulate API call for other sections
      setTimeout(() => {
        setLoading(false);
        toast.success('Settings saved successfully!');
      }, 800);
    }
  };

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>
      
      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-1 overflow-x-auto">
          <TabsTrigger value="account" className="flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap">
            <UserCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Account</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap">
            <Lock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap">
            <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap">
            <Palette className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Appearance</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Account Information</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Update your profile information and upload a profile picture
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="w-full overflow-scroll">
                  {isLoaded && (
                    <UserProfile 
                      appearance={{
                        baseTheme: theme === 'dark' ? dark : undefined,
                        elements: {
                          rootBox: "mx-auto w-full ",
                          card: "shadow-none p-0 border-0 dark:bg-zinc-900",
                          navbar: "hidden",
                          pageScrollBox: "p-0",
                          formButtonPrimary: "bg-primary hover:bg-primary/90",
                          formFieldInput: "focus:ring-primary",
                          avatarBox: "cursor-pointer hover:opacity-80",
                          profilePage: {
                            root: "p-4"
                          },
                          userPreviewMainIdentifier: "font-semibold",
                          formFieldLabel: "text-foreground",
                          formFieldLabelRow: "text-foreground",
                          formFieldError: "text-red-500"
                        },
                        // variables: {
                        //   colorPrimary: '#a855f7'
                        // }
                      }}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="security">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:overflow-hidden">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-xl">Password</CardTitle>
                  <CardDescription>Update your account password</CardDescription>
                </div>
                <Key className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="gap-2" 
                  onClick={() => handleSaveSettings('password')}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-foreground/30 border-t-foreground animate-spin"></div>
                      Updating...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Update Password
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-xl">Two-Factor Authentication</CardTitle>
                  <CardDescription>Add an extra layer of security</CardDescription>
                </div>
                <Shield className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Secure your account with 2FA</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="rounded-md bg-muted p-4 mt-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium">Security recommendation</h3>
                      <div className="mt-2 text-sm text-muted-foreground">
                        <p>
                          We recommend enabling two-factor authentication for added security. This will protect your account even if your password is compromised.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-xl">Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </div>
              <BellRing className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive content updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Emails</p>
                    <p className="text-sm text-muted-foreground">Receive marketing and promotional content</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Features</p>
                    <p className="text-sm text-muted-foreground">Get notified about new features and improvements</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Platform Updates</p>
                    <p className="text-sm text-muted-foreground">Be notified of important platform changes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Weekly Digest</p>
                    <p className="text-sm text-muted-foreground">Get a weekly summary of your content performance</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="gap-2" 
                onClick={() => handleSaveSettings('notifications')}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 rounded-full border-2 border-foreground/30 border-t-foreground animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    Save Preferences
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-xl">Theme Preferences</CardTitle>
                  <CardDescription>Customize the appearance of your dashboard</CardDescription>
                </div>
                <Palette className="h-6 w-6 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div className="space-y-4">
                  <Label className="text-base">Choose Theme Mode</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {themeOptions.map((option) => {
                      const Icon = option.icon;
                      const isActive = theme === option.value;
                      
                      return (
                        <div
                          key={option.value}
                          className={`
                            relative border rounded-lg p-4 cursor-pointer transition-all
                            ${isActive 
                              ? 'border-primary bg-primary/10 ring-2 ring-primary ring-offset-2' 
                              : 'hover:border-muted-foreground/30 hover:bg-muted/50'
                            }
                          `}
                          onClick={() => setTheme(option.value)}
                        >
                          <div className="flex flex-col items-center gap-2">
                            <div className={`p-2 rounded-full ${isActive ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium">{option.label}</span>
                          </div>
                          {isActive && (
                            <div className="absolute top-2 right-2 text-primary">
                              <Check className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <Label className="text-base">Theme Color</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {themeColorOptions.map((color) => (
                      <div
                        key={color.value}
                        className={`
                          relative border rounded-lg p-3 cursor-pointer transition-all flex flex-col items-center gap-2
                          ${themeColor === color.value 
                            ? 'border-primary bg-primary/5 ring-2 ring-primary ring-offset-2' 
                            : 'hover:border-muted-foreground/30 hover:bg-muted/50'
                          }
                        `}
                        onClick={() => handleThemeColorChange(color.value)}
                      >
                        <div 
                          className="w-6 h-6 rounded-full border" 
                          style={{ backgroundColor: color.color }}
                        />
                        <span className="text-sm font-medium">{color.label}</span>
                        {themeColor === color.value && (
                          <div className="absolute top-1 right-1 text-primary">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <Label className="text-base">Font Size</Label>
                  <div className="flex flex-wrap gap-3">
                    {['Small', 'Medium', 'Large'].map((size) => (
                      <div
                        key={size}
                        className={`
                          border rounded-lg px-4 py-2 cursor-pointer transition-all
                          ${size === 'Medium' 
                            ? 'border-primary bg-primary/10' 
                            : 'hover:border-muted-foreground/30 hover:bg-muted/50'
                          }
                        `}
                      >
                        <span className="font-medium">{size}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="gap-2 w-full sm:w-auto" 
                  onClick={() => handleSaveSettings('theme')}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-foreground/30 border-t-foreground animate-spin"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Theme Settings
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 
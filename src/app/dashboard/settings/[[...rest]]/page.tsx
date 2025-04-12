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
import { toast } from 'react-hot-toast';

// Theme color options
const themeColorOptions = [
  { value: 'zinc', label: 'Zinc', color: '#71717a' },
  { value: 'slate', label: 'Slate', color: '#64748b' },
  { value: 'stone', label: 'Stone', color: '#78716c' },
  { value: 'gray', label: 'Gray', color: '#6b7280' },
  { value: 'neutral', label: 'Neutral', color: '#737373' },
  { value: 'red', label: 'Red', color: '#ef4444' },
  { value: 'rose', label: 'Rose', color: '#f43f5e' },
  { value: 'blue', label: 'Blue', color: '#3b82f6' },
  { value: 'green', label: 'Green', color: '#22c55e' },
  { value: 'purple', label: 'Purple', color: '#a855f7' },
];

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const { user, isLoaded } = useUser();
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [themeColor, setThemeColor] = useState('zinc');
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // Load saved color theme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedColor = localStorage.getItem('theme-color') || 'zinc';
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
    
    // Set CSS variable for the theme color
    const selectedColor = themeColorOptions.find(opt => opt.value === color)?.color || '#71717a';
    document.documentElement.style.setProperty('--theme-primary', selectedColor);
    
    // Apply to body and dashboard layout
    const dashboard = document.querySelector('.dashboard-layout');
    if (dashboard) {
      dashboard.classList.add(`theme-${color}`);
    }
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
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full gap-1 overflow-x-auto">
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
          <TabsTrigger value="language" className="flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap">
            <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Language</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Clerk User Profile</CardTitle>
                <CardDescription>
                  Update your profile information and upload a profile picture
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="w-full max-w-md mx-auto border rounded-lg overflow-hidden">
                  {isLoaded && (
                    <UserProfile 
                      appearance={{
                        elements: {
                          rootBox: "mx-auto w-full",
                          card: "shadow-none p-0 border-0",
                          navbar: "hidden",
                          pageScrollBox: "p-0",
                        }
                      }}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isLoaded && user && (
                  <>
                    <div className="flex items-center space-x-4 mb-6 flex-col sm:flex-row">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-muted flex items-center justify-center mb-4 sm:mb-0">
                        {user.imageUrl ? (
                          <img 
                            src={user.imageUrl} 
                            alt={user.fullName || 'User'} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <UserCircle className="w-12 h-12 text-muted-foreground" />
                        )}
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="font-medium text-xl">{user.fullName || 'User'}</h3>
                        <p className="text-sm text-muted-foreground">{user.primaryEmailAddress?.emailAddress}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Member since {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        value={userForm.firstName} 
                        onChange={handleUserFormChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        value={userForm.lastName} 
                        onChange={handleUserFormChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        value={userForm.email} 
                        disabled
                      />
                      <p className="text-xs text-muted-foreground">Email changes are managed through Clerk.dev</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm text-muted-foreground">User ID</Label>
                      <div className="p-3 border rounded-md bg-background font-mono text-xs">
                        {user.id}
                      </div>
                    </div>

                    <Button 
                      className="gap-2 mt-4" 
                      onClick={() => handleSaveSettings('userinfo')}
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
                          Save Changes
                        </>
                      )}
                    </Button>
                  </>
                )}

                {!isLoaded && (
                  <div className="flex items-center justify-center h-40">
                    <div className="animate-pulse w-8 h-8 rounded-full bg-muted"></div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="security">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        
        <TabsContent value="language">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-xl">Language and Region</CardTitle>
                <CardDescription>Set your preferred language and region</CardDescription>
              </div>
              <Globe className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <select 
                  id="language" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="ja">Japanese</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select 
                  id="timezone" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="utc">UTC (GMT+0)</option>
                  <option value="est">Eastern Time (GMT-5)</option>
                  <option value="pst">Pacific Time (GMT-8)</option>
                  <option value="ist">India Standard Time (GMT+5:30)</option>
                  <option value="jst">Japan Standard Time (GMT+9)</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateFormat">Date Format</Label>
                <select 
                  id="dateFormat" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="gap-2" 
                onClick={() => handleSaveSettings('language')}
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
                    Save Settings
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 
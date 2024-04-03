'use client'
import { useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="relative space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" passHref>
                <span className="ml-2 text-sm underline">Forgot your password?</span>
              </Link>
            </div>
            <Input id="password" required type={showPassword ? "text" : "password"} />
            <Button className="absolute bottom-1 right-1 h-7 w-7" size="icon" variant="ghost" onClick={togglePasswordVisibility}>
              {showPassword ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
              <span className="sr-only">Toggle password visibility</span>
            </Button>
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="ghost">
            Create an Account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7ZM6 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM12 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM18 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" />
      <line x1="3" y1="3" x2="21" y2="21" />
    </svg>
  );
}


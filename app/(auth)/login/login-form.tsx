import Link from "next/link";
import Image from "next/image";
import { GitFork, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function LoginForm() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-10">
      <Card className="w-full max-w-[470px] rounded-2xl border border-border bg-card shadow-card">
        <CardContent className="px-9">
          {/* ---------------------------------------------------------------- */}
          {/* Branding */}
          {/* ---------------------------------------------------------------- */}

          <div className="mb-12 flex flex-col items-center">
            <Image
              src="/logo/genesis-logo.png"
              alt="Genesis"
              width={56}
              height={56}
              priority
            />

            <h1 className="mt-4 text-4xl font-bold tracking-tight uppercase">
              Genesis
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              AI Engineering Workspace
            </p>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Heading */}
          {/* ---------------------------------------------------------------- */}

          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h2>

            <p className="mt-2 text-[15px] leading-6 text-muted-foreground">
              Sign in to continue to your workspace.
            </p>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Form */}
          {/* ---------------------------------------------------------------- */}

          <form>
            {/* Email */}

            <div className="mb-5">
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                className="h-10 rounded-md px-5"
              />
            </div>

            {/* Password */}

            <div className="mb-6">
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="h-10 rounded-md px-5"
                />

                <Eye
                  className="absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
                />
              </div>
            </div>

            {/* Remember */}

            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Checkbox id="remember" />

                <Label
                  htmlFor="remember"
                  className="cursor-pointer text-sm font-normal"
                >
                  Remember me
                </Label>
              </div>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary transition-colors hover:opacity-80"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign In */}

            <Button className="h-10 w-full rounded-md text-sm font-semibold">
              Sign In
            </Button>

            {/* Divider */}

            <div className="my-6 flex items-center gap-4">
              <Separator className="flex-1" />

              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                OR
              </span>

              <Separator className="flex-1" />
            </div>

            {/* GitHub */}

            <Button
              variant="outline"
              className="mt-2 h-10 w-full rounded-md text-sm font-medium"
            >
              <GitFork className="mr-2 h-4 w-4" />
              Continue with GitHub
            </Button>

            {/* Footer */}

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
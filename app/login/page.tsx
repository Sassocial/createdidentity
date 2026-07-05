import AppHeader from "@/components/layout/AppHeader";
import AuthCard from "@/components/AuthCard";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#E6DDD3] flex items-center justify-center p-6">

      <div className="w-full max-w-md">

        <AppHeader
          title="Welcome Back"
          subtitle="Sign in to Created"
        />

        <AuthCard
          title="Login"
          subtitle="Continue where you left off."
        >

          <div className="space-y-4">

            <Input placeholder="Email address" />

            <Input
              placeholder="Password"
              type="password"
            />

            <Button>

              Sign In

            </Button>

          </div>

        </AuthCard>

      </div>

    </main>
  );
}
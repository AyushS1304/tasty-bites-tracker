import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSupabase } from "@/context/SupabaseContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, UserPlus, LogIn, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const { user, signIn, signUp } = useSupabase();

  // Redirect if already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/");
      }
    };
    
    checkAuth();
  }, [navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError("");
    
    try {
      const { error } = await signIn(email, password);
      
      if (error) throw error;
      
      toast({
        title: "Signed in successfully",
        description: "Welcome back to TastyBites!",
      });
      
      // Redirect to home page
      navigate("/");
    } catch (error) {
      setAuthError(error.message);
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAuthError("");
    
    if (password !== confirmPassword) {
      setAuthError("Passwords do not match");
      setIsLoading(false);
      return;
    }
    
    try {
      const { error } = await signUp(email, password);
      
      if (error) throw error;
      
      toast({
        title: "Registration successful",
        description: "Please check your email to verify your account.",
      });
      
      // Switch to login tab
      setActiveTab("login");
    } catch (error) {
      setAuthError(error.message);
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{activeTab === "login" ? "Sign In" : "Register"} | Tasty Bites</title>
        <meta name="description" content="Sign in or create a new account on Tasty Bites" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="w-full max-w-md">
            <Tabs 
              defaultValue="login" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login" className="text-base">Sign In</TabsTrigger>
                <TabsTrigger value="register" className="text-base">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Welcome Back</CardTitle>
                    <CardDescription>
                      Sign in to your account to continue
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSignIn}>
                    <CardContent className="space-y-4">
                      {authError && (
                        <Alert variant="destructive" className="text-sm">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{authError}</AlertDescription>
                        </Alert>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            placeholder="your.email@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <button
                            type="button"
                            onClick={() => toast({
                              title: "Password Reset",
                              description: "Please contact support for password reset.",
                            })}
                            className="text-xs text-orange-500 hover:underline"
                          >
                            Forgot password?
                          </button>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                          <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          "Signing in..."
                        ) : (
                          <>
                            <LogIn className="mr-2 h-4 w-4" /> Sign In
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
              
              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Create an Account</CardTitle>
                    <CardDescription>
                      Join Tasty Bites to start ordering delicious food
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSignUp}>
                    <CardContent className="space-y-4">
                      {authError && (
                        <Alert variant="destructive" className="text-sm">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{authError}</AlertDescription>
                        </Alert>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                          <Input
                            id="register-email"
                            placeholder="your.email@example.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                          <Input
                            id="register-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10"
                            required
                            minLength={6}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                          <Input
                            id="confirm-password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          "Creating account..."
                        ) : (
                          <>
                            <UserPlus className="mr-2 h-4 w-4" /> Create Account
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 text-center text-sm text-gray-500">
              By signing up, you agree to our{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Privacy Policy
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;

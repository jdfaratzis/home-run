import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="container mx-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Welcome to Home Run</CardTitle>
            <CardDescription>Your new project is ready to go!</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Get Started</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

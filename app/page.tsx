import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="hidden w-[300px] border-r lg:block" />
      <main className="flex-1 p-8">
        <div className="container mx-auto">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Welcome Home, Joe</CardTitle>
              <CardDescription>Your new project is ready to go!</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Get Started</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

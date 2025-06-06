import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Everything you need to manage your daily tasks
          </h1>
          <Button size="lg" asChild className="mt-8">
            <Link to="/manage-todos">Get Started</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Organize Tasks</CardTitle>
              <CardDescription>
                Keep track of all your tasks with our intuitive organization
                system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Categorize tasks by priority, difficulty, and status to stay on
                top of your work.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Track Progress</CardTitle>
              <CardDescription>
                Monitor your progress with detailed task analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Visualize your productivity and identify areas for improvement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stay Focused</CardTitle>
              <CardDescription>
                Focus on what matters most with priority-based task management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Never miss important deadlines with our smart notification
                system.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

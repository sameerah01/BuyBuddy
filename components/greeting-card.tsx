import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface GreetingCardProps {
  message: string;
}

export function GreetingCard({ message }: GreetingCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-lg font-semibold">Server Response</CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{message}</p>
      </CardContent>
    </Card>
  );
}
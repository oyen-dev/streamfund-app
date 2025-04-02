import StreamerBanner from "@/components/streamer/banner";
import StreamerHeaderProfile from "@/components/streamer/header";
import StreamerTabs from "@/components/streamer/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function StreamerSupportPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-5 space-y-6 text-white bg-black">
      <StreamerBanner />
      <Card className="w-full max-w-5xl border bg-background-base border-neutral-800 rounded-2xl">
        <CardHeader className="flex flex-col items-center justify-center w-full space-y-5 md:flex-row md:space-y-0 md:space-x-5">
          <StreamerHeaderProfile />
        </CardHeader>

        <Separator className="w-1 bg-neutral-800" />

        <CardContent className="flex flex-col items-center justify-center w-full space-y-5 md:flex-row md:space-y-0 md:space-x-5">
          <StreamerTabs />
        </CardContent>

        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

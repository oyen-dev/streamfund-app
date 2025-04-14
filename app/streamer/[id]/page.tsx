import StreamerBanner from "@/components/streamer/banner";
import StreamerHeaderProfile from "@/components/streamer/header";
import StreamerTabs from "@/components/streamer/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function StreamerSupportPage({
  params,
}: ServerSidePageProps) {
  // @ts-nocheck Next.js 15 requires params to be a Promise
  const { id } = await params;
  let streamer: APIGetStreamerResponse | undefined = undefined;
  streamer = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/proxy?target=/api/v1/streamers/${id}`,
    {
      next: { revalidate: 60 },
      cache: "force-cache",
    }
  ).then((res) => res.json().then((data) => data));

  if (!streamer || !streamer.data) {
    return (
      <div className="flex items-center justify-center min-h-screen p-5 text-white">
        <p>Streamer not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-5 space-y-6 text-white">
      <StreamerBanner />
      <Card className="w-full max-w-2xl border bg-background-base border-neutral-800 rounded-2xl">
        <CardHeader>
          <StreamerHeaderProfile streamer={streamer.data.streamer} />
        </CardHeader>
        <Separator className="w-1 bg-neutral-800" />
        <CardContent className="flex flex-col items-center justify-center w-full space-y-5 md:flex-row md:space-y-0 md:space-x-5">
          <StreamerTabs streamer={streamer.data.streamer} />
        </CardContent>
      </Card>
    </div>
  );
}

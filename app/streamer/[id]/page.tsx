"use client";

import StreamerBanner from "@/components/streamer/banner";
import StreamerHeaderProfile from "@/components/streamer/header";
import StreamerTabs from "@/components/streamer/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import StreamerNotFound from "./_components/not-found";
import { useQuery } from "@tanstack/react-query";
import { fetchProxy } from "@/lib/utils";
import { Fragment } from "react";

const StreamerSupportPage = () => {
  const pathname = usePathname();
  const streamerId = pathname.split("/").pop();

  const { data: streamer, isLoading } = useQuery<APIGetStreamerResponse>({
    queryKey: ["streamer", streamerId],
    queryFn: async () =>
      fetchProxy({
        url: `/api/v1/users/${streamerId}`,
        method: "GET",
      }),
  });

  return (
    <div className="flex flex-col items-center min-h-screen p-5 space-y-6 text-white pt-[150px]">
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <p className="text-lg">Loading...</p>
        </div>
      ) : (
        streamer !== undefined &&
        streamer !== null &&
        (streamer.statusCode === 404 ? (
          <StreamerNotFound />
        ) : (
          <Fragment>
            <StreamerBanner />
            <Card className="w-full max-w-2xl border bg-background-base border-neutral-800 rounded-2xl">
              <CardHeader>
                <StreamerHeaderProfile streamer={streamer.data.user} />
              </CardHeader>
              <Separator className="w-1 bg-neutral-800" />
              <CardContent className="flex flex-col items-center justify-center w-full space-y-5 md:flex-row md:space-y-0 md:space-x-5">
                <StreamerTabs streamer={streamer.data.user} />
              </CardContent>
            </Card>
          </Fragment>
        ))
      )}
    </div>
  );
};

export default StreamerSupportPage;

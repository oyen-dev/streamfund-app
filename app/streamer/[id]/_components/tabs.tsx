"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BellRingingIcon,
  AirplayIcon,
  WaveformIcon,
} from "@phosphor-icons/react/dist/ssr";
import AlertForm from "./alert/alert";

interface StreamerTabsProps {
  streamer: Streamer;
}

const StreamerTabs = ({ streamer }: StreamerTabsProps) => {
  const [activeTab, setActiveTab] = useState<"alert" | "media" | "soundboard">(
    "alert"
  );
  return (
    <Tabs defaultValue={activeTab} className="w-full h-full">
      <div className="py-4">
        <TabsList className="flex flex-row items-center justify-start w-full h-full gap-4 overflow-x-auto bg-transparent">
          <TabsTrigger
            value="alert"
            onClick={() => setActiveTab("alert")}
            className="data-[state=active]:bg-violet-500/10 data-[state=active]:text-violet-500 data-[state=active]:border-violet-500 rounded-2xl p-3 border border-neutral-800 text-neutral-20 cursor-pointer flex-shrink-0"
          >
            <BellRingingIcon
              className="w-6 h-6 mr-2"
              weight={activeTab === "alert" ? "fill" : "regular"}
            />
            Alert
          </TabsTrigger>

          <TabsTrigger
            value="media"
            onClick={() => setActiveTab("media")}
            className="data-[state=active]:bg-violet-500/10 data-[state=active]:text-violet-500 data-[state=active]:border-violet-500 rounded-2xl p-3 border border-neutral-800 text-neutral-20 cursor-pointer flex-shrink-0"
          >
            <AirplayIcon
              className="w-6 h-6 mr-2"
              weight={activeTab === "media" ? "fill" : "regular"}
            />
            Media
          </TabsTrigger>

          <TabsTrigger
            value="soundboard"
            onClick={() => setActiveTab("soundboard")}
            className="data-[state=active]:bg-violet-500/10 data-[state=active]:text-violet-500 data-[state=active]:border-violet-500 rounded-2xl p-3 border border-neutral-800 text-neutral-20 cursor-pointer flex-shrink-0"
          >
            <WaveformIcon
              className="w-6 h-6 mr-2"
              weight={activeTab === "soundboard" ? "bold" : "regular"}
            />
            Soundboard
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="alert" className="p-5 rounded-2xl border-neutral-800">
        <AlertForm streamer={streamer} />
      </TabsContent>

      <TabsContent value="media" className="px-6 mt-4">
        <div className="flex items-center justify-center h-20 text-gray-500">
          Coming soon...
        </div>
      </TabsContent>

      <TabsContent value="soundboard" className="px-6 mt-4">
        <div className="flex items-center justify-center h-20 text-gray-500">
          Coming soon...
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default StreamerTabs;

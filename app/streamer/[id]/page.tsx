"use client";

import { useState } from "react";
import {
  Bell,
  ChevronRight,
  MessageSquare,
  AudioWaveformIcon as SoundWave,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import StreamerProfile from "@/components/streamer/profile";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function StreamFundProfile() {
  const [amount, setAmount] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleQuickAmount = (value: string) => {
    setAmount(value);
  };

  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
      <div className="flex flex-col items-center flex-1 px-4 py-6">
        <StreamerProfile />
        <div className="w-full max-w-3xl mx-auto">
          {/* Tabs */}
          <Tabs defaultValue="alert" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto bg-transparent">
              <TabsTrigger
                value="alert"
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-purple-300 rounded-lg"
              >
                <Bell className="w-4 h-4 mr-2" />
                Alert
              </TabsTrigger>
              <TabsTrigger
                value="media"
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-purple-300 rounded-lg"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Media
              </TabsTrigger>
              <TabsTrigger
                value="soundboard"
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-purple-300 rounded-lg"
              >
                <SoundWave className="w-4 h-4 mr-2" />
                Soundboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="alert" className="mt-4">
              <Card className="text-white border-gray-800 bg-background-base">
                <CardContent className="p-6">
                  <div className="max-w-xl mx-auto space-y-6">
                    <div className="flex w-full h-full bg-[url('/images/streamfund.jpg')] bg-cover bg-center pt-[25%]">
                      <div className="relative flex flex-col items-center justify-center w-full h-full max-w-2xl p-5 space-y-5 rounded-t-3xl bg-background-grey">
                        <div className="absolute flex w-32 h-32 border-4 rounded-full -top-[25%] border-violet-500">
                          <Image
                            src="/images/streamfund.jpg"
                            alt="Streamer"
                            className="object-cover rounded-full"
                            width={300}
                            height={300}
                          />
                        </div>
                        <h4 className="mt-[25%] text-neutral-20 heading-4-mobile md:heading-4-tablet lg:heading-4-desktop">
                          johnlennon
                        </h4>
                        <p className="text-center text-neutral-90 text-medium-medium md:text-medium-large lg:text-large-int-regular">
                          If you want a collaborator who can make even a cat
                          video feel like a blockbuster, Alex is your person!
                        </p>

                        <div className="grid grid-flow-col gap-2 auto-cols-auto">
                          <Link
                            href="/streamer/1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
                          >
                            <InstagramLogo className="w-5 h-5 cursor-pointer text-neutral-80 hover:text-violet-500" />
                          </Link>
                          <Link
                            href="/streamer/1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
                          >
                            <YoutubeLogo className="w-5 h-5 cursor-pointer text-neutral-80 hover:text-violet-500" />
                          </Link>
                          <Link
                            href="/streamer/1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
                          >
                            <FacebookLogo className="w-5 h-5 cursor-pointer text-neutral-80 hover:text-violet-500" />
                          </Link>
                          <Link
                            href="/streamer/1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 border rounded-full border-neutral-600 hover:border-violet-500"
                          >
                            <TwitterLogo className="w-5 h-5 cursor-pointer text-neutral-80 hover:text-violet-500" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="amount"
                        className="text-sm font-medium text-gray-300"
                      >
                        You send*
                      </Label>
                      <div className="relative mt-1">
                        <Input
                          id="amount"
                          placeholder="Wallet balance"
                          className="pr-20 text-gray-300 bg-gray-800 border-gray-700"
                          value={amount ? `$${amount}` : ""}
                          onChange={(e) =>
                            setAmount(e.target.value.replace(/\$/, ""))
                          }
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                          <Select defaultValue="usdt">
                            <SelectTrigger className="w-[90px] h-full border-0 bg-transparent focus:ring-0">
                              <SelectValue>
                                <div className="flex items-center">
                                  <div className="flex items-center justify-center w-5 h-5 mr-1 text-xs font-bold text-white bg-teal-500 rounded-full">
                                    T
                                  </div>
                                  USDT
                                </div>
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usdt">
                                <div className="flex items-center">
                                  <div className="flex items-center justify-center w-5 h-5 mr-1 text-xs font-bold text-white bg-teal-500 rounded-full">
                                    T
                                  </div>
                                  USDT
                                </div>
                              </SelectItem>
                              <SelectItem value="btc">BTC</SelectItem>
                              <SelectItem value="eth">ETH</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">≈ -- IDR</p>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-300">
                        Quick amount
                      </Label>
                      <div className="grid grid-cols-4 gap-2 mt-1">
                        <Button
                          variant="outline"
                          className="text-purple-300 bg-transparent border-gray-700 hover:bg-gray-800"
                          onClick={() => handleQuickAmount("1")}
                        >
                          $1
                        </Button>
                        <Button
                          variant="outline"
                          className="text-purple-300 bg-transparent border-gray-700 hover:bg-gray-800"
                          onClick={() => handleQuickAmount("5")}
                        >
                          $5
                        </Button>
                        <Button
                          variant="outline"
                          className="text-purple-300 bg-transparent border-gray-700 hover:bg-gray-800"
                          onClick={() => handleQuickAmount("10")}
                        >
                          $10
                        </Button>
                        <Button
                          variant="outline"
                          className="text-purple-300 bg-transparent border-gray-700 hover:bg-gray-800"
                          onClick={() => handleQuickAmount("15")}
                        >
                          $15
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="from"
                        className="text-sm font-medium text-gray-300"
                      >
                        From*
                      </Label>
                      <Input
                        id="from"
                        placeholder="Satoshi Nakamoto"
                        className="mt-1 text-gray-300 bg-gray-800 border-gray-700"
                      />
                      <div className="flex items-center mt-2 space-x-2">
                        <Checkbox
                          id="anonymous"
                          checked={isAnonymous}
                          onCheckedChange={(checked) =>
                            setIsAnonymous(checked as boolean)
                          }
                        />
                        <label
                          htmlFor="anonymous"
                          className="text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Anonymous
                        </label>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-300"
                      >
                        Pesan*
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Dukung streamer favoritmu dengan memberikan donasi! Setiap kontribusi sangat berarti dan membantu mereka terus berkarya."
                        className="mt-1 bg-gray-800 border-gray-700 text-gray-300 min-h-[100px]"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300">
                          Pay with
                        </span>
                        <span className="text-sm text-purple-400 cursor-pointer">
                          Other Payment
                        </span>
                      </div>

                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="justify-between w-full text-white bg-gray-800 border-gray-700 hover:bg-gray-700"
                        >
                          <div className="flex items-center">
                            <div className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            Connect wallet
                          </div>
                          <ChevronRight className="w-4 h-4" />
                        </Button>

                        <Button
                          variant="outline"
                          className="justify-between w-full text-white bg-gray-800 border-gray-700 hover:bg-gray-700"
                        >
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-5 h-5 mr-2 text-xs font-bold bg-purple-600 rounded-full">
                              L
                            </div>
                            LiFi
                          </div>
                          <ChevronRight className="w-4 h-4" />
                        </Button>

                        <Button
                          variant="outline"
                          className="justify-between w-full text-white bg-gray-800 border-gray-700 hover:bg-gray-700"
                        >
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-5 h-5 mr-2 text-xs font-bold bg-yellow-500 rounded-full">
                              B
                            </div>
                            Binance Pay
                          </div>
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-3 bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Total Amount:</span>
                        <span className="text-lg font-bold">
                          ${amount || "--"}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4 p-6 pt-0">
                  <p className="w-full max-w-xl mx-auto text-xs text-gray-500">
                    By using our services, you agree to our terms and
                    conditions. Please read them carefully before making any
                    transactions.
                  </p>
                  <Button className="w-full max-w-xl mx-auto text-purple-800 bg-purple-100 hover:bg-purple-200">
                    Approve
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="media">
              <div className="flex items-center justify-center h-20 text-gray-500">
                Media content will appear here
              </div>
            </TabsContent>

            <TabsContent value="soundboard">
              <div className="flex items-center justify-center h-20 text-gray-500">
                Soundboard content will appear here
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

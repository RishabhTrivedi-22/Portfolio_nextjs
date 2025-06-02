"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItem } from "@/components/ToolBoxItem";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React Js",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GitIcon,
  },
];
const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "3%",
  },
  {
    title: "Sketching",
    emoji: "✍🏽",
    left: "55%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "30%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏻‍♂️",
    left: "10%",
    top: "30%",
  },
  {
    title: "Travel",
    emoji: "✈️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Cooking",
    emoji: "🧑🏽‍🍳",
    left: "5%",
    top: "65%",
  },
  {
    title: "Movies",
    emoji: "📽️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section id="About" className="py-16 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My ToolBox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences"
              />
              <ToolBoxItem
                tool={toolBoxItems}
                toolWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItem
                tool={toolBoxItems}
                className="mt-6"
                toolWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="flex flex-col md:col-span-3">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-[#FF0050] to-[#8A2BE2] rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="relative md:col-span-2 h-[320px] p-0">
              <Image
                src={mapImage}
                alt="map"
                className="w-full h-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 translate-x-1/2  size-20 rounded-full after:content-[''] after:absolute after:outline after:outline-2 after:inset-0 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF0050] to-[#8A2BE2] -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF0050] to-[#8A2BE2] -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="memoji-smiling"
                  className="size-20 "
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

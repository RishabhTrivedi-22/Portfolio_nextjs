import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItem } from "@/components/ToolBoxItem";
// import css from "styled-jsx/css";

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
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">My Reads</h3>
              </div>
              <p className="text-white/60 text-sm mt-2">
                Explore the books shaping my perspective
              </p>
            </div>
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="p-0">
            <CardHeader
              title="My ToolBox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences"
              className="px-6 pt-6"
            />
            <ToolBoxItem tool={toolBoxItems} className="mt-6" />
            <ToolBoxItem 
              tool={toolBoxItems} 
              className="mt-6"
              toolWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="p-0 flex flex-col">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div 
                  key={hobby.title} 
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
  
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-0 relative">
            <Image src={mapImage} alt="map" className="w-full h-full object-cover object-left-top" />
            <div className="absolute top-1/2 left-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:outline after:outline-2 after:inset-0 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <Image src={smileMemoji} alt="memoji-smiling" className="size-20 " />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

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
  },
  {
    title: "Sketching",
    emoji: "✍🏽",
  },
  {
    title: "Fitness",
    emoji: "🏋🏻‍♂️",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Travel",
    emoji: "✈️",
  },
  {
    title: "Cooking",
    emoji: "🧑🏽‍🍳",
  },
  {
    title: "Movies",
    emoji: "📽️",
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
        <div className="mt-20">
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
          <Card>
            <CardHeader
              title="My ToolBox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences"
            />
            <div>
              {toolBoxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <div>
                    <span>{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="memoji-smiling" />
          </Card>
        </div>
      </div>
    </section>
  );
};

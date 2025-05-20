import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div>
          <Card>
            <div>
              <StarIcon />
              <h3>My Reads</h3>
              <p>Explore the books shaping my perspective</p>
            </div>
            <Image src={bookImage} alt="Book cover" />
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>My ToolBox</h3>
              <p>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
            </div>
            <Image src={bookImage} alt="Book cover" />
          </Card>
        </div>
      </div>
    </section>
  );
};

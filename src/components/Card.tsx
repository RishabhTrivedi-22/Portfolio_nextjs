import { twMerge } from "tailwind-merge";
import GrainImg from '@/assets/images/grain.jpg'
import { PropsWithChildren } from "react";

export const Card = ({className, children}: PropsWithChildren<{
  className?: string,
}>) => {
  return (
    <div
      className={twMerge("bg-gray-800 rounded-3xl z-0 overflow-hidden relative after:absolute after:inset-0 after:content-['']  after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none h-[320px]", className)}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${GrainImg.src})`,
        }}
      ></div>
      {children}
    </div>
  );

};

import React from "react";
import Card from "./card";

const DescriptionCards = () => {
  const descriptions = [
    {
      Moto: "Completely Free – No Hidden Costs!",
      description:
        "Enjoy unlimited notes without worrying about subscriptions or fees. Our notepad is 100% free, giving you the best writing experience at no cost.",
      purpose: [{ icon: "/icons/dollar.svg", text: "For Free" }],
      cardName: [{ icon: "/icons/bag.png", text: "How Much?" }],
    },
    {
      Moto: "Simple, Fast, and Reliable",
      description:
        "Effortlessly jot down notes, ideas, and to-do lists. Designed for speed and ease, our notepad ensures a distraction-free writing experience.",
      purpose: [{ icon: "/icons/note.png", text: "Take Note" }],
      cardName: [{ icon: "/icons/point.png", text: "ABOUT" }],
    },
    {
      Moto: "Efficient, Secure, and Always Available",
      description:
        "Lightning-fast note-taking Auto-save ensures you never lose your thoughts Access anytime, anywhere on any device Privacy-first – your notes stay yours",
      purpose: [{ icon: "/icons/star.png", text: "Simple Safe" }],
      cardName: [{ icon: "/icons/rocket.png", text: "How Good Is It?" }],
    },
  ];
  return (
    <div className="flex relative space-x-20 w-[85%] h-full mt-5 justify-center">
      <div className="absolute left-0">
        <Card data={descriptions[0]}/>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
        <Card data={descriptions[1]}/>
      </div>
      <div className="absolute right-0">
        <Card data={descriptions[2]}/>
      </div>
    </div>
  );
};

export default DescriptionCards;

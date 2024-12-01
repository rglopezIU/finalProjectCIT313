import React from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Accordion from "../components/Accordion";

const carouselData = [
  { image: "./images/marathon1.webp" },
  { image: "./images/marathon2.jpg" },
  { image: "./images/marathon3.jpg" },
  { image: "./images/marathon4.jpeg" },
  { image: "./images/marathon5.webp" },
];

const cards = [
  {
    image: "./images/230pace.webp",
    imageAlt: "Marathon goal of 2:30:00",
    title: "Marathon Goal: 2:30:00",
    description: "Train hard and aim to finish in 2 hours and 30 minutes!",
    link: "https://youtu.be/iEHbs03DNZ4?si=zL4nzWX02K1WsBVa&t=13",
    linkText: "Check out this video!",
  },
  {
    image: "./images/35pace.webp",
    imageAlt: "Marathon goal of 3:05:00",
    title: "Marathon Goal: 3:05:00",
    description: "Focus on pacing and endurance for a 3-hour marathon finish.",
    link: "https://youtu.be/2Z63Yj2WGIU?si=yg1gemd79tBpryze",
    linkText: "Check out this video!",
  },
  {
    image: "./images/45pace.webp",
    imageAlt: "Marathon goal of 4:05:00",
    title: "Marathon Goal: 4:05:00",
    description: "Aim for consistency and stamina to finish in 4 hours.",
    link: "https://youtu.be/xhTidr0NOc8?si=OY5jcVPnMvHJBVqD",
    linkText: "Check out this video!",
  },
];

const accordionData = [
  {
    title: "What is the best way to train for a marathon?",
    content:
      "Training for a marathon requires a structured plan that includes long runs, interval training, and rest days. Following a progressive schedule will help build stamina and prevent injury.",
  },
  {
    title: "How should I stay hydrated during a marathon?",
    content:
      "Staying hydrated is essential. It's recommended to drink water or sports drinks at regular intervals during the race, especially on warmer days.",
  },
  {
    title: "What should I eat before the marathon?",
    content:
      "A meal high in carbohydrates the night before and a light breakfast on race day can provide the necessary energy. Avoid high-fiber and fatty foods to prevent discomfort.",
  },
  {
    title: "How can I avoid injuries while training?",
    content:
      "Injury prevention includes proper warm-ups, strength training, and listening to your body. Rest days are crucial for recovery, and stretching helps maintain flexibility.",
  },
  {
    title: "What should I wear on race day?",
    content:
      "Wear comfortable, moisture-wicking clothing and shoes that you've trained in. Avoid new gear on race day to prevent blisters and discomfort.",
  },
];

function Home() {
  return (
    <div>
      <section className="md:w-3/3">
        <Carousel items={carouselData} />
      </section>
      <br />
      <div className="flex flex-wrap gap-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <br />
      <section className="md:w-full">
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        {accordionData.map((item, index) => (
          <Accordion key={index} title={item.title} content={item.content} />
        ))}
      </section>
    </div>
  );
}

export default Home;

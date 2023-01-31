import Server from "../../icons/Server";
import Users from "../../icons/Users";
import Cart from "../../icons/Cart";
import Globe from "../../icons/Globe";

import { useState } from "react";
export default function useSocialProofContent() {
  const [store, setStore] = useState({
    caption: "Trusted Worldwide",
    title: "Trusted by over 600 million users and 10,000 teams",
    description:
      "Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.",
    links: [
      { text: "Explore Legality Guide", url: "#" },
      { text: "Visit the Trust Center", url: "#" },
    ],
    stats: [
      [
        {
          icon: (
            <Server classNames="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" />
          ),
          title: "99.99% uptime",
          description: "for Flowbite, with zero maintenance downtime",
        },
        {
          icon: (
            <Users classNames="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" />
          ),
          title: "600M+ Users",
          description: "trusted by over 600 milion users around the world",
        },
      ],
      [
        {
          icon: (
            <Globe classNames="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" />
          ),
          title: "100+ countries",
          description: "have used Flowbite to create functional websites",
        },
        {
          icon: (
            <Cart classNames="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12" />
          ),
          title: "Millions",
          description: "of transactions processed every day",
        },
      ],
    ],
  });
  return [store, setStore];
}

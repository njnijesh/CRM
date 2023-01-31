import { useState } from "react";

import Github from "../../icons/Github";
import Twitter from "../../icons/Twitter";
import Dribbble from "../../icons/Dribbble";
import Facebook from "../../icons/Facebook";
const useFooterContent = () => {
  const [store, setStore] = useState({
    copyright: "© 2022 Flowbite, Inc. All rights reserved.",
    socials: [
      { icon: <Github />, url: "#" },
      { icon: <Twitter />, url: "#" },
      { icon: <Dribbble />, url: "#" },
      { icon: <Facebook />, url: "#" },
    ],

    links: [
      {
        title: "Company",
        links: [
          { title: "About", url: "#" },
          { title: "Premium", url: "#" },
          { title: "Blog", url: "#" },
          { title: "Affiliate Program", url: "#" },
          { title: "Get Coupon", url: "#" },
        ],
      },
      {
        title: "Help And Support",
        links: [
          { title: "Contact Us", url: "#" },
          { title: "Knowledge Center", url: "#" },
          { title: "Premium Support", url: "#" },
          { title: "Sponserships", url: "#" },
        ],
      },
      {
        title: "Learning",
        links: [
          { title: "Learn Hub", url: "#" },
          { title: "Manuals", url: "#" },
          { title: "Tutorials", url: "#" },
          { title: "Communities", url: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { title: "Third Party Tools", url: "#" },
          { title: "Illustrations", url: "#" },
          { title: "Themesberg", url: "#" },
          { title: "Blue Host", url: "#" },
          { title: "Stock Photos", url: "#" },
        ],
      },
    ],
  });
  const setContent = (data) => {
    setStore(data);
  };
  return [store, setContent];
};
export default useFooterContent;

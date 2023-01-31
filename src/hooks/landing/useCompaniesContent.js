import Google from "../../icons/Google";
import Airbnb from "../../icons/Airbnb";
import Mailchimp from "../../icons/Mailchimp";
import Microsoft from "../../icons/Microsoft";
import Spotify from "../../icons/Spotify";
import Uber from "../../icons/Uber";

import { useState } from "react";
export default function useCompaniesContent() {
  const [store, setStore] = useState([
    {
      icon: <Google classNames="h-9 hover:text-gray-900" />,
      url: "#",
    },
    {
      icon: <Microsoft classNames="h-9 hover:text-gray-900" />,
      url: "#",
    },
    {
      icon: <Spotify classNames="h-9 hover:text-gray-900" />,
      url: "#",
    },
    {
      icon: <Mailchimp classNames="h-9 hover:text-gray-900" />,
      url: "#",
    },
    {
      icon: <Airbnb classNames="h-9 hover:text-gray-900" />,
      url: "#",
    },
    {
      icon: <Uber classNames="h-9 hover:text-gray-900" />,
      url: "#",
    },
  ]);
  return [store, setStore];
}

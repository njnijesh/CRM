import Google from "../../icons/Google";
import Airbnb from "../../icons/Airbnb";
import Mailchimp from "../../icons/Mailchimp";
import Microsoft from "../../icons/Microsoft";
import Spotify from "../../icons/Spotify";
import Uber from "../../icons/Uber";

import { useState } from "react";
export default function useCompaniesContent() {
  const [store, setStore] = useState([
    <Google />,
    <Microsoft />,
    <Spotify />,
    <Mailchimp />,
    <Airbnb />,
    <Uber />,
  ]);
  return [store, setStore];
}

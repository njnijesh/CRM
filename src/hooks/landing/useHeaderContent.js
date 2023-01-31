import { useState } from "react";
import Logo from "../../icons/Logo";

export default function useHeaderContent() {
  const [store, setStore] = useState({
    logo: <Logo />,
    companyName: "Landwind",
    links: [
      { name: "Company", link: "#" },
      { name: "Marketplace", link: "#" },
      { name: "Features", link: "#" },
      { name: "Team", link: "#" },
      { name: "Contact", link: "#" },
    ],
    button: { text: "Sign In", link: "/login" },
  });

  return [store, setStore];
}

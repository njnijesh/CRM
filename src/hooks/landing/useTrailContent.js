import { useState } from "react";
export default function useTrailContent() {
  const [store, setStore] = useState({
    title: "Start your free trial today",
    description: "Try Flowbite Platform for 30 days. No credit card required.",
    btn: { text: "Free trail for 30 days", url: "#" },
  });

  return [store, setStore];
}

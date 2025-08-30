"use client";

import Intro from "@/components/Intro";
import Landing from "@/components/Landing";
import { useState } from "react";

export default function Home() {
  const [showLanding, setShowLanding] = useState(false);

  // No sessionStorage — a full page reload resets this state
  return showLanding ? (
    <Landing />
  ) : (
    <Intro onDone={() => setShowLanding(true)} />
  );
}

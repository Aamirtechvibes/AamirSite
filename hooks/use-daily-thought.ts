"use client";

import { useEffect, useState } from "react";

const thoughts = [
  "Small systems create big impact",
  "Thinking > coding",
  "Build with intent",
  "Clarity creates trust",
  "Execution defines you",
];

function getThoughtForToday() {
  return thoughts[new Date().getDate() % thoughts.length];
}

export function useDailyThought() {
  const [thought, setThought] = useState(getThoughtForToday);

  useEffect(() => {
    setThought(getThoughtForToday());
  }, []);

  return thought;
}

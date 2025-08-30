"use client";
import { useCallback, useEffect, useState } from "react";

export default function Intro({ onDone }: { onDone: () => void }) {
  const lines = ["hello there", "Welcome to my site"];
  const TYPE_MS = 70;
  const PAUSE_MS = 700;

  const [line, setLine] = useState(0);
  const [text, setText] = useState("");

  const skip = useCallback(() => onDone(), [onDone]);

  useEffect(() => {
    const onKey = () => skip();
    const onClick = () => skip();
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [skip]);

  useEffect(() => {
    let cancel = false;
    (async () => {
      const full = lines[line];
      for (let i = 0; i <= full.length; i++) {
        if (cancel) return;
        setText(full.slice(0, i));
        await new Promise(r => setTimeout(r, TYPE_MS));
      }
      await new Promise(r => setTimeout(r, PAUSE_MS));
      if (cancel) return;
      if (line < lines.length - 1) {
        setLine(line + 1);
        setText("");
      } else {
        onDone();
      }
    })();
    return () => { cancel = true; };
  }, [line, onDone]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="px-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-800">
        <span className="type-caret pr-1">{text}</span>
      </div>
      <div className="absolute bottom-6 text-sm text-slate-500">
        Tap / press any key to skip
      </div>
    </div>
  );
}

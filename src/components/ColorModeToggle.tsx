import { useEffect, useState } from "react";
import { IconButton } from "@radix-ui/themes";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";


export function ColorModeToggle({
  onChange,
  initial = "light",
}: {
  onChange: (mode: "light" | "dark") => void;
  initial?: "light" | "dark";
}) {
  const [mode, setMode] = useState<"light" | "dark">(initial);

  useEffect(() => {
    onChange(mode);
    localStorage.setItem("appearance", mode);
  }, [mode, onChange]);

  useEffect(() => {
    const saved = localStorage.getItem("appearance") as "light" | "dark" | null;
    if (saved) setMode(saved);
  }, []);

  return (
    <IconButton
      variant="soft"
      color="indigo"
      onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
      title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
      size={"4"}
    >
      {mode === "light" ? <BsToggleOff height={20} width={20} /> : <BsToggleOn height={20} width={20} />}
    </IconButton>
  );
}

import { Badge } from "@radix-ui/themes"

interface MetacriticsProps {
    metacritics?: number;
}

const Metacritics = ({metacritics} : MetacriticsProps) => {
    const color: "cyan" | "orange" | undefined = typeof metacritics === "number"
        ? (metacritics >= 75 ? "cyan" : metacritics >= 60 ? "orange" : undefined)
        : undefined

  return (
    <Badge size="3" color={color}>{metacritics}</Badge>
  )
}

export default Metacritics
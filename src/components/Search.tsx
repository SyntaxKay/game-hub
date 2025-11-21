import { TextField } from "@radix-ui/themes";
import { useRef } from "react";
import { FaSistrix } from "react-icons/fa";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
      style={{ width: "100%" }}
    >
      <TextField.Root
        placeholder="Search Games..."
        size="3"
        color="iris"
        variant="surface"
        radius="full"
        style={{ height: "46px", fontSize: "16px" }}
        ref={ref}
      >
        <TextField.Slot>
          <FaSistrix height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </form>
  );
};

export default Search;

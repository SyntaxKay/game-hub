import { Button, DropdownMenu } from "@radix-ui/themes";
import type { platform } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: platform) => void;
  selectedPlatform?: platform | null;
}

const PlatformFilter = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="surface" size={"3"} radius="small">
          {selectedPlatform?.name ? selectedPlatform.name : "Platforms"}
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="2">
        {data.map((platform) => (
          <>
            <DropdownMenu.Item
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </DropdownMenu.Item>
            <DropdownMenu.Separator key={platform.id} />
          </>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default PlatformFilter;

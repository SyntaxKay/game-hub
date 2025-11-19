import { Button, DropdownMenu } from "@radix-ui/themes";
import usePlatform from "../hooks/usePlatform";

const PlatformFilter = () => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <DropdownMenu.Root >
      <DropdownMenu.Trigger>
        <Button variant="surface" size={"3"} radius="small">
          Platform
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="2" >
        {data.map((platform) => (
          <>
            <DropdownMenu.Item key={platform.id}>
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

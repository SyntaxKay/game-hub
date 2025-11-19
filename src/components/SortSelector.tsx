import { Button, DropdownMenu } from "@radix-ui/themes";

const SortSelector = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="surface" size={"3"} radius="small" color="cyan">
          Order By: Relevence
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="2" color="cyan" variant="soft">
        <DropdownMenu.Item >Relevence</DropdownMenu.Item>
        <DropdownMenu.Item>Date Added</DropdownMenu.Item>
        <DropdownMenu.Item>Name</DropdownMenu.Item>
        <DropdownMenu.Item>Release Date</DropdownMenu.Item>
        <DropdownMenu.Item>Popularity</DropdownMenu.Item>
        <DropdownMenu.Item>Average Rating</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default SortSelector;

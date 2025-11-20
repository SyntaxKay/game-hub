import { Button, DropdownMenu } from "@radix-ui/themes";

interface Props {
  onSelectSortOrder: (order: string) => void;
  selectedSortOrder: string;
}

const SORT_ORDERS = [
  { label: "Relevence", value: "" },
  { label: "Date Added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Release Date", value: "-released" },
  { label: "Metacritic", value: "metacritic" },
  { label: "Average Rating", value: "rating" },
];

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const currentSortOrder = SORT_ORDERS.find(
    (order) => order.value === selectedSortOrder
  );
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="surface" size={"3"} radius="small" color="cyan">
          Order By: { currentSortOrder?.label || "Relevence" }
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="2" color="cyan" variant="soft">
        {SORT_ORDERS.map((order) => (
          <DropdownMenu.Item
            key={order.value}
            textValue={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default SortSelector;

import { HiCheck, HiChevronDown } from "react-icons/hi"
import { Select, chakra } from "../src"

export default {
  title: "Components / Select",
  decorators: [
    (Story: any) => (
      <chakra.div maxWidth="500px" mx="auto" mt="40px">
        <Story />
      </chakra.div>
    ),
  ],
}

const items = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Svelte", value: "svelte", disabled: true },
  { label: "Vue", value: "vue" },
]

export const Demo = (props: Select.RootProps) => {
  return (
    <Select.Root
      positioning={{ sameWidth: true }}
      width="12rem"
      {...props}
      items={items}
    >
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <HiChevronDown />
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          <Select.ItemGroup>
            <Select.ItemGroupLabel>Framework</Select.ItemGroupLabel>
            {items.map((item) => (
              <Select.Item key={item.value} item={item}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <HiCheck />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}

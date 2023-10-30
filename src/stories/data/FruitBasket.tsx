import { Box } from "generated/panda/jsx";

export const fruitBasket = [
  { name: "Apple", icon: "🍎" },
  { name: "Banana", icon: "🍌" },
  { name: "Orange", icon: "🍊" },
  { name: "Grape", icon: "🍇" },
];

const FruitBasket = () =>
  fruitBasket.map(({ icon: fruit }) => <Box key={fruit}>{fruit}</Box>);

export default FruitBasket;

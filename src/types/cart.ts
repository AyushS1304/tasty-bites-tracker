
import { FoodItem } from "@/context/StoreContext";

export type CartItem = FoodItem & {
  quantity: number;
};

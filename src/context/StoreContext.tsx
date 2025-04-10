
import React, { createContext, useContext, useReducer, ReactNode } from "react";

export type FoodItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  cuisine: string;
  rating: number;
  quantity?: number;
};

export type CartItem = FoodItem & {
  quantity: number;
};

export type OrderStatus = "placed" | "confirmed" | "preparing" | "out_for_delivery" | "delivered";

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  estimatedDeliveryTime: string;
  createdAt: Date;
  address: string;
  currentLocation?: { lat: number; lng: number };
};

type StoreState = {
  cart: CartItem[];
  orders: Order[];
  currentOrder: Order | null;
};

type StoreAction =
  | { type: "ADD_TO_CART"; payload: FoodItem }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "PLACE_ORDER"; payload: Order }
  | { type: "UPDATE_ORDER_STATUS"; payload: { orderId: string; status: OrderStatus; location?: { lat: number; lng: number } } };

const initialState: StoreState = {
  cart: [],
  orders: [],
  currentOrder: null,
};

// Mock order for initial testing
const mockOrder: Order = {
  id: "ORD-12345",
  items: [],
  total: 0,
  status: "preparing",
  estimatedDeliveryTime: "25-30 min",
  createdAt: new Date(),
  address: "123 Main St, Mumbai, India",
  currentLocation: { lat: 19.0760, lng: 72.8777 },
};

function storeReducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }
    
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    
    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== id),
        };
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    }
    
    case "CLEAR_CART":
      return { ...state, cart: [] };
    
    case "PLACE_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
        currentOrder: action.payload,
        cart: [],
      };
    
    case "UPDATE_ORDER_STATUS": {
      const { orderId, status, location } = action.payload;
      const updatedOrders = state.orders.map((order) => {
        if (order.id === orderId) {
          return {
            ...order,
            status,
            currentLocation: location || order.currentLocation,
          };
        }
        return order;
      });
      
      const updatedCurrentOrder = state.currentOrder?.id === orderId
        ? { ...state.currentOrder, status, currentLocation: location || state.currentOrder.currentLocation }
        : state.currentOrder;
      
      return {
        ...state,
        orders: updatedOrders,
        currentOrder: updatedCurrentOrder,
      };
    }
    
    default:
      return state;
  }
}

type StoreContextType = {
  state: StoreState;
  addToCart: (item: FoodItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: (address: string) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus, location?: { lat: number; lng: number }) => void;
};

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(storeReducer, {
    ...initialState,
    // Add mock order for demo purposes
    orders: [mockOrder],
    currentOrder: mockOrder,
  });

  const addToCart = (item: FoodItem) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const placeOrder = (address: string) => {
    const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    const newOrder: Order = {
      id: `ORD-${Math.floor(Math.random() * 90000) + 10000}`,
      items: [...state.cart],
      total,
      status: "placed",
      estimatedDeliveryTime: "30-45 min",
      createdAt: new Date(),
      address,
      currentLocation: { lat: 19.0760, lng: 72.8777 }, // Mumbai coordinates as default
    };
    
    dispatch({ type: "PLACE_ORDER", payload: newOrder });
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus, location?: { lat: number; lng: number }) => {
    dispatch({ type: "UPDATE_ORDER_STATUS", payload: { orderId, status, location } });
  };

  return (
    <StoreContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        placeOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

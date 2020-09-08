import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const items = await AsyncStorage.getItem('@GoMarketplace:items');
      if (items) {
        setProducts(JSON.parse(items));
      }
    }

    loadProducts();
  }, []);

  async function updateStorageItems(items: Product[]): Promise<void> {
    setProducts(items);
    await AsyncStorage.setItem('@GoMarketplace:items', JSON.stringify(items));
  }

  const increment = useCallback(
    async id => {
      await updateStorageItems(
        products.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      await updateStorageItems(
        products
          .map(item => {
            if (item.id === id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return item;
          })
          .filter(item => item.quantity > 0),
      );
    },
    [products],
  );

  const addToCart = useCallback(
    async product => {
      const productExist = products.find(item => item.id === product.id);
      if (productExist) {
        increment(productExist.id);
      } else {
        await updateStorageItems([
          ...products,
          {
            ...product,
            quantity: 1,
          },
        ]);
      }
    },
    [products, increment],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };

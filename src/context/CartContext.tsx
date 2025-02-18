import { createContext, ReactNode, useState } from "react";

// Define o contexto para o carrinho
export const CartContext = createContext<any>(null);

// Define o tipo para os props do CartProvider
type CartProviderProps = {
  children: ReactNode;
};

// Define o tipo para os itens do carrinho
type CartItem = {
  id: string;
  name: string;
  price: number;
  amount: number;
  total: number;
};

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  function addItemCart(newItem: CartItem) {
    const indexItem = cart.findIndex((item: CartItem) => item.id === newItem.id);

    if (indexItem !== -1) {
      let cartList = [...cart]; // Criar uma cópia para evitar mutação direta
      cartList[indexItem].amount += 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    let data: CartItem = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((prevCart) => [...prevCart, data]);
    totalResultCart([...cart, data]);
  }

  function removeItemCart(product: CartItem) {
    const indexItem = cart.findIndex((item: CartItem) => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      let cartList = [...cart];
      cartList[indexItem].amount -= 1;
      cartList[indexItem].total -= cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const removeItem = cart.filter((item: CartItem) => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  }

  function totalResultCart(items: CartItem[]) {
    let result = items.reduce((acc: number, obj: CartItem) => acc + obj.total, 0);
    setTotal(result);
  }

  return (
    <CartContext.Provider value={{ cart, addItemCart, removeItemCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

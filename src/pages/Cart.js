import { useCart } from "../context/CartContext";

import { CartCard } from "../components"
import { useTitle } from "../hooks"

export const Cart = () => {
  const {total, cartList:products} = useCart();
  useTitle('Cart');

  return (
    <main>
      <section className="cart">
        <h1>Cart items: {products.length} / ${total} </h1>
        {products && products.map((product) =>(
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

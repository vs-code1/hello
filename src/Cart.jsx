const intl = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
});

export default function Cart({ cart, checkout }) {
  let total = 0;

  for (const item of cart) {
    total += item.pizza.sizes[item.size];
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span> -
            <span className="type">{item.pizza.name}</span> -
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

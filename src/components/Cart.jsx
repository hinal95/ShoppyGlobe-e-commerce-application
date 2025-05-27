import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);

  return (
    <div>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
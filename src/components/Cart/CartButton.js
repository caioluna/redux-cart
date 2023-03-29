import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';

import classes from './CartButton.module.css';


const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartItemsAmount = useSelector(state => state.cart.totalQuantity)

  const handleToggleCartDisplay = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={handleToggleCartDisplay}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  );
};

export default CartButton;

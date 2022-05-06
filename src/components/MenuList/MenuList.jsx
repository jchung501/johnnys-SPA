import styles from './MenuList.module.css';
// import MenuListItem from '../MenuListItem/MenuListItem';
import Product from '../Product/Product';

export default function MenuList({ menuItems, handleAddToOrder }) {
  const items = menuItems.map(item =>
    <Product
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      menuItem={item}
    />
  );
  return (
    <div className={styles.MenuList}>
      {items}
    </div>
  );
}
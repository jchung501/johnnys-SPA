import styles from './MenuListItem.module.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      <div className={styles.emoji + ' ' + 'flex-ctr-ctr'}>{<img src={menuItem.img}/>}</div>
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.buy}>
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-add" onClick={() => handleAddToOrder(menuItem._id)}>
          Add
        </button>
      </div>
    </div>
  );
}
import styles from './Product.module.css';
import React from 'react';

export default function Product({menuItem, handleAddToOrder}) {
    return (
        <body>
            <div className={styles.container} >
                <div className={`${styles.productImage} ${menuItem.name}`}></div>
                    <div className={styles.size}>
                        <h4>SIZE</h4>
                        <ul>
                            <li>Small</li>
                            <li>Medium</li>
                            <li>Large</li>
                        </ul>
                    </div>
                    <div className={styles.price}>
                        <h4>PRICE</h4>
                        <span>${menuItem.price.toFixed(2)}</span>
                    </div>
                    <div className={styles.add}>
                        <button className="btn-add" onClick={() => handleAddToOrder(menuItem._id)}>
                        Add
                        </button>
                    </div>
                    <div className={styles.productName}>
                        {menuItem.name}
                    </div>
                </div>
        </body>
    )
}
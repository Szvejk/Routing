import React from 'react'
import {   Link } from 'react-router-dom';
import styles from './Orders.module.css'
const Orders = () => {
  return (
    <div>
      	<div className={styles.linksOrders}>
			<Link to='/' className={styles.linkOrder}>Home</Link>
			<Link to='/orders/:id' className={styles.linkOrder}>IdOrders</Link>
			<Link to='/orders/add' className={styles.linkOrder}>AddOrders</Link>

		</div>
    </div>
  )
}

export default Orders

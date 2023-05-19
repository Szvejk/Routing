import React from 'react'
import {useState, useEffect} from 'react'
import {   Link } from 'react-router-dom';
import styles from './Orders.module.css'

const Orders = () => {
const [data,setData]=useState<any[]>([])
const addOrder = async (id:any) => {
	const response = await fetch(`http://localhost:3000/orders${id}`, {
		method: 'GET',
		headers: { 'Content-type': 'application/json;charset=UTF-8' },
		body: JSON.stringify(),
	});
	if (!response.ok) {
		return {};
	}
	const data = await response.json();
	return data;
};


	useEffect(() => {
		addOrder().then(data=>{
			setData(data)
		})
	}, [])




  return (
	<> 
    <div>
      	<div className={styles.linksOrders}>
			<Link to='/' className={styles.linkOrder}>Home</Link>
			<Link to='/orders/:id' className={styles.linkOrder}>IdOrders</Link>
			<Link to='/orders/add' className={styles.linkOrder}>AddOrders</Link>
		</div>
    </div>
	{data.map((el)=>{
				return <Link to={`/orders/${el.id}`} key={el.id}>
				<p>{el.phone}</p>
				<p>{el.quantity}</p>
				</Link>
			})}
</>
  )
}
export default Orders

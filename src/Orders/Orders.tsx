import React from 'react'
import {useState, useEffect} from 'react'
import {   Link } from 'react-router-dom';
import styles from './Orders.module.css'



const addOrder = async () => {
	const response = await fetch(`http://localhost:3000/orders`, {
		method: 'GET',
		
	});
	const data=await response.json()
	return data;
};

const Orders = () => {
const [data,setData]=useState<any[]>([])
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
					<button>Details</button>
				<p>{el.phone}</p>
				<p>{el.quantity}</p>
				<p>{el.name}</p>
				<p>{el.title}</p>
			
				</Link>
			})}
</>
  )
}
export default Orders

import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './Clients.module.css';
import ClientForm from '../ClientForm';

const getAllClients=async ()=>{
	  const response = await fetch(`http://localhost:3000/clients`, {
      method: "GET",
    });
	const data=await response.json()
	return data;
}

const Clients = () => {

	const [data,setData]=useState<any[]>([])
	
	useEffect(() => {
		getAllClients().then(data=>{
			setData(data)
		})
	}, [])

	console.log("data",data)
	

	return ( 
        <> 
		<div className={styles.linksClients}>
			<Link to='/' className={styles.linkClient}>
				Home
			</Link>
			<Link to='/clients/add' className={styles.linkClient}>
				Client add
			</Link>
			<Link to='/clients/:id' className={styles.linkClient}>
				Client id
			</Link>
			<Link to='/clients/:id/edit' className={styles.linkClient}>
				Client id edit
			</Link>
		</div>
		<div>
			All clients:
			
			{data.map((el)=>{
				return <div key={el.id}>
				<p>{el.name}</p>
				<p>{el.street}</p>
				</div>
			})}
		</div>
		</>
	);
};

export default Clients;

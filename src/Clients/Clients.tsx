import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './Clients.module.css';
import ClientForm from '../ClientForm';
import ShowClient from './ShowClient';

const getAllClients=async ()=>{
	  const response = await fetch(`http://localhost:3000/clients`, {
      method: "GET",
    });
	const data=await response.json()
	return data;
	// data.onClick={ <ShowClient />}> 
}

const Clients = () => {

	const [data,setData]=useState<any[]>([])
	
	useEffect(() => {
		getAllClients().then(data=>{
			setData(data)
		})
	}, [])

	
	

	return ( 
        <> 
		<div className={styles.linksClients}>
			<Link to='/' className={styles.linkClient}>
				Home
			</Link>
			<Link to='/clients/add' className={styles.linkClient}>
				Client add
			</Link>
		</div>
		<div>
			All clients:
			
			{data.map((el)=>{
				return <Link to={`/clients/${el.id}`} key={el.id}>
				<p>{el.name}</p>
				<p>{el.street}</p>
				</Link>
			})}
		</div>
		</>
	);
};

export default Clients;

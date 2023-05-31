import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const getOrder = async (id: string) => {
	const response = await fetch(`http://localhost:3000/orders/${id}`, {
		method: 'GET',
	});
	const data = await response.json();
	return data;
};
const deleteClient = async (id: string) => {
	const response = await fetch(`http://localhost:3000/orders/${id}`, {
		method: 'DELETE',
	});
	const data = await response.json();
	return data;
};


const IdOrders = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [orders, setOrders] = useState<any>({});
	useEffect(() => {
		if (params.id) {
			setLoading(true);
			getOrder(params.id).then((data) => {
				console.log(data);
				setOrders(data);
				setLoading(false);
			});
		 }
		 }, []);


		 let buttonShow = () => {
			const isConfirmed = confirm('Czy na pewno chcesz usunąć');
			if (isConfirmed) {
				deleteClient(orders.id);
				navigate('/orders');
			}
		};
	

	return (
		<div>
			<p>{orders.phone}</p>
			<p>{orders.quantity}</p>
			<p>{orders.name}</p>
			<p>{orders.title}</p>
			<button onClick={() => buttonShow()}>Usuń zamówienie</button>
		</div>
	);
};

export default IdOrders;

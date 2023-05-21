import React, { useState, useEffect } from 'react';

const IdOrders = () => {
	const [orders, setOrders] = useState<any>({});

	const getOrder = async (id: string) => {
		const response = await fetch(`http://localhost:3000/orders/${id}`, {
			method: 'GET',
		});
		const data = await response.json();
		return data;
	};

	return (
		<div>
			<p>{orders.phone}</p>
			<p>{orders.quantity}</p>
			<p>{orders.name}</p>
			<p>{orders.title}</p>
		</div>
	);
};

export default IdOrders;

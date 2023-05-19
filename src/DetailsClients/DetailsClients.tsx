import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const getClient = async (id: string) => {
	const response = await fetch(`http://localhost:3000/clients/${id}`, {
		method: 'GET',
	});
	const data = await response.json();
	return data;
};

const deleteClient = async (id: string) => {
	const response = await fetch(`http://localhost:3000/clients/${id}`, {
		method: 'DELETE',
	});
	const data = await response.json();
	return data;
};

const DetailsClients = () => {
	const params = useParams();
	const navigate = useNavigate();

	const [client, setClient] = useState<any>({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (params.id) {
			setLoading(true);
			getClient(params.id).then((data) => {
				console.log(data);
				setClient(data);
				setLoading(false);
			});
		}
	}, []);

	let buttonShow = () => {
		const isConfirmed = confirm('Czy na pewno chcesz usunąć');
		if (isConfirmed) {
			deleteClient(client.id);
			navigate('/clients');
		}
	};

	if (loading) {
		return 'Ładuje się';
	}
	return (
		<div>
			<p>{client.id}</p>
			<p>{client.name}</p>
			<p>{client.surname}</p>
			<p>{client.phone}</p>
			<button onClick={() => buttonShow()}>Usuń klienta</button>
		</div>
	);
};

export default DetailsClients;

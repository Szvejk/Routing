import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

export const clientsSchema = yup.object().shape({
	name: yup.string().required('required'),
	quantity: yup
		.number()
		.min(1, 'Too short!')
		.max(15, 'Too short!')
		.required('required'),
	title: yup
		.string()
		.min(5, 'Please enter min 5 characters')
		.required('required'),
	content: yup
		.string()
		.min(10, 'Please enter min 10 characters')
		.required('required'),
	phone: yup.string(),
});
type FormValues = yup.InferType<typeof clientsSchema>;

const getAllClients = async () => {
	const response = await fetch(`http://localhost:3000/clients`, {
		method: 'GET',
	});
	const data = await response.json();
	return data;
};

export const addOrder = async (newOrder: FormValues) => {
	const response = await fetch(`http://localhost:3000/orders`, {
		method: 'POST',
		headers: { 'Content-type': 'application/json;charset=UTF-8' },
		body: JSON.stringify(newOrder),
	});
	if (!response.ok) {
		return {};
	}
	const data = await response.json();
	return data;
};

const ClientForm = () => {
	const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
		useFormik<FormValues>({
			initialValues: {
				name: '',
				quantity: 0,
				title: '',
				content: '',
				phone: '',
			},
			// validationSchema: clientsSchema,
			onSubmit: async (values: FormValues) => {
				await addOrder(values);
			},
		});

	const [clients, setClients] = useState<any[]>([]);

	useEffect(() => {
		getAllClients().then((data) => {
			setClients(data);
		});
	}, []);

	return (
		<div>
			<form onSubmit={handleSubmit} autoComplete='off'>
				<label htmlFor='name'>Name</label>
				<input
					onChange={handleChange}
					id='name'
					type='name'
					placeholder='Enter your name'
					onBlur={handleBlur}
				/>{' '}
				<label htmlFor='phone'>phone</label>
				<select
					name='phone'
					value={values.phone}
					onChange={handleChange}
					onBlur={handleBlur}
					style={{ display: 'block' }}
				>
					{clients.map((client) => {
						return (
							<option key={client.id} value={client.phone}>
								{client.name} {client.surname}
							</option>
						);
					})}
				</select>
				{errors.name && touched.name && <p>{errors.name}</p>}
				<label htmlFor='quantity'>Quantity</label>
				<input
					onChange={handleChange}
					id='quantity'
					type='quantity'
					placeholder='Enter your quantity'
					onBlur={handleBlur}
				/>{' '}
				{errors.title && touched.title && <p>{errors.title}</p>}
				<label htmlFor='title'>Title</label>
				<input
					onChange={handleChange}
					id='title'
					type='title'
					placeholder='Enter your title'
					onBlur={handleBlur}
				/>{' '}
				{errors.content && touched.content && <p>{errors.content}</p>}
				<label htmlFor='content'>Content</label>
				<input
					onChange={handleChange}
					id='content'
					type='content'
					placeholder='Enter your content'
					onBlur={handleBlur}
				/>{' '}
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default ClientForm;

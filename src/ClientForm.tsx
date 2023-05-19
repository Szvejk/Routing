import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

export const clientsSchema = yup.object().shape({
	name: yup
		.string()
		.min(3, 'Please enter min 3 characters')
		.required('required'),
	surname: yup
		.string()
		.min(3, 'Please enter min 3 characters')
		.required('required'),
	street: yup
		.string()
		.min(5, 'Please enter min 3 characters')
		.required('required'),
	phone: yup.string(),


	// postalCode: yup
	// 	.string()
	// 	.matches(/^\d{2}-\d{3}$/, 'Postal code must be in the format XX-XXX')
	// 	.required('Postal code is required'),
	// region: yup.string().min(3, 'Please enter min 3 characters'),

	// link: yup.string(),

	// number: yup.string()
	// .matches(/^\d{11}$/, "Numer jest nieprawidłowy"),
});
type FormValues = yup.InferType<typeof clientsSchema>;

export const addClient = async (newClient: FormValues) => {
	const response = await fetch(`http://localhost:3000/clients`, {
		method: 'POST',
		headers: { 'Content-type': 'application/json;charset=UTF-8' },
		body: JSON.stringify(newClient),
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
				surname: '',
				street: '',
				phone: " ",
			},
			validationSchema: clientsSchema,
			onSubmit: async (values: FormValues) => {
				await addClient(values);
			},
		});
	return (
		<div>
			<form onSubmit={handleSubmit} autoComplete='off'>
				<label htmlFor='name'>Name</label>
				<input
					value={values.name}
					onChange={handleChange}
					id='name'
					placeholder='Enter your name'
					onBlur={handleBlur}
					className={errors.name && touched.name ? '' : ''}
					// ???
				/>
				{errors.name && touched.name && <p>{errors.name}</p>}
				<label htmlFor='surname'>Surame</label>
				<input
					value={values.surname}
					onChange={handleChange}
					id='surname'
					type='surname'
					placeholder='Enter your name'
					onBlur={handleBlur}
					className={errors.surname && touched.surname ? 'input-error' : ''}
				/>{' '}
				{errors.surname && touched.surname && <p>{errors.surname}</p>}
				<label htmlFor='street'>Street</label>
				<input
					value={values.street}
					onChange={handleChange}
					id='street'
					type='street'
					placeholder='Enter your street'
					onBlur={handleBlur}
					className={errors.street && touched.street ? 'input-error' : ''}
				/>{' '}
				{errors.street && touched.street && <p>{errors.street}</p>}
				<label htmlFor='street'>Phone</label>
				<input
					value={values.phone}
					onChange={handleChange}
					id='phone'
					type='phone'
					placeholder='Enter your phone'
					onBlur={handleBlur}
					className={errors.phone && touched.phone ? 'input-error' : ''}
				/>{' '}
				{errors.street && touched.street && <p>{errors.phone}</p>}
				{/* <label htmlFor='password'> Password</label>
				<input
					value={values.confirmPassword}
					onChange={handleChange}
					id='password'
					type='password'
					placeholder='Confirm your password'
					onBlur={handleBlur}
					className={
						errors.confirmPassword && touched.confirmPassword
							? 'input-error'
							: ''
					}
				/>{' '}
				{errors.confirmPassword && touched.confirmPassword && (
					<p className={styles.error}>{errors.confirmPassword}</p>
				)} */}
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default ClientForm;

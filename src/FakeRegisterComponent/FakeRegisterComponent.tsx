import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../form/schema';
import styles from './FakeRegisterComponent.css';

type FormValues = {
	name: string;
	email: string;
	password: string;
	repeatPassword: string;
	error: string;
};

const FakeRegisterComponent = () => {
	// const { values, touched, errors,isSubmitting, handleBlur, handleChange, handleSubmit } =
	// 	useFormik<FormValues>({
	// 		initialValues: {
	// 			name: '',
	// 			email: '',
	// 			password: '',
	// 			repeatPassword: '',
	// 			error: ''
	// 		},
	// 		validationSchema: basicSchema,
	// 		onSubmit: (values: FormValues) => {
	// 			alert(JSON.stringify(values));
	// 		},
	// 	});

	return (
		<div>
			{/* <form onSubmit={handleSubmit} autoComplete='off'>
				<label htmlFor='name'>Name</label>
				<input
					value={values.name}
					onChange={handleChange}
					id='name'
					type='name'
					name='name'
					placeholder='Enter your name'
					onBlur={handleBlur}
					className={errors.name && touched.name ? styles.inputError : ''}
				/>
				{errors.name && touched.name && (
					<p className={styles.error}>{errors.name}</p>
				)}

				<label htmlFor='email'>Email</label>
				<input
					value={values.email}
					onChange={handleChange}
					id='email'
					type='email'
					name='email'
					placeholder='Enter your email'
					onBlur={handleBlur}
					className={errors.email && touched.email ? styles.inputError : ''}
				/>
				{errors.name && touched.name && (
					<p className={styles.error}>{errors.name}</p>
				)}
				<label htmlFor='password'>Password</label>
				<input
					value={values.password}
					onChange={handleChange}
					id='password'
					type='password'
					name='password'
					placeholder='Enter your password'
					onBlur={handleBlur}
					className={
						errors.password && touched.password ? styles.inputError : ''
					}
				/>
				{errors.name && touched.name && (
					<p className={styles.error}>{errors.name}</p>
				)}
				<label htmlFor='repeatPassword'>Repeat password</label>
				<input
					value={values.repeatPassword}
					onChange={handleChange}
					id='repeatPassword'
					type='password'
					placeholder='Confirm password'
					name='repeatPassword'
					onBlur={handleBlur}
					className={
						errors.repeatPassword && touched.repeatPassword
							? {styles.inputError}
							: ''
					}
				/>
				{errors.name && touched.name && (
					<p className={styles.error}>{errors.name}</p>
				)} */}
			{/* <button disabled={isSubmitting} type='submit'>Submit</button>
			</form> */}
		</div>
	);
};

export default FakeRegisterComponent;

import { useFormik } from 'formik';
import { basicSchema } from './schema';
import styles from './Form.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// interface InitialValues {
// 	email: string;
// 	name: string;
// 	password: string;
// 	confirmPassword: string ;
// }

// // ???
// const Form = () => {
// 	const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
// 		useFormik<InitialValues>({
// 			initialValues: {
// 				email: '',
// 				name: '',
// 				password: '',
// 				confirmPassword: '',
// 			},
// 			validationSchema: basicSchema,
// 			onSubmit: (values: any) => {
// 				console.log(values);
// 			},
// 		});

// 	return (
// 		<div className={styles.wrapper}>
// 			<form
// 				onSubmit={handleSubmit}
// 				autoComplete='off'
// 				className={styles.wrapperFlex}
// 			>
// 				<label htmlFor='email'>Email</label>
// 				<input
// 					value={values.email}
// 					onChange={handleChange}
// 					id='email'
// 					type='email'
// 					placeholder='Enter your email'
// 					onBlur={handleBlur}
// 					className={errors.email && touched.email ? styles['input-error'] : ''}
// 					// ???
// 				/>
// 				{errors.email && touched.email && (
// 					<p className={styles.error}>{errors.email}</p>
// 				)}
// 				<label htmlFor='name'>Name</label>
// 				<input
// 					value={values.name}
// 					onChange={handleChange}
// 					id='name'
// 					type='name'
// 					placeholder='Enter your name'
// 					onBlur={handleBlur}
// 					className={errors.name && touched.email ? 'input-error' : ''}
// 				/>{' '}
// 				{errors.name && touched.name && (
// 					<p className={styles.error}>{errors.name}</p>
// 				)}
// 				<label htmlFor='password'>Password</label>
// 				<input
// 					value={values.password}
// 					onChange={handleChange}
// 					id='password'
// 					type='password'
// 					placeholder='Enter your password'
// 					onBlur={handleBlur}
// 					className={errors.password && touched.email ? 'input-error' : ''}
// 				/>{' '}
// 				{errors.password && touched.password && (
// 					<p className={styles.error}>{errors.password}</p>
// 				)}
// 				<label htmlFor='password'> Password</label>
// 				<input
// 					value={values.confirmPassword}
// 					onChange={handleChange}
// 					id='password'
// 					type='password'
// 					placeholder='Confirm your password'
// 					onBlur={handleBlur}
// 					className={
// 						errors.confirmPassword && touched.confirmPassword
// 							? 'input-error'
// 							: ''
// 					}
// 				/>{' '}
// 				{errors.confirmPassword && touched.confirmPassword && (
// 					<p className={styles.error}>{errors.confirmPassword}</p>
// 				)}
// 				<button type='submit'>Submit</button>
// 			</form>
// 		</div>
// 	);
// };

// export default Form;

const Form = () => {
	return (
		<div className={styles.links}>
			<Link to='/' className={styles.link}>Home</Link>
			<Link to='/clients' className={styles.link}>Clients</Link>
			<Link to='/orders' className={styles.link}>Orders</Link>
			<Link to='/invoices' className={styles.link}>Invoices</Link>
		</div>
	);
};

export default Form;

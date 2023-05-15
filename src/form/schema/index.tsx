import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
	email: yup.string().email('Please enter a valid email').required('required'),
	name: yup
		.string()
		.min(3, 'Please enter min 3 characters')
		.required('required'),
	password: yup
		.string()
		.min(5)
		.matches(passwordRules, { message: 'Please create a stronger password' })
		.required('Please create a stronger password'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match')
		.required('Required'),
});

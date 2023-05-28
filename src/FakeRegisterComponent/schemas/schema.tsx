import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z]).{5,}$/;

 export const basicSchema = yup.object().shape({
	name: yup.string().min(2, 'Please enter valid name').required('Required'),
	email: yup.string().email('Please enter valid email').required('Required'),
	password: yup
		.string()
		.min(5)
		.matches(passwordRules, { message: 'Please create a stronger password' })
		.required('Required'),
	confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords must match").required("Required"),
});

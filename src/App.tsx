// import Form from './form/Form';
import ClientForm from './ClientForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './form/Form';
import AddClients from './AddClients/AddClients';
import Clients from './Clients/Clients';
import DetailsClients from './DetailsClients/DetailsClients';
import EditClients from './EditClients/EditClients';
import Orders from './Orders/Orders';
import IdOrders from './IdOrders/IdOrders';
import AddOrder from './AddOrders/AddOrder';
import Invoices from './Invoices/Invoices';
import FakeRegisterComponent from './FakeRegisterComponent/FakeRegisterComponent';
const App = () => {
	return (
		<>
			{/* <Form /> */}
	
			<Router>
				<Routes>
					<Route path='/' element={<Form />} />
					<Route path='/clients' element={<Clients />} />
					<Route path='/clients/add' element={<AddClients />} />
					<Route path='/clients/:id' element={<DetailsClients />} />
					<Route path='/clients/:id/edit' element={<EditClients />} />
					<Route path='/orders' element={<Orders />} />
					<Route path='/orders/:id' element={<IdOrders />} />
					<Route path='/orders/add' element={<AddOrder />} />
					<Route path='/invoices' element={<Invoices />} />
					<Route path='/register' element={<FakeRegisterComponent />}/>

					<Route path='*' element={<h1>Page not found</h1>} />
				</Routes>
			</Router>
		
		</>
	);
};

export default App;

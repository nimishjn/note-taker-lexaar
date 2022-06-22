import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
      <Navbar />
				<Routes>
					<Route extact path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

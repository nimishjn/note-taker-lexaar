import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Note from './pages/Note';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/note/:noteId' element={<Note />} />
					<Route exact path='*' element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

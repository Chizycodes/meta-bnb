import Home from './pages/Home';
import PlaceToStay from './pages/PlaceToStay';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="bg-white min-h-screen">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/place-to-stay" element={<PlaceToStay />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/home/Homepage";
import ArticleDetailsPage from "./pages/articleDetails/ArticleDetailsPage";

function App() {
	return (
		<div className="font-opensans">
			<Routes>
				<Route path="/" index element={<Homepage />} />
				<Route path="/blog/:id" index element={<ArticleDetailsPage />} />
			</Routes>
		</div>
	);
}

export default App;

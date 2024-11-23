import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Login</h1>{" "}
			<div>
				Username <br />
				<input placeholder="Username" type="text" />
			</div>
			<div>
				Password <br />
				<input placeholder="Password" type="text" />
			</div>
			<div>
				<button type="submit">Login</button>
			</div>
		</div>
	);
}

export default App;

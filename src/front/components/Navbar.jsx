import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const navigate = useNavigate()

	function logout(){
		console.log('logout')
		// borrar el token
		localStorage.removeItem("token");
		// psar auth a false
		 dispatch({ type: "set_auth", payload: false })
		 // redirecion al home
		 navigate('/')
	}

	function logout2(){
		console.log('logout')
		// borrar el token
		localStorage.removeItem("token");
		// psar auth a false
		 dispatch({ type: "set_auth", payload: false })		 
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{ store.auth ? <button onClick={logout} className="btn btn-primary">logout</button>: null}
					
					{ store.auth ? 
						<Link to="/">
							<button onClick={logout2} className="btn btn-primary">logout 2</button>
						</Link>
					: null}
				</div>
			</div>
		</nav>
	);
};
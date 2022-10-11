import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

	const navigate = useNavigate();

	const onLougout = () => {
		navigate('/login', {
			replace: true
		})
	}

    return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
					<div className="navbar-collapse">
							<div className="navbar-nav">

								<NavLink 
									className="nav-item nav-link" 
									to="/Products"
								>
									Products
								</NavLink>

								<NavLink 
									className="nav-item nav-link" 
									to="/Contact"
								>
									Contact
								</NavLink>

								<NavLink 
									className="nav-item nav-link" 
									to="/About"
								>
									About
								</NavLink>
								<NavLink 
									className="nav-item nav-link" 
									to="/Cart"
								>
									Cart
								</NavLink>
							</div> 
					</div>

					<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
							<ul className="navbar-nav ml-auto">

								<span className='nav-item nav-link text-primary'>
									Alfredo
								</span>
								<button onClick={onLougout} className='nav-item nav-link btn'>
									Logout
								</button>
							</ul>
					</div>
			</nav>
    )
}
function NavBar(){
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Home</a>
          <div className="navbar" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#/CreateAccount">Create Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/login">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='' onClick={() => window.location.reload()}>Logout</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/deposit">Deposit</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/withdraw">Withdraw</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#/balance">Balance</a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" href="#/alldata">Account Data</a>
                </li>

            </ul>
          </div>
    </nav>
    );
}
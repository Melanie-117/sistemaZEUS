type HeaderProps = {
    onRegistroClick: () => void;
    onReportesClick: () => void;
}

function Header({ onRegistroClick, onReportesClick }: HeaderProps){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand me-5" style={{fontSize: '25px'}} href="Card">
                        <i className="fas fa-paw" style={{fontSize: '35px'}}></i> ZEUS
                    </a>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <i className="fas fa-home"></i> Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Apartados
                                </a>
                                <ul className="dropdown-menu bg-secondary text-dark">
                                    <li>
                                        <a className="dropdown-item  text-dark"
                                           href="#"
                                           onClick={(e) =>{
                                                e.preventDefault();
                                                onRegistroClick();  
                                           }}
                                        >
                                            
                                            <i className="fas fa-file-signature"></i> Registro
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item  text-dark"
                                           href="#"
                                           onClick={(e) =>{
                                                e.preventDefault();
                                                onReportesClick();  
                                           }}
                                        >
                                            
                                            <i className="fas fa-file-pdf"></i> Tabla de registros
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header
import '../styles/PaginationTable.css'
import {Link} from 'react-router-dom';

const PaginationTable = () => {
    return(
        <div className="first-pagination d-flex justify-content-between align-items-center">
						<div className="page-left d-flex">
							<div className="page-limit">
								<p className="font-limit">Limit</p>
								<div className="dropdown">
									<button className="btn btn-light dropdown-toggle btn-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									10
									</button>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<Link className="dropdown-item" to="#">20</Link>
									<Link className="dropdown-item" to="#">30</Link>
									<Link className="dropdown-item" to="#">40</Link>
									</div>
								</div>
							</div>
							<div className="jump-page">
								<p className="font-limit">Jump to Page</p>
								<div className="page-go d-flex">
									<div className="dropdown">
										<button className="btn btn-light dropdown-toggle btn-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										1  
										</button>
										<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<Link className="dropdown-item" to="#">2</Link>
										<Link className="dropdown-item" to="#">3</Link>
										<Link className="dropdown-item" to="#">4</Link>
										</div>
									</div>
									<button className="btn btn-go btn-outline-success my-2 my-sm-0" type="submit">Go</button>
								</div>
							</div>
						</div>
						<div className="page">
							<ul className="pagination">
							<li className="page-item disabled">
								<Link className="page-link" to="#">&laquo;</Link>
							</li>
							<li className="page-item active">
								<Link className="page-link" to="#">1</Link>
							</li>
							<li className="page-item"><Link className="page-link" to="#">2</Link></li>
							<li className="page-item"><Link className="page-link" to="#">3</Link></li>
							<li className="page-item"><Link className="page-link" to="#">...</Link></li>
							<li className="page-item"><Link className="page-link" to="#">9</Link></li>
							<li className="page-item">
								<Link className="page-link" to="#">&raquo;</Link>
							</li>
							</ul>
						</div>			  
					</div>
    )
}
export default PaginationTable;
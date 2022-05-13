import '../styles/TableAdmin.css'

const TableAdmin = () => {
    return(
      <>
        <div className="dash-title">
			<div className="title-dashboard d-flex">
			    <div className="title-dashboard d-flex align-items-center">
					<p className="title-bold">Dashboard</p>
					<p className="chevron-logo"><i className='bx bx-chevron-right title-bold'></i></p>
					<p className="title-light">Dashboard</p>
				</div>
			</div>
			<p className="font-dashboard">Dashboard</p>
			<div className="list-order d-flex align-items-center">
				<p className="logo-dashboard"></p>
				<p className="font-list">List Order</p>
			</div>
		</div>

        <table className="table table-hover rounded">
			<thead className="thead">
				<tr>
                    <th scope="col">No</th>
                    <th scope="col">User Email</th>
                    <th scope="col">Car</th>
                    <th scope="col">Start Rent</th>
                    <th scope="col">Finish Rent</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
				</tr>
			</thead>
			<tbody className="tbody">
				<tr>
				<th scope="row">1</th>
							<td>User Email</td>
							<td>Car</td>
							<td>Start Rent</td>
							<td>Finish Rent</td>
							<td>Price</td>
							<td>Status</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>User Email</td>
							<td>Car</td>
							<td>Start Rent</td>
							<td>Finish Rent</td>
							<td>Price</td>
							<td>Status</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>User Email</td>
							<td>Car</td>
							<td>Start Rent</td>
							<td>Finish Rent</td>
							<td>Price</td>
							<td>Status</td>
						</tr>
						<tr>
							<th scope="row">4</th>
							<td>User Email</td>
							<td>Car</td>
							<td>Start Rent</td>
							<td>Finish Rent</td>
							<td>Price</td>
							<td>Status</td>
						</tr>
						<tr>
							<th scope="row">5</th>
							<td>User Email</td>
							<td>Car</td>
							<td>Start Rent</td>
							<td>Finish Rent</td>
							<td>Price</td>
							<td>Status</td>
						</tr>
						<tr>
							<th scope="row">6</th>
							<td>User Email</td>
							<td>Car</td>
							<td>Start Rent</td>
							<td>Finish Rent</td>
							<td>Price</td>
							<td>Status</td>
						</tr>
						<tr>
							<th scope="row">7</th>
							<td>User Email</td>
							<td>Car</td>
							<td>Start Rent</td>
							<td>Finish Rent</td>
							<td>Price</td>
							<td>Status</td>
						</tr>
						<tr>
							<th scope="row">8</th>
							<td>User Email</td>
							<td>Car</td>
							<td>Start Rent</td>
							<td>Finish Rent</td>
							<td>Price</td>
							<td>Status</td>
						</tr>
						<tr>
							<th scope="row">9</th>
							<td>User Email</td>
							<td>Car</td>
							<td>Start Rent</td>
							<td>Finish Rent</td>
							<td>Price</td>
							<td>Status</td>
						</tr>
						<tr>
							<th scope="row">10</th>
							<td>User Email</td>
							<td>Car</td>
							<td>Start Rent</td>
							<td>Finish Rent</td>
							<td>Price</td>
							<td>Status</td>
						</tr>
						</tbody>
		</table>
      </>
    )
}
export default TableAdmin;
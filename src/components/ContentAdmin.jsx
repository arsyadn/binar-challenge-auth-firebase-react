import '../styles/ContentAdmin.css'

const ContentAdmin = () => {
    return(
        <>
        <div className="container-fluid">
                <div className="dash-title">
                    <div className="title-dashboard d-flex">
                        <div className="title-dashboard d-flex align-items-center">
                            <p className="title-bold">Dashboard</p>
                            <p className="logo-chevron"><i className='bx bx-chevron-right title-bold'></i></p>
                            <p className="title-light">Dashboard</p>
                        </div>
                    </div>
                    <p className="font-dashboard">Dashboard</p>
                    <div className="list-order d-flex align-items-center">
                        <p className="logo-brand"></p>
                        <p className="font-list">List Order</p>
                    </div>
                </div>
        </div>
        </>
    )
}
export default ContentAdmin;
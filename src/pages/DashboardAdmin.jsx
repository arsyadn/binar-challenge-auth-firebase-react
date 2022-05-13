import SidebarAdmin from '../components/SidebarAdmin';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const DashboardAdmin = () => {
    const navigate = useNavigate();
    const {dataLogin} = useSelector((state) => state.authReducer);

    useEffect(() => {
        if(dataLogin?.email !== "admin@admin.com") navigate("/");
        //eslint-disable-next-line
    },[])

    return(
        <>
        <SidebarAdmin/>
        </>
    )
}
export default DashboardAdmin;
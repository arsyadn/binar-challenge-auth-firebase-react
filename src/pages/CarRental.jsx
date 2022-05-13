import Header from '../layouts/Header';
import HeroApp from '../components/HeroApp';
import Footer from '../layouts/Footer';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react'


const CarRental = () => {
    const data = useSelector((globalStore) => globalStore);
    // console.log(data)
    const navigate = useNavigate();

    const checkLogin = () => {
        if(data.authReducer.dataLogin === null || data.authReducer.dataLogin?.email === "admin@admin.com") navigate("/");
    };

    useEffect(() => {
        checkLogin();
    },[]);
    return(
        <>
        <Header/>
        <HeroApp/>
        <Footer/>
        </>
        
    )
}
export default CarRental;
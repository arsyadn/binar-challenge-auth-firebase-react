import Image from 'react-bootstrap/Image';
import CarsImage from '../assets/img_cars2.svg';
import '../styles/Login.css'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { LoginGoogle } from '../config/redux/actions/authAction'
import axios from 'axios';
import {useState} from 'react';

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const {dataLogin} = useSelector((store) => store.authReducer);
    // console.log(dataLogin);
    // const dataUsers = dataLogin.user;
    // console.log(dataUsers);

    const handleRegister = () => {
        axios.post(process.env.REACT_APP_ADMIN_REGISTER_URL,{
            email: email,
            password: password,
            role: "admin",
        }).then((res) => console.log(res))
    }

    const handleLoginGoogle = async () => {
        const data = await dispatch(LoginGoogle());
        if(data) navigate("/home"); //di return di bagian actionnya
    } 

    return(
        <>
        <div className="login d-flex align-items-center ">
            <div className="log-img">
                <Image src={CarsImage} alt="cars image" className="img-login w-100 vh-100 img-fluid"/>
            </div>
     
            <div className="login-form m-auto font-weight-bold">
                <p className="w-0 login-logo"></p>
                <h1>Create new Account.</h1>
                <div className="form">
                    <div className="form-outline mb-4 mt-4">
                        <label className="form-label">Email</label>
                        <input 
                        type="email"  
                        id="form2Example18" 
                        className="placeholders form-control form-control-lg" 
                        placeholder="Contoh: johndee@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" >Password</label>
                        <input 
                        type="password" 
                        id="form2Example28" 
                        className="form-control form-control-lg" 
                        placeholder="6+ karakter"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="pt-1 mb-4 d-flex flex-column">
                        <button onClick={handleRegister} className="btn btn-click-login btn-test font-weight-bold" type="submit">Sign Up</button>
                        <button onClick={handleLoginGoogle} className="btn-login-google">Login with Google</button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/login" className="have-an-acc">Already have an account? Login.</Link><br/><br/><br/>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Register;
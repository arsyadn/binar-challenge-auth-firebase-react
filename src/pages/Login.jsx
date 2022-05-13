import Image from 'react-bootstrap/Image';
import {Form, Button} from 'react-bootstrap';
import CarsImage from '../assets/img_cars2.svg';
import '../styles/Login.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { LoginGoogle, LoginEmail } from '../config/redux/actions/authAction'
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';

const Login = () => {
    // const dispatch = useDispatch();
    const {dataLogin} = useSelector((state) => state.authReducer);
    // console.log(dataLogin);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const handleLoginGoogle = async () => {
        const data = await dispatch(LoginGoogle());
        if(data) navigate("/home"); //di return di bagian actionnya
    } 
  
  
    // const handleLoginEmail = () => {
    //   dispatch(LoginEmail(email, password));
    //   setTimeout(() => {
    //     navigate("/dashboard")}, 1500) //nge direct setelah 1.5sec
    // }
  
    useEffect(() => {
      if(dataLogin?.email === "admin@admin.com") navigate("/dashboard");
      if(dataLogin !== null && dataLogin?.email !== "admin@admin.com") navigate("/home")
    },[]);

    return(
        <>
        <div className="login d-flex align-items-center ">
            <div className="log-img">
                <Image src={CarsImage} alt="cars image" className="img-login w-100 vh-100 img-fluid"/>
            </div>
     
            <div className="login-form m-auto font-weight-bold">
                <p className="w-0 login-logo"></p>
                <h1>Welcome, Admin BCR</h1>
                <Form action="/login" method="post">
                    <div className="form-outline mb-4 mt-4">
                        <label className="form-label">Email</label>
                        <input 
                        type="email"  
                        id="form2Example18" 
                        className="placeholders form-control form-control-lg" 
                        placeholder="Contoh: johndee@gmail.com"
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" >Password</label>
                        <input type="password" id="form2Example28" className="form-control form-control-lg" placeholder="6+ karakter"/>
                    </div>
                    <div className="pt-1 mb-4">
                        <Link to="/home"><Button className="btn btn-clicks btn-test font-weight-bold" type="submit">Sign In</Button></Link>
                    </div><br/>
                    <div className="d-flex justify-content-center">
                        <button onClick={handleLoginGoogle} className="btn-login-google">Login with Google</button>
                    </div>
                </Form>
            </div>
        </div>

        </>
    )
}
export default Login;
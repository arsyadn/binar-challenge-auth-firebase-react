import Image from 'react-bootstrap/Image';
import {Form, Button} from 'react-bootstrap';
import CarsImage from '../assets/img_cars2.svg';
import '../styles/Login.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { LoginGoogle } from '../config/redux/actions/authAction'

const Register = () => {

    const dispatch = useDispatch();

    // const {dataLogin} = useSelector((store) => store.authReducer);
    // console.log(dataLogin);
    // const dataUsers = dataLogin.user;
    // console.log(dataUsers);

    return(
        <>
        <div className="login d-flex align-items-center ">
            <div className="log-img">
                <Image src={CarsImage} alt="cars image" className="img-login w-100 vh-100 img-fluid"/>
            </div>
     
            <div className="login-form m-auto font-weight-bold">
                <p className="w-0 login-logo"></p>
                <h1>Create new Account.</h1>
                <Form action="/login" method="post">
                    <div className="form-outline mb-4 mt-4">
                        <label className="form-label">Email</label>
                        <input type="email"  id="form2Example18" className="placeholders form-control form-control-lg" placeholder="Contoh: johndee@gmail.com"/>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" >Password</label>
                        <input type="password" id="form2Example28" className="form-control form-control-lg" placeholder="6+ karakter"/>
                    </div>
                    <div className="pt-1 mb-4">
                        <Link to="/home"><Button className="btn btn-clicks btn-test font-weight-bold" type="submit">Sign Up</Button></Link>
                    </div>
                    <Link to="/login">Already have an account? Login.</Link><br/><br/><br/>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => dispatch(LoginGoogle())} className="btn-login-google">Login with Google</button>
                    </div>
                </Form>
            </div>
        </div>

        </>
    )
}
export default Register;
import { useDispatch } from 'react-redux'
import auth from '../../services/auth'
import { logOut } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        auth.logOut()
            .then(() => dispatch(logOut()))
            .catch((error) => console.log("Then error is in logOut btn", error));
    }
    return (
        <button
            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        >Log Out</button>
    )
}

export default LogoutBtn;
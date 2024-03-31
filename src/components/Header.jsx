import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(UserContext)
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
    }

    return (
        <div className="flex justify-between navbar bg-primary text-primary-content">
            <button className="btn btn-ghost text-xl">Auth Master</button>
            <nav className='flex gap-2'>
                <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
                {
                    user ? <><span>{user.email}</span> <button onClick={handleLogOut} className="btn btn-ghost btn-xs">Sing out</button>
                    </>: <> <Link className="btn btn-ghost text-xl" to='register'>Register</Link>
                        <Link className="btn btn-ghost text-xl" to='login'>Login</Link></>
                }
            </nav>
        </div>
    );
};

export default Header;
import React, { useContext } from 'react';
import { UserContext } from './AuthProvider';

const Home = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            <h1>This is home page: {user && <span>{user.email}</span>}</h1>
        </div>
    );
};

export default Home;
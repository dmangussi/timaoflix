import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function RegisterVideo(){
    return (
        <PageDefault>
            <h1>Register Video</h1>

            <Link to="/register/category">
                Register Category
            </Link>
        </PageDefault>
    );
}

export default RegisterVideo;
import React, { Suspense, useEffect } from 'react'
import { Spinner } from 'reactstrap';

import './Home.css';
// import { CatList } from './CatList'

const CatList = React.lazy(() => import('./CatList'));

export const Home = () => {
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Home`;
    });

    return (
        <div className="home">
            <Suspense fallback={
                <div style={{ width: '100%', minHeight: 'calc(100vh - 56px)' }} className="d-flex justify-content-center align-items-center">

                    <Spinner color="primary" />
                </div>
            }>
                <CatList />
            </Suspense >
        </div >
    )
}

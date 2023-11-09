import React from 'react'
import Navbar from '../components/Navbar'
import { navbar } from '../utils/navbar';

import { Route, Navigate, useLocation, Routes, useNavigate } from 'react-router-dom';

export const Root = () => {



    const location = useLocation();
    const query = new URLSearchParams(location.search)
    const token = JSON.parse(localStorage.getItem('token'))
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/elements');
    }
    return (
        <div>
            <h1>
                Location : {location.pathname}
            </h1>
            <h1>
                <button onClick={logOut}>
                    Log Out
                </button>
            </h1>
            <Routes>
                <Route element={<Navbar />}>
                    {
                        navbar.map(({ id, path, element, isPrivate }) => {
                            return (!isPrivate &&
                                <Route path={path} element={element} />
                            )
                        })}
                    {
                        navbar.map(({ path, element, isPrivate }) => {
                            return (isPrivate && 
                                <Route path={path} element={token ? element : <Navigate to={'/elements'} />} />
                            )
                        })
                    }
                    {/* <Route exact path={'/'} element={<Navigate to={'/home'} />} />
                    <Route path={'/'} exact element={ <Home />} />
                    <Route path={'/home'} element={token ? <Home /> : <Navigate to={'/elements'} />} />
                    <Route path={'/elements'} element={<Elements />} />
                    <Route path={'/pages'} element={token ? <Pages /> : <Navigate to={'/elements'} />} />
                    <Route path={'/templates'} element={token ? <Templates /> : <Navigate to={'/elements'} />} /> */}
                </Route>

                <Route path={'*'} element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    )
}

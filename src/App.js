<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from './Routes';
import { DefaultLayout} from './components/Layouts';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from './Routes';
import { DefaultLayout } from './components/layouts';
>>>>>>> alpha

function App() {
    
    return (
        <BrowserRouter>
<<<<<<< HEAD
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
=======
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
>>>>>>> alpha
        </BrowserRouter>
    );
}

export default App;

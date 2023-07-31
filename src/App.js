import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRotes } from './Routes';

import DefaultLayout from './componets/Layouts/DefaultLayout';
import OnlyHeader from './componets/Layouts/OnlyHeader';
import Nolayout from './componets/Layouts/Nolayout';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRotes.map((route, index) => {
                        const Page = route.component;

                        

                        let Layout = DefaultLayout;

                        if(route.layout === 'onlyheader') {
                            Layout = OnlyHeader;
                        } else if(route.layout === 'nolayout') {
                            Layout = Nolayout;
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
        </BrowserRouter>
    );
}

export default App;

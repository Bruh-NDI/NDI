import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home.tsx'
import {Data} from './Pages/Data/Data.tsx'

import "./main.css"
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout/Layout.tsx";
import Test from "./Pages/Test/Test.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <MantineProvider defaultColorScheme={"dark"}
                     theme={{
                         primaryColor: 'bright-green',
                         colors: {
                             'bright-green': [
                                 "#effee7",
                                 "#e0f8d4",
                                 "#c2efab",
                                 "#a2e67e",
                                 "#87de57",
                                 "#75d940",
                                 "#6bd731",
                                 "#59be23",
                                 "#4da91b",
                                 "#3d920c"
                             ]
                         },
                     }}
    >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/test"} element={<Test/>}/>
                    <Route path={"/data"} element={<Data/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)

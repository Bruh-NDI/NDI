import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home.tsx'

import "./main.css"
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <MantineProvider defaultColorScheme={"dark"}>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)

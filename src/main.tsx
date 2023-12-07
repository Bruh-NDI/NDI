import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home.tsx'

import "./main.css"
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Game from "./Pages/Home/Game.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <MantineProvider defaultColorScheme={"dark"}>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Game/>}/>
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)

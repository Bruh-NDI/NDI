import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home.tsx'
import {Data} from './Pages/Data/Data.tsx'

import "./main.css"
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout/Layout.tsx";
import {About} from "./Pages/About/About.tsx";
import Game from "./Pages/Home/Game.tsx";

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
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/data"} element={<Data/>}/>
                    <Route path={"/game"} element={<Game/>}/>
                    <Route path={"/about"} element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </MantineProvider>
)

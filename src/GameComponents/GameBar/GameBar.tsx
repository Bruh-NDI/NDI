import {Compteur} from "../Compteur/Compteur.tsx";
import {Date} from "../Date/Date.tsx";

type InfoNavabar = {
    euro: number
    co2: number
    social: number
    date: number
}

export function GameBar({euro, co2, social, date}: InfoNavabar) {
    return (
        <div className="w-full h-full">
            <div className="container mx-auto flex justify-between items-center p-2">
                <Date Value={date} id="date"/>
                <Compteur Value={social} Type="Million d'habitant" id="social"/>
                <Compteur Value={euro} Type="%€" id="euro"/>
                <Compteur Value={co2} Type="ppm" id="CO2"/>
            </div>
        </div>
    )
}
import {Compteur} from "../Compteur/Compteur.tsx";

type InfoNavabar = {
    euro: number
    co2: number
}

export function GameBar({euro, co2}: InfoNavabar) {
    return (
        <div className="w-full h-full">
            <div className="container mx-auto flex justify-between items-center p-2">
                param
                date
                <Compteur Value={euro} Type="€" id="euro"/>
                <Compteur Value={co2} Type="kg/Atmos" id="CO2"/>
                nomVille
            </div>
        </div>
    )
}
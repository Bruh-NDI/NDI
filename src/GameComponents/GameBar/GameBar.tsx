import {Divider, Text} from "@mantine/core"
import {Compteur} from "../Compteur/Compteur.tsx";
import React from "react";

type InfoNavabar = {
    euro: number
    co2: number
    social: number
    date: number
}

export function GameBar({euro, co2, social, date}: InfoNavabar) {
    return (
        <div className="w-full h-full flex items-center justify-center flex-col pb-4 z-50">
            <div className="container mx-auto flex justify-between items-center py-2 mb-2">
                <Compteur Value={social + " million"} title={"Habitants"}/>
                <Compteur Value={euro + "€"} title={"PIB"}/>
                <Compteur Value={co2 + " PPM"} title={"Pollution"}/>
            </div>
            <Divider className={"w-full py-2"}/>
            <Text fw={700}>Année {date}</Text>
        </div>
    )
}
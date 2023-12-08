import Map from "../../components/map/Map.tsx";
import {Pie} from "../../components/graphs/pie.tsx";

const data = [
    {
        id: "java",
        label: "java",
        value: 195,
        color: "hsl(90, 70%, 50%)"
    },
    {
        id: "erlang",
        label: "erlang",
        value: 419,
        color: "hsl(56, 70%, 50%)"
    },
    {
        id: "ruby",
        label: "ruby",
        value: 407,
        color: "hsl(103, 70%, 50%)"
    },
    {
        id: "haskell",
        label: "haskell",
        value: 474,
        color: "hsl(186, 70%, 50%)"
    },
    {
        id: "go",
        label: "go",
        value: 71,
        color: "hsl(104, 70%, 50%)"
    }
];

export function Data() {
    return (
        <>
            <div className="flex flex-col space-y-12 justify-center items-center p-8 w-full">
                <div className="flex flex-col space-y-12 justify-center items-start p-8 w-1/2">
                    <h2 className="text-4xl font-bold">Émissions de gaz à effet de serre des installations soumises à
                        quota de l'UE</h2>
                    <p className="text-lg text-justify">
                        Les émissions de gaz à effet de serre des installations soumises à quota de l'UE sont
                        surveillées et rapportées chaque année par les exploitants. Les données sont vérifiées par les
                        autorités nationales et l'Agence européenne pour l'environnement, et rendues publiques par la
                        Commission européenne.
                    </p>
                    <p className="text-lg text-justify">
                        Les données sont disponibles pour les années 2013 à 2019, et sont présentées par pays, par
                        secteur et par installation.
                    </p>
                </div>

                <span className="w-1/2 h-1 bg-gray-900"/>

                <div className="flex flex-col space-y-12 justify-center items-start p-8 w-1/2 h-full">
                    <h2 className="text-4xl font-bold">Visualisation des données sur une carte</h2>
                    <p className="text-lg text-justify">
                        Les données sont disponibles pour les années 2015 à 2022, et sont présentées par pays, par
                        secteur et par installation.
                    </p>
                    <div className="flex relative justify-center w-full h-screen">
                        <Map/>
                    </div>
                </div>

                <span className="w-1/2 h-1 bg-gray-900"/>

                <div className="flex flex-col space-y-12 justify-center items-start p-8 w-1/2">
                    <h2 className="text-4xl font-bold">Visualisation des données sur un graphique</h2>
                    <p className="text-lg text-justify">
                        Les données sont disponibles pour les années 2013 à 2019, et sont présentées par pays, par
                        secteur et par installation.
                    </p>
                </div>
                <div style={{height: 500, width: "100%"}}>
                    <Pie data={data}/>
                </div>
            </div>
        </>
    )
}
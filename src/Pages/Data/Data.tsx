import Map from "../../components/map/Map.tsx";
import {useEffect, useState} from "react";
import {Pie} from "../../components/graphs/pie.tsx";
import {Bar} from "../../components/graphs/bar.tsx";

const dt = [
    {
        "country": "AD",
        "hot dog": 193,
        "hot dogColor": "hsl(250, 70%, 50%)",
        "burger": 141,
        "burgerColor": "hsl(164, 70%, 50%)",
        "sandwich": 94,
        "sandwichColor": "hsl(147, 70%, 50%)",
        "kebab": 7,
        "kebabColor": "hsl(191, 70%, 50%)",
        "fries": 44,
        "friesColor": "hsl(37, 70%, 50%)",
        "donut": 16,
        "donutColor": "hsl(322, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 50,
        "hot dogColor": "hsl(243, 70%, 50%)",
        "burger": 196,
        "burgerColor": "hsl(317, 70%, 50%)",
        "sandwich": 6,
        "sandwichColor": "hsl(91, 70%, 50%)",
        "kebab": 194,
        "kebabColor": "hsl(338, 70%, 50%)",
        "fries": 186,
        "friesColor": "hsl(209, 70%, 50%)",
        "donut": 138,
        "donutColor": "hsl(305, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 15,
        "hot dogColor": "hsl(221, 70%, 50%)",
        "burger": 167,
        "burgerColor": "hsl(354, 70%, 50%)",
        "sandwich": 79,
        "sandwichColor": "hsl(212, 70%, 50%)",
        "kebab": 120,
        "kebabColor": "hsl(194, 70%, 50%)",
        "fries": 184,
        "friesColor": "hsl(269, 70%, 50%)",
        "donut": 59,
        "donutColor": "hsl(208, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 34,
        "hot dogColor": "hsl(323, 70%, 50%)",
        "burger": 13,
        "burgerColor": "hsl(80, 70%, 50%)",
        "sandwich": 82,
        "sandwichColor": "hsl(63, 70%, 50%)",
        "kebab": 129,
        "kebabColor": "hsl(48, 70%, 50%)",
        "fries": 176,
        "friesColor": "hsl(101, 70%, 50%)",
        "donut": 135,
        "donutColor": "hsl(183, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 169,
        "hot dogColor": "hsl(69, 70%, 50%)",
        "burger": 5,
        "burgerColor": "hsl(168, 70%, 50%)",
        "sandwich": 92,
        "sandwichColor": "hsl(78, 70%, 50%)",
        "kebab": 48,
        "kebabColor": "hsl(21, 70%, 50%)",
        "fries": 79,
        "friesColor": "hsl(182, 70%, 50%)",
        "donut": 47,
        "donutColor": "hsl(176, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 154,
        "hot dogColor": "hsl(28, 70%, 50%)",
        "burger": 152,
        "burgerColor": "hsl(337, 70%, 50%)",
        "sandwich": 37,
        "sandwichColor": "hsl(330, 70%, 50%)",
        "kebab": 46,
        "kebabColor": "hsl(151, 70%, 50%)",
        "fries": 14,
        "friesColor": "hsl(77, 70%, 50%)",
        "donut": 106,
        "donutColor": "hsl(180, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 90,
        "hot dogColor": "hsl(336, 70%, 50%)",
        "burger": 136,
        "burgerColor": "hsl(285, 70%, 50%)",
        "sandwich": 47,
        "sandwichColor": "hsl(36, 70%, 50%)",
        "kebab": 162,
        "kebabColor": "hsl(280, 70%, 50%)",
        "fries": 4,
        "friesColor": "hsl(57, 70%, 50%)",
        "donut": 123,
        "donutColor": "hsl(253, 70%, 50%)"
    }
]

export function Data() {
    const [data, setData] = useState(null)
    const [pieData, setPieData] = useState(null)
    const [barData, setBarData] = useState(null)
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/cedricr/eutl/main/export/emissions-FR-geo.geojson')
            .then(response => response.json())
            .then(dt => {
                setData(dt)
            })
    }, []);

    useEffect(() => {
        if (!data) return
        const res = {}
        data.features.forEach(d => {
            if (res[d.properties.kind])
                res[d.properties.kind] += d.properties.emissions
            else
                res[d.properties.kind] = d.properties.emissions
        })
        const datas = []
        for (const [key, value] of Object.entries(res)) {
            datas.push({
                id: key,
                label: key,
                value: value
            })
        }
        setPieData(datas)

        const result = data.features.reduce((acc, entry) => {
            const year = entry.properties.year.toString();
            const kind = entry.properties.kind;

            // Créer une entrée pour l'année si elle n'existe pas encore
            if (!acc[year]) {
                acc[year] = {};
            }

            // Ajouter ou incrémenter les émissions pour le secteur donné
            if (!acc[year][kind]) {
                acc[year][kind] = entry.properties.emissions / 1000000;
            } else {
                acc[year][kind] += entry.properties.emissions / 1000000;
            }

            return acc;
        }, {});

        const formattedResult = Object.entries(result).map(([year, values]) => ({
            year,
            // @ts-ignore
            ...values,
        }));

        setBarData(formattedResult)

    }, [data]);

    return (
        <>
            <div className="flex flex-col space-y-12 justify-center items-center py-8 w-full">
                <div className="flex flex-col space-y-12 justify-center items-start w-3/4">
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
                    <span className="w-full h-1 bg-gray-900"/>
                    <div className="flex flex-col space-y-12 justify-center items-start w-full h-full">
                        <h2 className="text-4xl font-bold">Visualisation des données sur une carte</h2>
                        <p className="text-lg text-justify">
                            Les données sont disponibles pour les années 2015 à 2022, et sont présentées par pays, par
                            secteur et par installation.
                        </p>
                        <div className="flex relative justify-center w-full h-[600px]">
                            {data ? <Map data={data}/> : "Loading..."}
                        </div>
                    </div>
                    <span className="w-full h-1 bg-gray-900"/>
                    <div className="flex flex-col space-y-12 justify-center items-start p-8 w-full">
                        <h2 className="text-4xl font-bold">Visualisation des données sur un graphique</h2>
                        <p className="text-lg text-justify">
                            Les données sont disponibles pour les années 2013 à 2019, et sont présentées par pays, par
                            secteur et par installation.
                        </p>
                        {pieData ? <Pie data={pieData}
                                        title={"Emissions par industrie en France en million de tonnes de CO2"}/> : "Loading..."}
                        {barData ? <Bar data={barData}
                                        title={"Emissions par industrie en France par année en million de tonnes de CO2"}/> : "Loading..."}

                    </div>
                </div>
            </div>
        </>
    )
}
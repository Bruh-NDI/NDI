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
                    <h2 className="text-5xl font-bold">Émissions de gaz à effet de serre des installations soumises à
                        quota de l'UE (SEQE-UE / EU ETS)</h2>
                    <p className="text-xl text-justify">
                        Les gaz à effet de serre sont des gaz présents dans l'atmosphère terrestre qui jouent un rôle
                        crucial dans le maintien de la chaleur sur notre planète. Parmi les principaux gaz à effet de
                        serre naturels, on retrouve la vapeur d'eau, le dioxyde de carbone (CO2) et le méthane (CH4).
                        Cependant, depuis la révolution industrielle, les activités humaines ont considérablement
                        augmenté les concentrations de ces gaz dans l'atmosphère.
                    </p>
                    <p className="text-xl text-justify">
                        Il est essentiel de réduire ces émissions de gaz à effet de serre afin de limiter les effets
                        néfastes du réchauffement climatique. Selon le GIEC, il faudrait réduire les émissions mondiales
                        de gaz à effet de serre de 45% d'ici 2030 par rapport à 2010 pour limiter le réchauffement
                        climatique à 1,5°C. Cela nécessite des efforts conjoints à l'échelle mondiale pour adopter des
                        pratiques durables et promouvoir les énergies renouvelables afin de réduire notre dépendance aux
                        combustibles fossiles et de préserver notre planète pour les générations futures.
                    </p>
                    <span className="w-full h-1 bg-gray-900"/>
                    <div className="flex flex-col space-y-12 justify-center items-start w-full">
                        <h2 className="text-4xl font-bold">Introduction</h2>
                        <p className="text-xl text-justify">
                            Nous avons utilisé une démarche qui consiste à récupérer des données OpenData en utilisant
                            des APIs, telles que data.gouv.fr. Nous avons recherché des données géographiques en rapport
                            avec le thème de la nuit de l'info, que nous avons ensuite utilisées dans notre application.
                            Ces données ont été mises en forme et affichées sur des cartes en utilisant les APIs
                            disponibles.
                        </p>
                        <p className="text-xl text-justify">
                            Les données que nous avons utilisées concernent les émissions de gaz à effet de serre des
                            installations soumises à quota de l'UE. Chaque année, les exploitants de ces installations
                            rapportent ces émissions, qui sont ensuite vérifiées par les autorités nationales et
                            l'Agence européenne pour l'environnement. La Commission européenne publie ensuite ces
                            données, qui sont disponibles pour les années 2013 à 2019. Elles sont présentées par pays,
                            par secteur et par installation.
                        </p>
                        <p className="text-xl text-justify">
                            Nous avons utilisé ces données pour créer une visualisation sur une carte, où les émissions
                            de gaz à effet de serre sont représentées de manière dynamique. Nous avons utilisé une
                            symbologie adaptée pour rendre la carte claire et facile à comprendre. Cette
                            visualisation nous permet de mieux comprendre les émissions de gaz à effet de serre et peut
                            faciliter la prise de décision en fournissant des indicateurs pertinents.
                        </p>
                        <p className="text-xl text-justify">
                            En plus de la visualisation sur carte, nous avons également créé des graphiques pour mieux
                            analyser les données. Nous avons utilisé des diagrammes circulaires et des diagrammes à
                            barres pour représenter les émissions de gaz à effet de serre par industrie en France, en
                            mettant en évidence les variations au fil des années.
                        </p>
                    </div>
                    <span className="w-full h-1 bg-gray-900"/>
                    <div className="flex flex-col space-y-12 justify-center items-start w-full h-full">
                        <h2 className="text-4xl font-bold">Visualisation des données sur une carte</h2>
                        <p className="text-xl text-justify">
                            Les données sont disponibles pour les années 2005 à 2022, pour toute la France (DOM-TOM
                            compris) et sont présentées par
                            secteur et par installation. Il est même possible de cliquer sur les points pour obtenir
                            plus d'informations sur l'installation ainsi
                            que sur les émissions de gaz à effet de serre.
                        </p>
                        <div className="flex relative justify-center w-full h-[600px]">
                            {data ? <Map data={data}/> : "Loading..."}
                        </div>
                    </div>
                    <span className="w-full h-1 bg-gray-900"/>
                    <div className="flex flex-col space-y-12 justify-center items-start w-full">
                        <h2 className="text-4xl font-bold">Visualisation des données sur des graphique</h2>
                        <p className="text-xl text-justify">
                            Afin d'obtenir des données plus précises sur les émissions de gaz à effet de serre, nous
                            avons créé des graphiques à partir des données
                            disponibles. Ces graphiques nous permettent de mieux comprendre les émissions de gaz à effet
                            de serre par industrie en France, en mettant
                            en évidence les variations au fil des années et en comparant les émissions de gaz à effet de
                            serre par industrie.
                        </p>
                        <p className="text-xl text-justify">
                            Voici un diagramme circulaire qui représente les émissions de gaz à effet de serre par
                            industrie en France en million de tonnes de CO2.
                            On peut voir que les émissions de gaz à effet de serre sont principalement causées par les
                            installations de combustion, suivies par les
                            installations de production d'électricité et de chaleur. Les émissions de gaz à effet de
                            serre sont les plus faibles pour les
                            installations de production de métaux ferreux et de minéraux non métalliques.
                        </p>
                        {pieData ? <Pie data={pieData}
                                        title={"Emissions par industrie en France en million de tonnes de CO2"}/> : "Loading..."}

                        <p className="text-xl text-justify">
                            Voici un diagramme à barres qui représente les émissions de gaz à effet de serre par
                            industrie en France par année en million de tonnes de CO2.
                            On peut voir que les émissions de gaz à effet de serre chutent avec le temps ce qui est une
                            bonne chose.
                            Encore une fois au fil des années, les émissions de gaz à effet de serre sont principalement
                            causées par les
                            installations de combustion, suivies par les installations de production d'électricité et de
                            chaleur.
                            Les émissions de gaz à effet de serre sont les plus faibles pour les installations de
                            production de métaux ferreux et de minéraux non métalliques.
                        </p>
                        {barData ? <Bar data={barData}
                                        title={"Emissions par industrie en France par année en million de tonnes de CO2"}/> : "Loading..."}
                    </div>
                    <span className="w-full h-1 bg-gray-900"/>
                    <div className="flex flex-col space-y-12 justify-center items-start w-full">
                        <h2 className="text-4xl font-bold">Conclusion</h2>
                        <p className="text-xl text-justify">
                            Maintenant que nous avons identifié les industries qui émettent le plus de gaz à effet de
                            serre, nous pouvons nous concentrer sur ces industries et essayer de trouver des solutions
                            pour réduire les émissions de gaz à effet de serre.
                            Comme solution, nous pouvons utiliser des énergies renouvelables, telles que l'énergie
                            solaire, l'énergie éolienne, l'énergie hydraulique et bien d'autres. Nous pouvons également
                            utiliser des énergies renouvelables pour produire de l'électricité et de la chaleur qui sont
                            les principales causes des émissions de gaz à effet de serre.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
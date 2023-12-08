
export const dialogues: any = {
    '0': [{text: "Bonjour, monsieur le president", nomPersonnage: "Premier Ministre", id: "1"},
        {text: "Bonjour, monsieur le premier ministre", nomPersonnage: "President", id: "2"},
        {
            text: "La demande en énergie de votre ville est croissante. Comment souhaitez-vous répondre à cette demande tout en minimisant l'impact environnemental ?",
            nomPersonnage: "Premier Ministre",
            id: "3"
        }],
    '1': [{text: "Monsieur le président grâce à votre choix notre ville est devenu extrèmement atractive, de nombreux nouveaux habitants arrivent !", nomPersonnage: "Premier Ministre", id:"4"},
        {text: "Il faut croire que je ne suis pas si mauvais comme président.", nomPersonnage: "President", id: "5"},
        {
        text: "Certes mais la biodiversité de votre ville est menacée par l'expansion urbaine. Comment souhaitez-vous gérer le développement tout en préservant l'environnement ?",
        nomPersonnage: "Premier Ministre",
        id: "6"
    }],
    '2': [{text:"Malgrès tous nos efforts pour préserver l'environnement nous faisont face à de nombreuses incivilités", nomPersonnage: "Premier Ministre", id:"7"},
        {text: "Saperlipopette !!! Si seulement les gens pouvaient faire preuve d'un peu d'efforts individuels mon travail serait plus facile.", nomPersonnage: "President", id: "8"},
        {
        text: "Les déchets plastiques sont un problème croissant dans votre ville. Comment souhaitez-vous aborder cette question pour minimiser l'impact écologique ?",
        nomPersonnage: "Premier Ministre",
        id: "9"
    }],
    '3': [{text:"L'accroissement de la population entraine de plus grande consommation de ressources au sein de notre ville.", nomPersonnage: "Premier Ministre", id:"10"},
        {text: "Il faut faire quelque chose ou nous risquons la pénurie !", nomPersonnage: "President", id: "11"},
        {
        text: "La demande en eau de votre ville excède la capacité des ressources locales. Comment souhaitez-vous gérer cette crise tout en préservant l'écosystème aquatique ? \n",
        nomPersonnage: "Premier Ministre",
        id: "12"
    }],
    '4': [{text:"Votre ville est de plus en plus fourmillante de vie, le travail y est prospère. Cependant cela peut engendrer de lourdes conséquences sur le climat.", nomPersonnage: "Premier Ministre", id:"13"},
        {text:"La rançon de la gloire comme on dit.", nomPersonnage: "President", id:"14"},
        {
        text: "Les transports individuels contribuent fortement aux émissions de carbone de votre ville. Comment souhaitez-vous encourager des modes de déplacement plus durables ? ",
        nomPersonnage: "Premier Ministre",
        id: "15"
    }],
    '5': [{text:"Vos effort ont permit de faire évoluer la situation mais le problème d'émission de gaz à effet de serra n'est pas encore résolu.", nomPersonnage: "Premier Ministre", id:"16"},
        {text:"Comment ça ? Nous avons prit des mesure contre la polution lié aux véhicules, que peut-on faire de plus ?", nomPersonnage: "President", id:"17"},
        {
        text: "L'industrie locale est une source majeure de pollution. Comment souhaitez-vous équilibrer le soutien économique et la protection de l'environnement ? \n",
        nomPersonnage: "Premier Ministre",
        id: "18"
    }],
}

export const boutonsReponses : any = {
    '1': [
        {
            text: "Investir massivement dans les énergies renouvelables.",
            id: "reponse1",
            date: 5,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: 8,
            getSocial: 3,
            getEconomie: -7,
        },
        {
            text: "Continuer à dépendre des combustibles fossiles pour maintenir la stabilité économique.",
            id: "reponse2",
            date: 1,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: -6,
            getSocial: -1,
            getEconomie: 6
        },
        {
            text: "Encourager la conservation d'énergie sans investir dans de nouvelles sources.",
            id: "reponse3",
            date: 2,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: -2,
            getSocial: 1,
            getEconomie: 1
        }
    ],
    '2': [
        {
            text: "Mettre en place des zones de protection pour la faune et la flore",
            id: "reponse1",
            date: 7,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: 9,
            getSocial: 2,
            getEconomie: -10
        },
        {
            text: "Autoriser la construction sur des zones naturelles pour stimuler l'économie locale.",
            id: "reponse2",
            date: 4,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: -8,
            getSocial: -3,
            getEconomie: 15
        },
        {
            text: "Ignorer les préoccupations environnementales pour accélérer le développement urbain.",
            id: "reponse3",
            date: 6,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: -10,
            getSocial: 0,
            getEconomie: 10
        }
    ],
    '3': [
        {
            text: "Mettre en œuvre des politiques strictes de recyclage et de réduction des déchets.",
            id: "reponse1",
            date: 5,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: 7,
            getSocial: 3,
            getEconomie: -4
        },
        {
            text: "Ignorer le problème des plastiques à usage unique pour favoriser l'industrie locale.",
            id: "reponse2",
            date: 3,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: -5,
            getSocial: -2,
            getEconomie: 6
        },
        {
            text: "Encourager la production de plastiques biodégradables sans politiques strictes.",
            id: "reponse3",
            date: 4,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: 3,
            getSocial: 1,
            getEconomie: -2
        }
    ],
    '4': [
        {
            text: "Encourager la conservation de l'eau et investir dans des sources alternatives. ",
            id: "reponse1",
            date: 6,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: 8,
            getSocial: 2,
            getEconomie: -8
        },
        {
            text: "Exploiter davantage les ressources en eau actuelles pour répondre à la demande.\n",
            id: "reponse2",
            date: 3,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: -4,
            getSocial: 0,
            getEconomie: 5
        },
        {
            text: "Ignorer les problèmes liés à la consommation d'eau pour favoriser l'industrie.",
            id: "reponse3",
            date: 5,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: -10,
            getSocial: 2,
            getEconomie: 9
        }
    ],
    '5': [
        {
            text: "Développer un réseau de transports publics efficace.",
            id: "reponse1",
            date: 4,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: 6,
            getSocial: 4,
            getEconomie: -7
        },
        {
            text: "Continuer à favoriser les voitures individuelles pour soutenir l'industrie automobile.",
            id: "reponse2",
            date: 2,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: -5,
            getSocial: 3,
            getEconomie: 8
        },
        {
            text: "Ignorer les problèmes liés à la circulation pour se concentrer sur d'autres priorités.",
            id: "reponse3",
            date: 3,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: -8,
            getSocial: -4,
            getEconomie: 10
        }
    ],
    '6': [
        {
            text: "Mettre en place des normes strictes d'émissions pour les industries.",
            id: "reponse1",
            date: 7,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: 9,
            getSocial: 3,
            getEconomie: -5
        },
        {
            text: "Ignorer les problèmes environnementaux pour maintenir la compétitivité économique.",
            id: "reponse2",
            date: 8,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: -10,
            getSocial: -5,
            getEconomie: 12
        },
        {
            text: "Encourager les industries à adopter des pratiques plus durables sans réglementation stricte.",
            id: "reponse3",
            date: 4,  // Exemple de valeur, ajustez selon vos besoins
            getEcolo: 2,
            getSocial: 1,
            getEconomie: 3
        }
    ],
};

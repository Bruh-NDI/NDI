import {Container, Title, Accordion} from '@mantine/core';
import classes from '../../style/FaqSimple.module.css';

const placeholder =[
    {placeholder:
        'Les énergies renouvelables. Potentiel solaire: production de 680 TWh d\'électricité en France en 2050 soit 2 fois la consommation actuelle. Baisse des coûts de 85% depuis 2010 à moins de 50€/MWh. Potentiel éolien: production de 150 TWh en 2050 soit 40% de la consommation. Coût divisé par 3 depuis 2010 à moins de 60€/MWh. Impact: réduction de 60% des émissions du secteur énergétique d\'ici 2030 par rapport à 2019, permettant d\'atteindre la neutralité carbone en 2050.'},
    {placeholder:
        'L\'efficacité énergétique. Potentiel du bâtiment: rénovation globale de 700 000 logements par an d\'ici 2030 permettant -25% de consommation soit -125 TWh/an en France. Coût de la rénovation: travaux à 25 000€ en moyenne financés à 40% par des économies sur les factures. Impact: économies de 14 Mds€/an sur les factures des ménages et -4,5 MtCO2/an.'},
    {placeholder:
        'La mobilité durable. Développement du vélo: doublement de la part modale à 15% en ville permettant -15% d\'émissions. Renforcement des transports en commun: doublement de l\'offre ferroviaire permettant transfert de 10% du trafic routier. Electrification des voitures: 30% du parc roulant électrique en 2030 permettant -15% d\'émissions routières. Impact: réduction de 25% des émissions du secteur transport d\'ici 2030.'},
    {placeholder:
        'L\'agriculture durable. Potentiel des prairies permanentes: stockage de 0,5Gt CO2/an en France via pâturage des bovins. Potentiel de l\'agroforesterie: stockage de 0,3Gt CO2/an supplémentaire en plantant 100 000 km de haies. Impact: stockage total de 1Gt CO2/an en France grâce aux pratiques agroécologiques.'},
]
export function FaqSimple() {
    return (
        <div className={'w-full'}>
            <div className={'max-w-6xl mx-auto'}>
                <Title ta="center" className={classes.title}>
                   Les solutions efficaces
                </Title>

                <Accordion variant="separated">
                    <Accordion.Item className={classes.item} value="reset-password">
                        <Accordion.Control>Le GIEC estime que le potentiel d'atténuation des énergies solaire et éolienne d'ici 2030 est beaucoup plus élevé que celui du nucléaire, avec un coût bien inférieur.
                        </Accordion.Control>
                        <Accordion.Panel>{placeholder[0].placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="another-account">
                        <Accordion.Control>La rénovation énergétique des bâtiments est un levier majeur identifié par le GIEC.</Accordion.Control>
                        <Accordion.Panel>{placeholder[1].placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="newsletter">
                        <Accordion.Control>Le GIEC met en avant le potentiel du vélo, des transports en commun et de l'électrification des véhicules.</Accordion.Control>
                        <Accordion.Panel>{placeholder[2].placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="credit-card">
                        <Accordion.Control>Les pratiques agroécologiques et l'agroforesterie sont des solutions identifiées.</Accordion.Control>
                        <Accordion.Panel>{placeholder[3].placeholder}</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}
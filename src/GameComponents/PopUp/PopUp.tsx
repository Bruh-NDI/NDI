import React from 'react';
import {Card} from "@mantine/core";
import {Link} from "react-router-dom";

type PopUpProps = {
    choices: string[];
    valeurEcologie: number;
    valeurEconomie: number;
    valeurSocial: number;
    textDeFin: string;
};

const PopUp: React.FC<PopUpProps> = ({choices, valeurEcologie, valeurEconomie, valeurSocial, textDeFin}) => {
    // Fonction pour déterminer si la réponse de l'utilisateur est correcte
    const isCorrectAnswer = (choice: string) => {
        // Ajoutez votre logique pour déterminer si la réponse est correcte
        // Dans cet exemple, je suppose que la réponse est correcte si la valeur d'écologie est positive
        return valeurEcologie > 0;
    };

    return (
        <div className="popup h-full w-full absolute top-0 left-0 flex justify-center items-center" style={{
            zIndex: 1000
        }}>
            <Card withBorder className={" w-[400px] overflow-y-auto"}>
                <div className={"flex flex-col gap-1"}>
                    <h2>Résumé de vos choix :</h2>
                    <ul>
                        {choices.map((choice, index) => (
                            <li key={index}>
                                {choice} - {isCorrectAnswer(choice) ? 'Correct' : 'Incorrect'}
                            </li>
                        ))}
                    </ul>
                    <h3>Résultats :</h3>
                    <p>Valeur Écologie : {valeurEcologie}</p>
                    <p>Valeur Économie : {valeurEconomie}</p>
                    <p>Valeur Sociale : {valeurSocial}</p>
                    <h3>{textDeFin}</h3>
                </div>
                <Link to={"/"}>Terminer</Link>
            </Card>
        </div>
    );
};

export default PopUp;

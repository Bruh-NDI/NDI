import React from 'react';

type PopUpProps = {
    choices: string[];
    valeurEcologie: number;
    valeurEconomie: number;
    valeurSocial: number;
    textDeFin: string;
};

const PopUp: React.FC<PopUpProps> = ({ choices, valeurEcologie, valeurEconomie, valeurSocial, textDeFin }) => {
    // Fonction pour déterminer si la réponse de l'utilisateur est correcte
    const isCorrectAnswer = (choice: string) => {
        // Ajoutez votre logique pour déterminer si la réponse est correcte
        // Dans cet exemple, je suppose que la réponse est correcte si la valeur d'écologie est positive
        return valeurEcologie > 0;
    };

    return (
        <div className="popup">
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
    );
};

export default PopUp;
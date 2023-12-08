import React from 'react';
import {boutonsReponses} from "../GameBar/data/data.ts";
import {Button, Card} from "@mantine/core";

type PopUpProps = {
    choices: any[];
    valeurEcologie: number;
    valeurEconomie: number;
    valeurSocial: number;
    textDeFin: string;
};


const PopUp: React.FC<PopUpProps> = ({choices, valeurEcologie, valeurEconomie, valeurSocial, textDeFin}) => {
    return (
        <div className="popup h-full w-full absolute top-0 left-0 flex justify-center items-center" style={{
            zIndex: 1000
        }}>
            <Card withBorder className={" w-[900px] overflow-y-auto"}>
                <div className={"flex flex-col gap-1"}>
                    <h2>Résumé de vos choix :</h2>
                    <ul>
                        {choices.map((choice, index) => (
                            <li key={index} style={{color: choice.correct ? 'green' : 'red', whiteSpace: 'pre-line'}}>
                                    <span style={{color: choice.correct ? 'green' : 'red'}}>
                                        Votre Reponse: {' '}
                    </span>
                                {choice.text} - {choice.correct ? 'Correct\n' : 'Incorrect\n'}
                                {!choice.correct && (
                                    <>
                                        {boutonsReponses[index + 1].map((reponse, reponseIndex) => (
                                            <div key={reponseIndex} style={{color: 'green'}}>
                                                {reponse.correct && (
                                                    <div>
                                                          <span style={{color: 'green'}}>
                      Correct Answer: {' '}
                    </span>
                                                        {reponse.text}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                    <h3>Résultats :</h3>
                    <div className="flex justify-between space-x-3 p-5">
                        <p className="rounded-md p-2 w-fit bg-green-200 text-green-700">Valeur Écologie
                            : {valeurEcologie}</p>
                        <p className="rounded-md p-2 w-fit bg-yellow-200 text-yellow-700">Valeur Économie
                            : {valeurEconomie}</p>
                        <p className="rounded-md p-2 w-fit bg-blue-200 text-blue-700">Valeur Sociale
                            : {valeurSocial}</p>
                    </div>
                    <h3>{textDeFin}</h3>
                </div>
                <Button component={"a"} href={"/"}>Terminer</Button>
            </Card>
        </div>
    );
};


export default PopUp;

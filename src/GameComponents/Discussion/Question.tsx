import React, { useState, useEffect } from 'react';
import { QuestionProps } from "./Discussion.tsx";

const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        setDisplayText('' + text.charAt(0)); // Réinitialiser displayText lorsque text change

        let i = 0; // Commencer à l'index 0 pour afficher la première lettre
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prevText => prevText + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    return displayText;
};


export function Question({
                             question,
                             showNext,
                         }: {
    question: QuestionProps;
    showNext: () => void;
}): any {
    // Vérifier si question est défini et si la propriété 'id' est présente
    if (!question || !question.id) {
        console.error("Question or id is undefined");
        return null; // ou un rendu par défaut
    }

    const text = question.nomPersonnage + " : " + question.text
    const displayText = useTypewriter(text, 17);

    return (
        <div id={question.id} onClick={showNext} className="w-[60%] bg-white h-full cursor-pointer rounded-se-2xl border-2 border-black rounded-md p-[3px]">
            <p className="z-50 font-bold text-black break-normal">{displayText}</p>
        </div>
    );
}

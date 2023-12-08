import React from "react";
import { QuestionProps } from "./Discussion.tsx";

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

    return (
        <div id={question.id} className="absolute bottom-10" onClick={showNext}>
            <p className="z-50 font-bold text-black">
                {question.nomPersonnage} : {question.text}
            </p>
        </div>
    );
}

import React from "react";
import {QuestionProps} from "./Discussion.tsx";

export function Question({question, showNext}:{question: QuestionProps, showNext:
() => void
}): any {
    return (
        <div id={question.id} className="flex bg-gray-500 rounded-b-full" onClick={showNext} >
            <p>{question.nomPersonnage} : {question.text}</p>
        </div>
    )
}
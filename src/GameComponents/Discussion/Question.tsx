import React from "react";
import {QuestionProps} from "./Discussion.tsx";

export function Question({question, showNext}:{question: QuestionProps, showNext:
() => void
}): any {
    return (
        <div id={question.id} className="absolute bottom-10 cursor-pointer" onClick={showNext} >
            <p className="z-50 font-bold text-black">{question.nomPersonnage} : {question.text}</p>
        </div>
    )
}
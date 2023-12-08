import React from "react";
import {QuestionProps} from "./Discussion.tsx";

export function Question({question, showNext}:{question: QuestionProps, showNext:
() => void
}): any {
    return (
        <div id={question.id} onClick={showNext} className="w-[40%] bg-white h-full cursor-pointer rounded-se-2xl">
            <p className="z-50 font-bold text-black ">{question.nomPersonnage} : {question.text}</p>
        </div>
    )
}
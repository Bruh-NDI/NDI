import React, {useState} from "react";
import {Question} from "./Question.tsx";

export type ArrayOfQuestions = {
    array: QuestionProps[]
}

export type QuestionProps = {
    nomPersonnage: string
    text: string
    id: string
}


export function Discussion({dialogues, setEndOfDialogue}:{dialogues:any , setEndOfDialogue: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [CurrentQuestion, setCurrentQuestion] = useState(0)

    const ShowNext = () => {
        if (CurrentQuestion < dialogues.length - 1) setCurrentQuestion(CurrentQuestion + 1)
        else setEndOfDialogue(true);
    }

    return (
        <div>
            <Question question={dialogues[CurrentQuestion]} showNext={ShowNext}/>
        </div>
    )
}


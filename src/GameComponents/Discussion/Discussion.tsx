import React, {useState} from "react";
import {Question} from "./Question.tsx";

export type ArrayOfQuestions = {
    array: QuestionProps[];
};

export type QuestionProps = {
    nomPersonnage: string;
    text: string;
    id: string;
};

export function Discussion({
                               dialogues,
                               setEndOfDialogue,
                                actualDiscussion,
                                setActualDiscussion
                           }: {
    dialogues: any;
    setEndOfDialogue: React.Dispatch<React.SetStateAction<boolean>>;
    actualDiscussion: number;
    setActualDiscussion: React.Dispatch<React.SetStateAction<number>>;
}) {

    const showNext = () => {
        if (actualDiscussion < dialoguesArray.length - 1)
            setActualDiscussion(v => v + 1);
        else setEndOfDialogue(true);
    };

    const dialoguesArray = Object.keys(dialogues).map((key) => dialogues[key]);

    console.log(actualDiscussion);
    console.log(dialoguesArray[actualDiscussion]);
    return (
        <div className=" parent-container flex items-center justify-center container mx-auto absolute bottom-10 h-[100px] w-full">
            <Question question={dialoguesArray[actualDiscussion]} showNext={showNext}/>
        </div>
    );
}

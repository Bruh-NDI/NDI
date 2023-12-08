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
                                actualDiscussion,
                                setActualDiscussion
                           }: {
    dialogues: any;
    actualDiscussion: number;
    setActualDiscussion: React.Dispatch<React.SetStateAction<number>>;
}) {

    const showNext = () => {
        if (actualDiscussion < dialoguesArray.length - 1)
            setActualDiscussion(v => v + 1);
    };

    const dialoguesArray = Object.keys(dialogues).map((key) => dialogues[key]);

    return (
        <div className=" parent-container flex items-center justify-center mx-auto absolute bottom-10 h-[100px] w-full">
            <Question question={dialoguesArray[actualDiscussion]} showNext={showNext}/>
        </div>
    );
}

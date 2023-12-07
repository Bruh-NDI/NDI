import {GameBar} from "../../GameComponents/GameBar/GameBar.tsx";
import {Sprite} from "../../GameComponents/Sprite/Sprite.tsx"
import React, {useState} from "react"
import {Discussion} from "../../GameComponents/Discussion/Discussion.tsx";
import {dialogues} from "../../GameComponents/GameBar/data/data.ts";

function Scene({setEuro, euro, endOfDialogue, setEndOfDialogue}: any) {
    return (
        <>
            <Discussion array={dialogues}/>
            {/*{endOfDialogue && <BoutonReponse array={boutonsReponses} setEuro={setEuro} euro={euro}/>}*/}
        </>
    )
}

export default function Game() {
    const [euro, setEuro] = useState(0)
    const [co2, setCO2] = useState(0)
    const [path] = "/images/president.png"
    const [endOfDialogue, setEndOfDialogue] = useState(false)

    return (
        <>
            <GameBar euro={euro} co2={co2}/>
            <Sprite id={"president"} path={path} alt={"Un monsieur important"}/>
            <Scene setEuro={setEuro} euro={euro} endOfDialogue={endOfDialogue} setEndOfDialogue={setEndOfDialogue}/>
        </>
    )
}
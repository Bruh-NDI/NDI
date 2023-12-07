import {GameBar} from "../../GameComponents/GameBar/GameBar.tsx";
import {Sprite} from "../../GameComponents/Sprite/Sprite.tsx"
import React, {useState} from "react"
import {Discussion} from "../../GameComponents/Discussion/Discussion.tsx";
import {Personnage} from "../../GameComponents/Personnage/Personnage.tsx";
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
    const pathPresident = "public/images/president.png"
    const pathMinistre = "public/images/ministre.png"
    const [endOfDialogue, setEndOfDialogue] = useState(false)

    return (
        <>
            <GameBar euro={euro} co2={co2}/>
            <Personnage id={"president"} path={pathPresident} alt={"Un président important"} position={"right"}/>
            <Personnage id={"ministre"} path={pathMinistre} alt={"Un ministre important"} position={"left"}/>
            <Scene setEuro={setEuro} euro={euro} endOfDialogue={endOfDialogue} setEndOfDialogue={setEndOfDialogue} className=""/>
        </>
    )
}
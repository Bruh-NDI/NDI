import {GameBar} from "../../GameComponents/GameBar/GameBar.tsx";
import {Sprite} from "../../GameComponents/Sprite/Sprite.tsx"
import React, {useEffect, useState} from "react"
import {Discussion} from "../../GameComponents/Discussion/Discussion.tsx";
import {Personnage} from "../../GameComponents/Personnage/Personnage.tsx";
import {dialogues} from "../../GameComponents/GameBar/data/data.ts";

export default function Game() {
    const [euro, setEuro] = useState(0)
    const [co2, setCO2] = useState(0)
    const pathPresident = "images/president.png"
    const pathMinistre = "images/ministre.png"
    const pathBG = "images/bg_intro.jpg"
    const [path] = "/images/president.png"
    const [endOfDialogue, setEndOfDialogue] = useState<boolean>(false)
    const [actualDialogue, setActualDialogue] = useState<number>(0)
    const [actualDiscussion, setActualDiscussion] = useState<number>(0)

    useEffect(() => {
        if (endOfDialogue && actualDialogue < 5) {
            setActualDialogue(v => v + 1)
            setEndOfDialogue(false)
            setActualDiscussion(0)
        }
    }, [endOfDialogue])

    const setTalkingPresident = () => {
        return dialogues[actualDialogue][actualDiscussion].nomPersonnage === "President"
    };

    const setTalkingMinistre = () => {
        return dialogues[actualDialogue][actualDiscussion].nomPersonnage === "Premier Ministre"
    };

    return (
        <>
            <GameBar euro={euro} co2={co2}/>
            <div className="w-full h-screen flex items-center justify-center">
                <Sprite id={"background"} path={pathBG} alt={"Un fond d'écran"} height={"full"} width={"full"}/>
            </div>
            <Personnage id={"president"} path={pathPresident} alt={"Un président important"} position={"right"} talking={setTalkingPresident()}/>
            <Personnage id={"ministre"} path={pathMinistre} alt={"Un ministre important"} position={"left"} talking={setTalkingMinistre()}/>
            <Discussion dialogues={dialogues[actualDialogue]} setEndOfDialogue={setEndOfDialogue} actualDiscussion={actualDiscussion} setActualDiscussion={setActualDiscussion}/>
        </>
    )
}
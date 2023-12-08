import {GameBar} from "../../GameComponents/GameBar/GameBar.tsx";
import {Sprite} from "../../GameComponents/Sprite/Sprite.tsx"
import React, {useEffect, useState} from "react"
import {Discussion} from "../../GameComponents/Discussion/Discussion.tsx";
import {Personnage} from "../../GameComponents/Personnage/Personnage.tsx";
import {dialogues, boutonsReponses} from "../../GameComponents/GameBar/data/data.ts";
import BoutonReponse from "../../GameComponents/BoutonReponse/BoutonReponse.tsx";

export default function Game() {
    const [euro, setEuro] = useState(0)
    const [co2, setCO2] = useState(0)
    const [social, setSocial] = useState(0)
    const pathPresident = "public/images/president.png"
    const pathMinistre = "public/images/ministre.png"
    const pathBG = "public/images/bg_intro.jpg"
    const [path] = "/images/president.png"
    const [endOfDialogue, setEndOfDialogue] = useState<boolean>(false)
    const [actualDialogue, setActualDialogue] = useState<number>(0)
    const [actualDiscussion, setActualDiscussion] = useState<number>(0)
    const [response, setResponse] = useState<boolean>(false)
    const reponseUser = [];

    useEffect(() => {
        if (endOfDialogue && actualDialogue < 5 && response) {
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

    const BackgroundIMG = () => {
        let moyenne = (euro + co2 + social) / 3;
        let imagePath = "public/images/villes/";

        if (moyenne < -10) {
            imagePath += "-10.jpg";
        } else if (moyenne < -2) {
            imagePath += "-2.jpg";
        } else if (moyenne < 0) {
            imagePath += "0.jpg";
        } else if (moyenne < 10) {
            imagePath += "10.jpg";
        } else if (moyenne < 15) {
            imagePath += "15.jpg";
        } else if (moyenne < 20) {
            imagePath += "20.jpg";
        } else if (moyenne < 25) {
            imagePath += "25.jpg";
        } else if (moyenne < 28) {
            imagePath += "28.jpg";
        } else if (moyenne < 30) {
            imagePath += "30.jpg";
        } else {
            imagePath += "35.jpg";
        }
        return imagePath;
    }


    return (
        <>
            <GameBar euro={euro} co2={co2} date={2023}/>
            <div className="w-full h-screen flex items-center justify-center">
                <Sprite id={"background"} path={BackgroundIMG()} alt={"Un fond d'écran"} height={"full"} width={"full"}/>
            </div>
            <Personnage id={"president"} path={pathPresident} alt={"Un président important"} position={"right"} talking={setTalkingPresident()}/>
            <Personnage id={"ministre"} path={pathMinistre} alt={"Un ministre important"} position={"left"} talking={setTalkingMinistre()}/>
            <Discussion dialogues={dialogues[actualDialogue]} actualDiscussion={actualDiscussion} setActualDiscussion={setActualDiscussion}/>
            {actualDiscussion === dialogues[actualDialogue].length - 1 && <BoutonReponse setSocial={setSocial} setEcolo={setCO2} setEconomie={setEuro} id={actualDialogue} setResponse={setResponse} setEndOfDiscussion={setEndOfDialogue}/>}
        </>
    )
}
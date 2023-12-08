import { GameBar } from "../../GameComponents/GameBar/GameBar.tsx";
import { Sprite } from "../../GameComponents/Sprite/Sprite.tsx";
import React, { useEffect, useState } from "react";
import { Discussion } from "../../GameComponents/Discussion/Discussion.tsx";
import { Personnage } from "../../GameComponents/Personnage/Personnage.tsx";
import { dialogues, boutonsReponses } from "../../GameComponents/GameBar/data/data.ts";
import BoutonReponse from "../../GameComponents/BoutonReponse/BoutonReponse.tsx";
import PopUp from "../../GameComponents/PopUp/PopUp.tsx";

export default function Game() {
    const [euro, setEuro] = useState(2)
    const [co2, setCO2] = useState(2)
    const [social, setSocial] = useState(0)
    const [date, setDate] = useState(2023)
    const pathPresident = "public/images/president.png"
    const pathMinistre = "public/images/ministre-bg.png"
    const pathBG = "public/images/bg_intro.jpg"
    const [path] = "/images/president.png"
    const [endOfDialogue, setEndOfDialogue] = useState<boolean>(false)
    const [actualDialogue, setActualDialogue] = useState<number>(0)
    const [actualDiscussion, setActualDiscussion] = useState<number>(0)
    const [response, setResponse] = useState<boolean>(false)
    const [reponseUser, setReponseUser] = useState<string[]>([])
    const [end, setEnd] = useState<boolean>(false)
    useEffect(() => {
        if (endOfDialogue && actualDialogue < 6 && response && end === false) {
            setActualDialogue(v => v + 1)
            setEndOfDialogue(false)
            setActualDiscussion(0)
        } else if (actualDialogue >= 6) {
            setEnd(true)
        }
    }, [endOfDialogue]);

    const setTalkingPresident = () => {
        return dialogues[actualDialogue][actualDiscussion].nomPersonnage === "President";
    };

    const setTalkingMinistre = () => {
        return dialogues[actualDialogue][actualDiscussion].nomPersonnage === "Premier Ministre";
    };

    const BackgroundIMG = () => {
        let moyenne = (euro + co2 + social) / 3;
        let imagePath = "public/images/villes/";
        if (moyenne < 1.2) {
            imagePath += "-10.jpg";
        } else if (moyenne < 2.4) {
            imagePath += "-2.jpg";
        } else if (moyenne < 3.6) {
            imagePath += "0.jpg";
        } else if (moyenne < 4.8) {
            imagePath += "10.jpg";
        } else if (moyenne < 6) {
            imagePath += "15.jpg";
        } else if (moyenne < 7.2) {
            imagePath += "20.jpg";
        } else if (moyenne < 8.4) {
            imagePath += "25.jpg";
        } else if (moyenne < 9.6) {
            imagePath += "28.jpg";
        } else if (moyenne < 10.8) {
            imagePath += "30.jpg";
        } else {
            imagePath += "35.jpg";
        }
        return imagePath;
    }

    const textFin = () => {
        let moyenne = (euro + co2 + social) / 3;
        console.log(moyenne);
        let text = "";
        if (moyenne < 4) {
            text = "Votre ville est une catastrophe écologique, économique et sociale. Vous avez perdu !";
        } else if (moyenne < 10) {
            text = "Votre ville est dans un état moyen. Vous auriez pu faire mieux !";
        }
        else {
            text = "Votre ville est un paradis sur terre. Bravo !";
        }
        return text;
    }

    console.log(reponseUser)
    console.log(end)
    return (
        <>
            <div className={'max-md:flex hidden'}>
                <p className={'text-white text-2xl mx-auto'}>Veuillez utiliser un écran plus grand</p>
            </div>
        <div className={'max-h-[calc(100vh-60px)] overflow-y-hidden max-md:hidden'}>
            <GameBar euro={euro} co2={co2} social={social} date={date}/>
            <div className="w-full h-screen flex items-center justify-center">
                <Sprite id={"background"} path={BackgroundIMG()} alt={"Un fond d'écran"} height={"full"} width={"full"}/>
            </div>
            {actualDialogue < 6 && <Personnage id={"president"} path={pathPresident} alt={"Un président important"} position={"right"} talking={setTalkingPresident()}/>}
            {actualDialogue < 6 && <Personnage id={"ministre"} path={pathMinistre} alt={"Un ministre important"} position={"left"} talking={setTalkingMinistre()}/>}
            {actualDialogue < 6 && <div>
                {!end && <Discussion dialogues={dialogues[actualDialogue]} actualDiscussion={actualDiscussion} setActualDiscussion={setActualDiscussion}/>}
                {actualDiscussion === dialogues[actualDialogue].length - 1 && !end && <BoutonReponse setSocial={setSocial} setEcolo={setCO2} setEconomie={setEuro} id={actualDialogue} setResponse={setResponse} setEndOfDiscussion={setEndOfDialogue} reponseUser={setReponseUser} setDate={setDate}/>}
            </div>}
            {end &&
                <PopUp
                    choices={reponseUser}
                    valeurEcologie={co2}
                    valeurEconomie={euro}
                    valeurSocial={social}
                    textDeFin={textFin()}
                />
            }
        </div>
        </>
    )
}
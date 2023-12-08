import {Chat} from "../../components/Chatbot/Chat/Chat.tsx";

import {HeroImageRight} from "../../components/ui/HeroImageRight.tsx";
import {FeaturesCards} from "../../components/ui/FeaturesCards.tsx";
import {FaqSimple} from "../../components/ui/FaqSimple.tsx";

function Home() {
    return (
        <>
            <div className={'flex flex-col w-full gap-20'}>
                <HeroImageRight/>
                <FeaturesCards/>
                <FaqSimple/>
            </div>
            <Chat/>
        </>
    )
}

export default Home

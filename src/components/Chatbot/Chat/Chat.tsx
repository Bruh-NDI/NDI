import {useEffect, useRef, useState} from "react";
import {Button, Card, CloseButton, Input, ScrollArea, Text} from "@mantine/core";
import {useLocalStorage} from "@mantine/hooks";
import {Message} from "../Message/Message.tsx";
import {IconSend} from "@tabler/icons-react"

type MessageType = {
    role: "Vous" | "Assistant",
    message: string
}

export function Chat() {
    const [showed, setShowed] = useState(false)
    const viewport = useRef<HTMLDivElement>(null);
    const [loading, isLoading] = useState(false)
    const [token, setToken] = useLocalStorage({
        key: 'token',
        defaultValue: '',
    });
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState<MessageType[]>([{
        role: "Assistant",
        message: "Poser moi une question sur l'écologie."
    }])

    const sendQuestion = () => {
        if (input.length > 0) {
            isLoading(true)
            addMessage("Vous", input)
            const prompt = input
            setInput("")
            const headers: { [key: string]: string } = {
                'Content-Type': 'application/json'
            }
            if (token.length > 0)
                headers["Authorization"] = "Bearer " + token
            fetch(import.meta.env.VITE_API + "/chatbot", {
                method: "POST",
                headers,
                body: JSON.stringify({message: prompt})
            }).then(res => res.json()).then(res => {
                setToken(res.token)
                addMessage("Assistant", res.answer)
            }).catch(e => console.log(e)).finally(() => {
                isLoading(false)
            })
        }
    }

    useEffect(() => {
        viewport.current!.scrollTo({top: viewport.current!.scrollHeight, behavior: 'smooth'});
    }, [messages]);

    const addMessage = (role: "Vous" | "Assistant", value: string) => {
        setMessages(m => [...m, {role, message: value}])
    }

    return <>
        <Card withBorder className={"w-[300px] !fixed flex-col gap-2  bottom-[20px] right-[20px] drop-shadow-lg"} style={{
            display: showed ? "flex" : "none",
        }}>
            <div className={"flex justify-between w-full"}>
                <Text>Chatbot</Text>
                <CloseButton onClick={() => setShowed(false)}/>
            </div>
            <ScrollArea h={300} viewportRef={viewport}>
                {messages.map((m, index) => <Message key={index} message={m.message} role={m.role}/>)}
            </ScrollArea>
            <div className={"flex gap-2 w-full"}>
                <Input
                    className={"w-full"}
                    value={input}
                    onChange={(event) => setInput(event.currentTarget.value)}
                    placeholder={"Ma question"}/>
                <Button onClick={sendQuestion} loading={loading}><IconSend size={18}/></Button>
            </div>
        </Card>
        <Button className={"!fixed bottom-[20px] right-[20px] drop-shadow-lg"} style={{
            display: !showed ? "block" : "none",
        }} onClick={() => setShowed(true)}>
            <IconSend size={18} className={'mr-1'}/>
            Chatbot
        </Button>
    </>
}
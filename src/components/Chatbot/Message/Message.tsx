import {Text} from "@mantine/core";

export function Message({message, role}: { message: string, role: string }) {
    return <div className={"flex flex-col mb-3"}><Text fw={700}>{role}:</Text><Text>{message}</Text></div>
}
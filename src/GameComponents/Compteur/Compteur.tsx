import {Text} from "@mantine/core"

type CompteurProps = {
    Value: string
    title: string
}

export function Compteur({Value, title}: CompteurProps) {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <Text c={"dimmed"} fw={500} size={"md"}>{title}</Text>
            <Text fw={600}>{Value}</Text>
        </div>
    )
}
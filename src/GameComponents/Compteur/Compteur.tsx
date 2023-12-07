type CompteurProps = {
    Value: number
    Type: string
    id: string
}

export function Compteur({Value, Type, id}: CompteurProps) {
    return (
        <div id={id}>
            <p>{Value} : {Type}</p>
        </div>
    )
}
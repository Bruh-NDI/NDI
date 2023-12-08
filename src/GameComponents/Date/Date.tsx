type DateProps = {
    Value: number
    id: string
}

export function Date({Value, id}: DateProps) {
    return (
        <div id={id}>
            <p>Date : {Value}</p>
        </div>
    )
}
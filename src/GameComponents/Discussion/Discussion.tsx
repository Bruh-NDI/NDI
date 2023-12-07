type QuestionProps = {
    nomPersonnage: string
    question: string
    id: string
}

export function Discussion ({array}: QuestionProps) {
    return (
        <div id={id}>
            <p>{nomPersonnage} : {question}</p>
        </div>
    )
}
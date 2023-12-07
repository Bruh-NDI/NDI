export type ArrayOfQuestions = {
    array: QuestionProps[]
}

export type QuestionProps = {
    nomPersonnage: string
    text: string
    id: string
}

export function Discussion({array}: ArrayOfQuestions) {
    return (
        <>
            {array.map((question) => (
                <div id={question.id} key={question.id}>
                    <p>{question.nomPersonnage} : {question.text}</p>
                </div>
            ))}

        </>

    )
}
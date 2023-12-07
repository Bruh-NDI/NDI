export type ArrayOfQuestions = {
    array: QuestionProps[]
}

export type QuestionProps = {
    nomPersonnage: string
    text: string
    id: string
}

export function Discussion({array}: ArrayOfQuestions) {
    const CurrentQuestion = 0
    return (
        <div className="absolute bottom-0 flex justify-center items-center w-full">
            {showCurrentQuestion(array, CurrentQuestion)}
        </div>
    )
}

function increaseCurrentQuestion() {

}

function showCurrentQuestion(array: QuestionProps[], index: number) {

    return (
        <div id={array[index].id} onClick={increaseCurrentQuestion}>
            <p>{array[index].nomPersonnage} : {array[index].text}</p>
        </div>
    )
}
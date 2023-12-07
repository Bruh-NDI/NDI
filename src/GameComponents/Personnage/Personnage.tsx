type PersonnageProps = {
    id : string
    path: string
    alt : string
}

export function Personnage ({path, id, alt}: PersonnageProps) {
    return (
        <div id={id} className="h-full w-full">
            <img src={path} alt={alt} className="h-1/3 absolute bottom-0 right-0"/>
        </div>
    )
}
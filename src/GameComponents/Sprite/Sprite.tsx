type SpriteProps = {
    id : string
    path: string
    alt : string
}

export function Sprite ({path, id, alt}: SpriteProps) {
    return (
        <div id={id} className="h-full w-full">
            <img src={path} alt={alt}/>
        </div>
    )
}
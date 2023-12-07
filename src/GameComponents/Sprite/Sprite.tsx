type SpriteProps = {
    id : string
    path: string
    alt : string
}

export function Sprite ({path, id, alt}: SpriteProps) {
    return (
        <div id={id} className="h-1/3 left-0">
            <img src={path} alt={alt}/>
        </div>
    )
}
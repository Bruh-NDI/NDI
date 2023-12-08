import {Image} from "@mantine/core";

type SpriteProps = {
    id : string
    path: string
    alt : string
    height : string
    width : string
}

export function Sprite({ path, id, alt, height, width }: SpriteProps) {
    return (
        <div id={id} className="h-full w-full">
            <img src={path} alt={alt} draggable={false} className={`h-${height} w-${width} object-cover -z-50 transition-all`} />
        </div>
    );
}
type PersonnageProps = {
    id : string
    path: string
    alt : string
    position: string
    talking: boolean
}

export function Personnage({ path, id, alt, position, talking }: PersonnageProps) {
    const isOnRight = position === 'right';

    return (
        <div id={id} className="h-full w-full">
            <img
                src={path}
                alt={alt}
                draggable={false}
                className={` absolute bottom-0 ${isOnRight ? 'right-0' : 'left-0'} ${talking ? 'h-1/3' : 'filter grayscale h-[20%]'}`}
            />
        </div>
    );
}

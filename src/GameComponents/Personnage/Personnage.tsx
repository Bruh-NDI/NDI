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
                className={`h-1/3 absolute bottom-0 ${isOnRight ? 'right-0' : 'left-0'} ${talking ? '' : 'opacity-60'}`}
            />
        </div>
    );
}

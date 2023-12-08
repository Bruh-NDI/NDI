import React, {useState, useEffect} from 'react';

type PersonnageProps = {
    id: string;
    path: string;
    alt: string;
    position: string;
    talking: boolean;
};

export function Personnage({
                               path,
                               id,
                               alt,
                               position,
                               talking,
                           }: PersonnageProps) {
    const isOnRight = position === 'right';
    const [isMouthOpen, setIsMouthOpen] = useState(false);
    const [isEyesOpen, setIsEyesOpen] = useState(false);

    useEffect(() => {
        const openAndCloseMouth = () => {
            setIsMouthOpen((prevState) => !prevState);

            setTimeout(() => {
                openAndCloseMouth();
            }, 300);
        };

        const openAndCloseEyes = () => {
            setIsEyesOpen((prevState) => !prevState);
        }

        setTimeout(() => {
            openAndCloseMouth();
        }, 3000);

        setInterval(() => {
            openAndCloseEyes();
            setTimeout(() => {
                openAndCloseEyes();
            }, 100);
        }, 5000);

        return () => {
            // @ts-ignore
            clearTimeout(openAndCloseMouth);
            // @ts-ignore
            clearTimeout(openAndCloseEyes);
        };
    }, []);

    const pathBG = 'public/images/' + id.toLowerCase() + '-bg.png';
    const pathMO = 'public/images/' + id.toLowerCase() + '-m-open.png';
    const pathMC = 'public/images/' + id.toLowerCase() + '-m-close.png';
    const pathEO = 'public/images/' + id.toLowerCase() + '-e-open.png';

    return (
        <div id={id} className="h-full w-full">
            <img
                src={pathBG}
                alt={alt}
                draggable={false}
                className={`transition-all absolute bottom-0 ${id!=='president' ? '-translate-x-[90px]' : ''} ${
                    isOnRight ? 'right-0' : 'left-0'
                } ${talking ? 'h-[40%]' : 'filter grayscale h-[30%]'}`}
            />
            {talking && (
                <img
                    src={pathMO}
                    alt={alt}
                    draggable={false}
                    className={`transition-all absolute bottom-0 ${id!=='president' ? '-translate-x-[90px]' : ''} ${
                        isOnRight ? 'right-0' : 'left-0'
                    } ${talking ? 'h-[40%]' : 'filter grayscale h-[30%]'} ${
                        isMouthOpen && talking ? 'opacity-100' : 'opacity-0'
                    }`}
                />)
            }
            <img
                src={pathMC}
                alt={alt}
                draggable={false}
                className={`transition-all absolute bottom-0 ${id!=='president' ? '-translate-x-[90px]' : ''} ${
                    isOnRight ? 'right-0' : 'left-0'
                } ${talking ? 'h-[40%]' : 'filter grayscale h-[30%]'} ${
                    isMouthOpen && talking ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <img
                src={pathEO}
                alt={alt}
                draggable={false}
                className={`transition-all absolute bottom-0 ${id!=='president' ? '-translate-x-[90px]' : ''} ${
                    isOnRight ? 'right-0' : 'left-0'
                } ${talking ? 'h-[40%]' : 'filter grayscale h-[30%]'} ${
                    isEyesOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
        </div>
    );
}

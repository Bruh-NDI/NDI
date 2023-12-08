import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {Effects} from "../../components/Terre/Effects";
import {PrimaryScene} from "../../components/Terre/PrimaryScene";
import {Html} from "@react-three/drei";


function Loading() {
    return (
        <Html
            fullscreen
            style={{
                backgroundColor: "black",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h2>Loading textures</h2>
        </Html>
    );
}

function Terre() {
    return (
        <>
            <div className={'h-[500px]'}>
                <Canvas camera={{fov: 40, position: [0, 0, 8]}}>
                    <Effects/>
                    {/*<Suspense fallback={<Loading/>}>*/}
                    <PrimaryScene/>
                    {/*</Suspense>*/}
                </Canvas>
            </div>
        </>
    )
}

export default Terre

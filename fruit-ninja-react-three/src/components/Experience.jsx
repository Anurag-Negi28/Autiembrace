import { Suspense, startTransition, useEffect, useState } from "react";
import {
    AdaptiveDpr,
    OrbitControls,
    PerspectiveCamera,
    Preload,
} from "@react-three/drei";
import { CuboidCollider, Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { v4 as uuidv4 } from "uuid";

import { GAME_STATE_GLOBAL } from "../utils/constants";
import { useStore } from "../utils/store";

import Orange from "./Fruits/Orange";
import Overlay3D from "./HUD/Overlay3D";

const Experience = () => {
    const [fruits, setFruits] = useState([]);
    const [removeFruit, setRemoveFruit] = useState(false);

    const gameState = useStore((state) => state.gameState);
    const setGameState = useStore((state) => state.setGameState);
    const setIsSlicing = useStore((state) => state.setIsSlicing);

    const start = () => {
        setGameState(1);
        GAME_STATE_GLOBAL.state = 1;
    };

    const spawnFruitInterval = (interval = 1.5) => {
        const intervalTimer = setInterval(() => {
            // get random x position in -5.5 to 5.5 range
            const randomX = Math.floor(Math.random() * 11) - 5.5;

            // get random z position in -1 to 2 range
            const randomZ = Math.floor(Math.random() * 4) - 2;

            startTransition(() => {
                setFruits((prev) => [
                    ...prev,
                    <Orange
                        key={uuidv4()}
                        positionX={randomX}
                        positionZ={randomZ}
                        setRemoveFruit={setRemoveFruit}
                    />,
                ]);
            });
        }, interval * 1000);

        return intervalTimer;
    };

    const handleTouchDown = (e) => {
        setIsSlicing(true);
    };

    const handlePointerDown = (e) => {
        if (e.button !== 0) return;

        setIsSlicing(true);
        switch (GAME_STATE_GLOBAL.state) {
            case 0:
                start();
                break;
            default:
                break;
        }
    };

    const handlePointerUp = () => {
        setIsSlicing(false);
    };

    useEffect(() => {
        if (gameState === 1) {
            const spawnInterval = spawnFruitInterval(0.5);
            return () => {
                clearInterval(spawnInterval);
            };
        }
    }, [gameState]);

    useEffect(() => {
        if (removeFruit) {
            setFruits((prev) => prev.slice(1));
            setRemoveFruit(false);
        }
    }, [removeFruit]);

    useEffect(() => {
        document.addEventListener("mousedown", handlePointerDown);
        document.addEventListener("mouseup", handlePointerUp);
        document.addEventListener("mouseleave", handlePointerUp);
        document.addEventListener("touchstart", handleTouchDown);
        document.addEventListener("touchend", handlePointerUp);

        return () => {
            document.removeEventListener("mousedown", handlePointerDown);
            document.removeEventListener("mouseup", handlePointerUp);
            document.removeEventListener("mouseleave", handlePointerUp);
            document.removeEventListener("touchstart", handleTouchDown);
            document.removeEventListener("touchend", handlePointerUp);
        };
    }, []);

    return (
        <Suspense fallback={null}>
            <Perf position="top-left" />
            <PerspectiveCamera
                makeDefault
                fov={45}
                near={0.1}
                far={100}
                position={[0, 0, 10]}
            />
            <OrbitControls makeDefault target={[0, 0, 0]} enableRotate={false} />

            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <Overlay3D />

            <Suspense>
                <Physics gravity={[0, -15, 0]} colliders={false}>
                    {fruits}
                    <CuboidCollider
                        type="fixed"
                        args={[10, 0.1, 5]}
                        position={[0, -8, 0]}
                    />
                </Physics>
            </Suspense>

            <Preload all />
            <AdaptiveDpr pixelated />
        </Suspense>
    );
};

export default Experience;

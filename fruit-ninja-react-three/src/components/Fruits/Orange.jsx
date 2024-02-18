import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { getRandomIntInclusive } from "../../utils/functions";
import { orange } from "../../assets/models";
import { useStore } from "../../utils/store";

const Orange = ({
    positionX = 0,
    positionZ = 0,
    setRemoveFruit = () => { },
}) => {
    const bodyRef = useRef();
    const isFruitRemoved = useRef(false);
    const { nodes, materials } = useGLTF(orange);

    const isSlicing = useStore((state) => state.isSlicing);
    const incrementPoint = useStore((state) => state.incrementPoint);

    const handleFruitSliced = () => {
        if (!isSlicing) return;
        isFruitRemoved.current = true;
        setRemoveFruit(true);
        incrementPoint();
    };

    useEffect(() => {
        const rigidBody = bodyRef.current;
        if (!rigidBody) return;

        const torqeImpulse = getRandomIntInclusive(1, 3);
        const timeout = setTimeout(() => {
            rigidBody.applyImpulse(
                { x: 0, y: getRandomIntInclusive(45, 65), z: 0 },
                true
            );
            rigidBody.applyTorqueImpulse(
                { x: torqeImpulse, y: torqeImpulse, z: 0 },
                true
            );
        }, 100);

        let removeFruitTimeout = null;
        if (isFruitRemoved.current) return;

        removeFruitTimeout = setTimeout(() => {
            setRemoveFruit(true);
        }, 5000);

        return () => {
            clearTimeout(timeout);
            clearTimeout(removeFruitTimeout);
        };
    }, []);

    return (
        <RigidBody ref={bodyRef} colliders={"ball"} mass={5} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.PfOrange.geometry}
                material={materials["Orange-OrangeTEX"]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={9}
                position={[positionX, -7, positionZ]}
                onPointerEnter={handleFruitSliced}
                dispose={null}
            />
        </RigidBody>
    );
};

useGLTF.preload(orange);

export default Orange;

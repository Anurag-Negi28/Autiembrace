import { Html } from "@react-three/drei";

import PointerTrail from "./PointerTrail";

const Overlay3D = () => {
    return (
        <Html fullscreen dispose={null}>
            <PointerTrail />
        </Html>
    );
};

export default Overlay3D;

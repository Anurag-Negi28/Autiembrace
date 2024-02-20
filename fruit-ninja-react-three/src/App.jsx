import { Canvas } from "@react-three/fiber";

import Overlay from "./components/HUD/Overlay.jsx";
import Experience from "./components/Experience.jsx";

const App = () => {
  return (
    <>
      <Overlay />
      <Canvas shadows dpr={[1, 2]} performance={{ min: 0.1 }}>
        <Experience />
      </Canvas>
    </>
  );
};

export default App;

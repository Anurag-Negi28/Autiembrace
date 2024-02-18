import { startTransition, useState } from "react";
import styled, { keyframes } from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { useStore } from "../../utils/store";
import { MAX_TRAIL_DOTS } from "../../utils/constants";

const Trail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: none;

  /* disable user selection on all platforms */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  z-index: 999;
`;

const moveTrail = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
`;

const TrailDot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #f00; /* Red color */
  opacity: 0.5;
  animation: ${moveTrail} 0.5s ease-in-out forwards;
`;

const PointerTrail = () => {
  const [trails, setTrails] = useState([]);

  const isSlicing = useStore((state) => state.isSlicing);

  const handlePointerMove = (event) => {
    if (!isSlicing) return;

    const { clientX, clientY } = event;
    const newTrail = { x: clientX, y: clientY, id: uuidv4() };

    startTransition(() => {
      setTrails((prevTrails) => {
        // Limit the number of trail dots to MAX_TRAIL_DOTS
        const updatedTrails = [...prevTrails, newTrail];
        return updatedTrails.slice(-MAX_TRAIL_DOTS);
      });
    });
  };

  return (
    <Trail onPointerMove={handlePointerMove}>
      {trails.map((trail) => (
        <TrailDot key={trail.id} style={{ left: trail.x, top: trail.y }} />
      ))}
    </Trail>
  );
};

export default PointerTrail;

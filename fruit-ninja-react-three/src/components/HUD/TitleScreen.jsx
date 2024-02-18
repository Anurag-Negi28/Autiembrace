import { styled } from "styled-components";
import { useStore } from "../../utils/store";

const TitleScreenStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: none;

  /* center items */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* disable user select on all platforms */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;

  pointer-events: none;

  z-index: 100;
`;

const TitleScreenTextStyled = styled.h1`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TitleScreen = () => {
    const gameState = useStore((state) => state.gameState);

    return (
        <TitleScreenStyled>
            {gameState === 0 && (
                <TitleScreenTextStyled>Tap to play</TitleScreenTextStyled>
            )}
        </TitleScreenStyled>
    );
};

export default TitleScreen;

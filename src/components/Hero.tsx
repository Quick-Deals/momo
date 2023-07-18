import { styled } from "styled-components";
import {
  heroBottom,
  heroBottomLeft,
  heroTextBg,
  heroTop,
  heroTop2,
  joinbutton,
  momoHead,
  polygon1,
  polygon2,
  polygon3,
} from "../assets";
import { BiLogoDiscordAlt, BiLogoTwitter } from "react-icons/bi";

const Hero = () => {
  return (
    <HeroContainer>
      <span className="heroTop2" />
      <TextContent>
        <Text>Welcome to</Text>
        <Header>MOMO</Header>
        <Text className="intro">
          Your Mighty Heroic Crypto Meme Token transcending traditional
          boundaries, infusing the world of blockchain with a vibrant energy
          that ignites the imagination and unleashes new possibilities.
        </Text>
        <ButtonContainer>
          <Button>
            <BiLogoTwitter size={25} />
          </Button>
          <Button>
            <BiLogoDiscordAlt size={25} />
          </Button>
        </ButtonContainer>
      </TextContent>
      <ImageContainer>
        <span className="heroImage" />
        <span className="polygon1" />
        <span className="polygon2" />
        <span className="polygon3" />
      </ImageContainer>

      <span className="heroBottom" />
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  min-height: MAX(100vh, 1024px);
  padding: 2em 10%;
  padding-right: 0;
  overflow-x: hidden;
  position: relative;
  gap: 4em;
  z-index: 0;

  &::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 40%;
    transform: translateX(-50%);
    width: 30%;
    min-height: 160px;
    background: url(${heroTop}) no-repeat;
    background-position: top center;
    background-size: contain;
  }
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 30%;
    min-height: 50%;
    background: url(${heroBottomLeft}) no-repeat;
    background-position: bottom left;
    background-size: contain;
  }

  & span.heroTop2 {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 30%;
    height: 50%;
    max-width: 530px;
    max-height: 530px;
    background: url(${heroTop2}) no-repeat;
    background-position: top right;
    background-size: contain;
  }
  & span.heroBottom {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    width: 359.026px;
    height: 134.35px;
    background: url(${heroBottom}) no-repeat;
    background-position: top right;
    background-size: contain;
  }

  @media screen and (max-width: 860px) {
    padding: 60% 2em 2em;
    min-width: 90%;
    justify-content: flex-start;
    align-items: flex-start;

    & span.heroTop2 {
      width: 60%;
      height: 20%;
      background-position: bottom left;
    }
    & span.heroBottom {
      width: 60%;
      height: 20%;
      background-position: bottom center;
    }
  }
`;

const TextContent = styled.div`
  color: #392c19;
  font-family: Otomanopee One;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 629px;
  min-width: MIN(90%, 484px);
  text-align: left;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  margin-right: auto;

  @media screen and (max-width: 860px) {
    min-width: 100%;
    margin: 0 auto;
  }
`;
const Header = styled.h2`
  font-family: Cherry Bomb One;
  line-height: 90%;
`;
const Text = styled.p`
  &.intro {
    position: relative;
    z-index: 1;
    max-width: 629px;
    min-width: 200px;

    &::before {
      position: absolute;
      content: "";
      top: 0px;
      left: 40%;
      transform: translateX(-50%);
      width: 30%;
      min-height: 160px;
      width: 184px;
      height: 184px;
      background: url(${heroTextBg}) no-repeat;
      background-position: bottom center;
      background-size: contain;
      z-index: -1;
    }
  }
`;

const ImageContainer = styled.div`
  width: 548.048px;
  display: flex;
  z-index: 0;
  position: relative;

  & span {
    position: absolute;
    top: 30%;

    &::before {
      content: "";
      position: absolute;
    }

    &.heroImage {
      left: -11%;
      &::before {
        width: 548.048px;
        height: 456px;
        left: -10%;
        z-index: 3;
        background: url(${momoHead}) no-repeat center left/cover;
      }
    }

    &.polygon1 {
      left: -6%;
      &::before {
        width: 523px;
        height: 484px;
        left: -5%;
        z-index: 2;
        background: url(${polygon1}) no-repeat bottom left/contain;
      }
    }
    &.polygon2 {
      left: -5%;
      top: 32%;
      &::before {
        width: 590px;
        height: 546px;
        left: 0%;
        z-index: 1;
        background: url(${polygon2}) no-repeat bottom left/contain;
      }
    }
    &.polygon3 {
      left: -5%;
      bottom: -5%;
      &::before {
        width: 590px;
        height: 546px;
        left: -2%;
        z-index: 0;
        background: url(${polygon3}) no-repeat bottom right/contain;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 0;
  overflow: hidden;
  background: url(${joinbutton}) no-repeat;
  background-position: center;
  width: 60px;
  border-top-left-radius: 30%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 30%;
  border-bottom-left-radius: 0;
  color: #e8d6bc;
`;

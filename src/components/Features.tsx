import { styled } from "styled-components";
import { Union, momoHead } from "../assets";

const Features = () => {
  return (
    <Container>
      <Header>Why Momo</Header>
      <Cards className="left">
        <ImageContainer className="left" />

        <TextContentContainer className="right">
          <TextContentHeader>Community Driven</TextContentHeader>
          <Text>
            Joining our community means becoming part of a network that supports
            and inspires one another. We value diversity and encourage
            innovative thinking, as we believe that true progress stems from the
            amalgamation of different perspectives. Together, we can unlock new
            possibilities with MOMO and create a better future for all.
          </Text>
        </TextContentContainer>
      </Cards>
      <Cards className="right">
        <TextContentContainer className="left">
          <TextContentHeader>Strong Roadmap</TextContentHeader>
          <Text>
            Our roadmap is brimming with thrilling milestones and initiatives
            aimed at propelling the MOMO ecosystem to new heights. With a strong
            focus on progress and innovation, we tirelessly strive to broaden
            our horizons and unlock a multitude of exciting opportunities.
          </Text>
        </TextContentContainer>
        <ImageContainer className="right" />
      </Cards>
    </Container>
  );
};

export default Features;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: MAX(100vh, 1024px);
  /* min-height: 1024px; */
  overflow-x: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: url(${Union}) no-repeat;
    width: 383.393px;
    height: 319px;
    background-size: contain;
    background-position: bottom left;
    z-index: 0;
    width: 297px;
    height: 221px;
  }
`;

const Header = styled.h2`
  color: #392c19;
  font-family: Cherry Bomb One;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 75px 0;

  @media screen and (max-width: 768px) {
    margin: 1em 0;
  }
`;

const Cards = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 2em auto;
  gap: 2em;
  padding: 2em;
  position: relative;
  width: 90%;

  &.left {
    margin-right: auto;
  }

  &.right {
    margin-left: auto;
  }

  @media screen and (max-width: 860px) {
    width: 100%;
    padding: 0 2em;
    &.left {
      margin-right: 0;
    }

    &.right {
      margin-left: 0;
    }

    & span.left {
      display: none;
    }
  }
`;

const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  max-width: 667px;
  margin: 2em;
  min-width: MIN(90%, 240px);
  z-index: 1;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    background: url(${momoHead}) no-repeat;
    width: 383.393px;
    height: 319px;
    background-size: contain;
    z-index: -1;
  }

  &.left {
    margin-right: auto;
    &::before {
      right: -85%;
    }
  }

  &.right {
    margin-left: auto;
    &::before {
      left: -85%;
    }
  }

  @media screen and (max-width: 860px) {
    width: 100%;
    margin: auto;

    &.left {
      margin-right: 0;
      &::before {
        left: 100%;
      }
    }

    &.right {
      &::before {
        display: none;
        left: -95%;
      }
    }
  }
`;

const TextContentHeader = styled.h3`
  color: #392c19;
  font-family: "Otomanopee One";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Text = styled.p`
  color: #665a49;
  font-family: "Otomanopee One";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ImageContainer = styled.span`
  position: relative;
`;

import { styled } from "styled-components";
import { copy, joinbutton } from "../assets";
import { BiLogoTwitter, BiLogoDiscordAlt } from "react-icons/bi";

const Contact = () => {
  return (
    <ContactContainer>
      <JoinContainer>
        <JoinHeader>Join Our Strong Community</JoinHeader>
        <JoinButtons>
          <JoinButton>
            <p>Join us</p> <BiLogoTwitter size={25} />
          </JoinButton>
          <JoinButton>
            <p>Join us</p> <BiLogoDiscordAlt size={25} />
          </JoinButton>
        </JoinButtons>
      </JoinContainer>

      <ContactDetails>
        <ContactHeader>Contact Address</ContactHeader>
        <ContactAddress>
          <Copy src={copy} alt="" />
          <p>0xds67GTsu89nmlj908wnks</p>
        </ContactAddress>
      </ContactDetails>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const JoinContainer = styled.div`
  min-height: 219px;
  background: #d0c2ac;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 18px;

  @media screen and (max-width: 768px) {
    min-height: 300px;
    gap: 2em;
  }
`;

const JoinHeader = styled.h2`
  color: #392c19;
  font-family: Cherry Bomb One;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 100%;
  }
`;

const JoinButtons = styled.div`
  display: flex;
  gap: 24px;
  margin: 0 auto;
`;

const JoinButton = styled.button`
  min-width: 150px;
  height: 48px;
  outline: none;
  border: none;
  background: url(${joinbutton}) no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e8d6bc;
  gap: 5px;

  & p {
    font-family: "Otomanopee One";
    font-style: normal;
    font-weight: 400;
  }
`;

const ContactDetails = styled.div`
  margin: 25px auto;
  border-radius: 10px;
  background: #392c19;
  width: MIN(90%, 1117px);
  height: 169px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactHeader = styled.p`
  color: #e8d6bc;
  font-family: Cherry Bomb One;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 768px){
    font-size: 32px;
  }
`;

const ContactAddress = styled.p`
  font-family: "Otomanopee One";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--aa, linear-gradient(180deg, #e8d6bc 0%, #cabaa1 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: flex-start;
  gap: 5px;
  white-space: pre-wrap;
  max-width: 100%;
  line-break: anywhere;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Copy = styled.img``;

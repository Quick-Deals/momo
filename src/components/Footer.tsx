import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Text>
        Email: Saitama2.0eth@gmail.com<br />Copyright © 2023 - All right
        reserved by Saitama2.0
      </Text>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #baae9c;
  min-height: 193px;
  text-align: center;
  display: flex;
`;

const Text = styled.p`
  color: #392c19;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width:678px;
  margin: auto;
`;

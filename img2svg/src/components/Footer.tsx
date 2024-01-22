import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  background: #111;
  height: auto;
  padding-top: 40px;
  color: #fff;
  margin-top:7em;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const FooterTitle = styled.h3`
  font-size: 2.1rem;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 3rem;
`;

const FooterDescription = styled.p`
  max-width: 900px;
  margin: 10px auto;
  line-height: 28px;
  font-size: 14px;
  color: #cacdd2;
`;

const SocialList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 3rem 0;
`;

const SocialListItem = styled.li`
  margin: 0 10px;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #fff;
  border: 1.1px solid white;
  padding: 5px;
  border-radius: 50%;

  i {
    font-size: 1.1rem;
    width: 20px;
    transition: color 0.4s ease;
  }

  &:hover i {
    color: aqua;
  }
`;

const FooterBottom = styled.div`
  background: #000;
  padding: 20px;
  padding-bottom: 40px;
  text-align: center;
`;

const BottomParagraph = styled.p`
  float: left;
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
`;

const BottomLink = styled.a`
  color: #44bae8;
  font-size: 16px;
  text-decoration: none;
`;


const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterTitle>panwar2001</FooterTitle>
        <FooterDescription>Welcome to img2svg - your ultimate online destination for transforming images into versatile SVG (Scalable Vector Graphics) format. Our platform offers a seamless and efficient conversion process, allowing you to harness the power of vector graphics with ease. Whether you're a designer, developer, or enthusiast, img2svg empowers you to enhance your digital projects with the flexibility and scalability of SVG. Join us on this creative journey!</FooterDescription>
        <SocialList>
          <SocialListItem><SocialLink href="https://www.youtube.com/@panwar2001" target="_blank"><i className="fa fa-youtube" ></i></SocialLink></SocialListItem>
          <SocialListItem><SocialLink href="https://www.linkedin.com/in/panwar2001/" target="_blank"><i className="fa fa-linkedin-square"></i></SocialLink></SocialListItem>
        </SocialList>
      </FooterContent>
      <FooterBottom>
        <BottomParagraph>
          Copyright &copy; <BottomLink href="#">panwar2001</BottomLink>
        </BottomParagraph>
      </FooterBottom>
    </StyledFooter>
  );
};

export default Footer;
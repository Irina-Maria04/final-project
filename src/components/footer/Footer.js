import React from "react";
import {
  FooterWrapper,
  Container,
  FooterItem,
  ItemTitle,
  SubscribeForm,
  SubscribeBox,
  SubscribeButton,
  Terms,
} from "./Footer.style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterItem>
          <ItemTitle>Useful information</ItemTitle>
          <ul>
            <li>
              <Link to="/login">My account</Link>
            </li>
            <li>FAQs</li>
            <li>About us</li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </FooterItem>
        <FooterItem>
          <ItemTitle>Newsletter</ItemTitle>
          <p>
            Keep up with the latest news, offers, and book reviews by
            subscribing to our newsletter:
          </p>
          <SubscribeForm>
            <SubscribeBox type="email" placeholder="Email" required />
            <SubscribeButton type="submit" value="Subscribe" />
          </SubscribeForm>
          <Terms>
            <input type="checkbox" />
            <div>I agree with the terms and conditions</div>
          </Terms>
        </FooterItem>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

import React from "react";
import {
  ContactWrapper,
  Title,
  Container,
  ContactInfo,
  ContactCard,
  ContactForm,
  ContactBox,
  ContactButton,
  Terms,
  Map,
} from "./Contact.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faAddressCard,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactWrapper>
        <Title>Where to find us</Title>
        <Container>
          <ContactInfo>
            <ContactCard>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div>Address</div>
              <p>Str Arh Ion Mincu 17, sector 1, București</p>
            </ContactCard>
            <ContactCard>
              <FontAwesomeIcon icon={faAddressCard} />
              <div>Contact</div>
              <p>Tel: 0712345678 </p>
              <p>Email: bookshop@email.ro</p>
            </ContactCard>
            <ContactCard>
              <FontAwesomeIcon icon={faClock} />
              <div>Hours</div>
              <p>Monday - Friday 10:00 - 18:00 </p>
              <p>Saturday: 9:30 - 13:00</p>
            </ContactCard>
          </ContactInfo>
          <ContactForm>
            <div>Contact us</div>
            <p>Name</p>
            <ContactBox type="text" placeholder="Name" required />
            <p>Email</p>
            <ContactBox type="email" placeholder="Email" required />
            <p>Message</p>
            <ContactBox type="text" placeholder="Message" required />
            <ContactButton type="submit" value="Send form" />
            <Terms>
              <input type="checkbox" />
              <p>I agree with the terms and conditions</p>
            </Terms>
          </ContactForm>
        </Container>
        <Map>
          {/* <a
            //href="https://www.google.com/maps/place/Nautilus+English+Books/@44.459005,26.08133,16z/data=!4m5!3m4!1s0x0:0xf77a1114222ec00e!8m2!3d44.4590052!4d26.0813304?hl=en"
            target={"_blank"}
          >
            <img src={img} alt="map" />
          </a> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5695.479740554517!2d26.08133!3d44.459005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf77a1114222ec00e!2sNautilus%20English%20Books!5e0!3m2!1sen!2sro!4v1614702371514!5m2!1sen!2sro"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Map>
      </ContactWrapper>
      <Footer />
    </div>
  );
};

export default Contact;

/*import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from "../utils/Themes"; // Ensure this path is correct

const ContactPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

const Header = styled.header`
  margin-bottom: 0px;
  margin-top:10px;
  text-align: center;
  h1 {
    font-size: 2.5em;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 20px;
  padding: 10px;
  background: ${({ theme }) => theme.bgLight};
  border-radius: 10px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};
  max-width: 800px;

  h2 {
    font-size: 1.5em;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const FormSection = styled.section`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.bgLight};
  border-radius: 10px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};
`;

const ContactInfoSection = styled.section`
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.bgLight};
  border-radius: 10px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};
  max-width: 800px;

  h3 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text_primary};
  }

  p {
    font-size: 1em;
    color: ${({ theme }) => theme.text_secondary};
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 1em;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!', { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name:
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Label>

      <Label htmlFor="email">
        Email:
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Label>

      <Label htmlFor="message">
        Message:
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          required
        />
      </Label>

      <Button type="submit">Submit Inquiry</Button>
    </Form>
  );
};

const ContactPage = () => {
    return (
      <ThemeProvider theme={lightTheme}>
        <ContactPageContainer>
          <Header>
            <h1>Contact Us</h1>
          </Header>
  
          <HeroSection>
            <h2>Have questions about your fitness journey? We're here to help!</h2>
          </HeroSection>
  
          <FormSection>
            <ContactForm />
          </FormSection>
  
          <ContactInfoSection>
            <h3>Alternatively, you can reach us at:</h3>
            <p>Email: <a href="activeaura@gmail.com">activeaura@gmail.com</a></p>
          </ContactInfoSection>
        </ContactPageContainer>
      </ThemeProvider>
    );
  };
  

export default ContactPage;*/

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from "../utils/Themes"; // Ensure this path is correct

// Import your background image
import backgroundImage from '../utils/Images/everything-you-need-know-about-fitness-1440x810.jpg';

const ContactPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow-y: scroll;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.text_primary};
`;

const Header = styled.header`
  margin-bottom: 20px;
  text-align: center;
  h1 {
    font-size: 4em;
    color: #5AB2FF; /* Changed color to blue */
    font-family: Arial, sans-serif; /* Changed font style */
  }
`;

const BoxContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  padding: 20px;
  background: #f2f2f2; /* Changed background color to greyish */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 20px;
  h2 {
    font-size: 1.8em;
    font-style: italic;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 1.2em;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.input`
  width: 95%;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 10px;
  font-size: 1.2em;
`;

const Textarea = styled.textarea`
  width: 95%;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 10px;
  font-size: 1.2em;
`;

const Button = styled.button`
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s ease; /* Added transition effect */
  &:hover {
    background: blue; /* Changed color on hover */
  }
`;

const ContactInfoSection = styled.section`
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  background: #f2f2f2; /* Changed background color to greyish */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  h3 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text_primary};
  }
  p {
    font-size: 1.2em;
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!', { name, email, phone, subject, message });

    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name:
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Label>

      <Label htmlFor="email">
        Email:
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Label>

      <Label htmlFor="phone">
        Phone:
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </Label>

      <Label htmlFor="subject">
        Subject:
        <Input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </Label>

      <Label htmlFor="message">
        Message:
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          required
        />
      </Label>

      <Button type="submit">Submit Inquiry</Button>
    </Form>
  );
};

const ContactPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <ContactPageContainer>
        <Header>
          <h1>Contact Us</h1>
        </Header>

        <BoxContainer>
          <HeroSection>
            <h2>Have questions about your fitness journey? We're here to help!</h2>
          </HeroSection>

          <Form>
            <ContactForm />
          </Form>
        </BoxContainer>

        <ContactInfoSection>
          <h3>Alternatively, you can reach us at:</h3>
          <p>Email: <a href="mailto:activeaura@gmail.com">activeaura@gmail.com</a></p>
          <p>Phone: +916362404434</p>
        </ContactInfoSection>
      </ContactPageContainer>
    </ThemeProvider>
  );
};

export default ContactPage;

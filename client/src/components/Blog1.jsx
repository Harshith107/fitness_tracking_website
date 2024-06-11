// src/components/BlogPage.jsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from "../utils/Themes";

const BlogPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) => theme.blue}; 
  color: ${({ theme }) => theme.text_primary};
  overflow-y: auto;
`;

const Header = styled.header`
  margin-bottom: 20px;
  text-align: center;
  h1 {
    font-size: 2.5em;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const BlogPost = styled.article`
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.bgLight};
  border-radius: 10px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};

  h2 {
    font-size: 1.5em;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.6;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    padding-left: 20px;
    margin-bottom: 20px;
  }

  li {
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 10px;
  }
`;

const Blog1 = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BlogPageContainer>
        <Header>
          <h1>Training to Failure: 5 Questions You Need to Answer</h1>
        </Header>

        <BlogPost>
          <img src="https://www.bornfitness.com/wp-content/uploads/2013/08/shutterstock_194099144-1-670x404.jpg" alt="Training to Failure" />
          <p>
            Taking every set in your workout to complete exhaustion might be a big mistake. Training to failure can build muscle and strength, but only if done right. However, there are several important considerations and questions you need to answer before incorporating training to failure into your workout routine.
          </p>
          <h2>1. What is Training to Failure?</h2>
          <p>
            Training to failure means performing an exercise until you can no longer complete a repetition with good form. It's a technique commonly used by bodybuilders and athletes to push their muscles to the limit. While it can be effective for muscle growth, it also comes with risks and limitations.
          </p>
          <h2>2. Should You Train to Failure Every Set?</h2>
          <p>
            No, not every set should be taken to failure. Overdoing it can lead to overtraining, fatigue, and increased risk of injury. It's important to listen to your body and know when to push yourself and when to dial it back.
          </p>
          <h2>3. How Often Should You Train to Failure?</h2>
          <p>
            Limit training to failure to the final set of an exercise or use it periodically in your program to avoid burnout and injury. Incorporating it sparingly can help maximize muscle recruitment and stimulate growth without overtaxing your body.
          </p>
          <h2>4. What are the Benefits of Training to Failure?</h2>
          <ul>
            <li>Maximizes muscle recruitment: Training to failure ensures that you're recruiting as many muscle fibers as possible during an exercise, leading to greater muscle activation and growth.</li>
            <li>Can break through plateaus: When you reach a plateau in your training, pushing yourself to failure can help shock your muscles and stimulate new growth.</li>
            <li>Increases muscle hypertrophy: The intense stimulus provided by training to failure can lead to greater muscle hypertrophy over time.</li>
          </ul>
          <h2>5. What are the Drawbacks of Training to Failure?</h2>
          <ul>
            <li>Increases risk of injury: Pushing yourself to failure increases the risk of muscle strains, tears, and other injuries, especially if you're not using proper form or lifting weights that are too heavy.</li>
            <li>Can lead to overtraining: Training to failure too frequently can lead to overtraining syndrome, which can cause fatigue, decreased performance, and increased risk of injury.</li>
            <li>Requires longer recovery time: Because training to failure places a significant amount of stress on your muscles, it typically requires longer recovery time between workouts to allow for adequate rest and repair.</li>
          </ul>
          <p>
            An individual’s desired goal will dictate numerous components of their program, not least of which includes whether or not they should train to muscular failure.

Take, for example, the differences between powerlifters and bodybuilders. Powerlifters are focused on maximal strength development (including training their nervous system to handle more weight). Consequently, they train at relatively high intensities of their 1-RM. Additionally, powerlifter’s place a distinct emphasis on full-body, compound movements, which require a great deal of skill to maintain proper form.

In bodybuilding, the goal is muscle growth and, as a result, train at comparatively lower intensities of their 1-RM because strength is not always the answer. What’s more, bodybuilders tend to emphasize smaller, isolation movements designed to target individual body parts, which require less skill to maintain proper technique.

Because of these different approaches and the types of exercises performed, bodybuilders are able to train to failure more frequently than powerlifters. 
          </p>
        </BlogPost>
      </BlogPageContainer>
    </ThemeProvider>
  );
};

export default Blog1;

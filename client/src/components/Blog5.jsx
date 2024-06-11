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
  background:#A7E6FF;
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

const Blog5 = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BlogPageContainer>
        <Header>
          <h1>13 Caffeine-Free Ways to Boost Energy</h1>
        </Header>

        <BlogPost>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/07/COVERS-670x404.png" alt="Caffeine-Free Ways to Boost Energy" />
          <p>
            Looking for ways to increase your energy without relying on caffeine? Here are 13 effective strategies to help you feel more energized naturally. These tips include lifestyle changes, dietary adjustments, and simple habits that can make a big difference in your overall energy levels.
          </p>
          <h2>1. Get Enough Sleep</h2>
          <p>
            Ensuring you get quality sleep each night is crucial for maintaining your energy levels. Aim for 7-9 hours of uninterrupted sleep.
          </p>
          <h2>2. Stay Hydrated</h2>
          <p>
            Dehydration can cause fatigue, so make sure you're drinking enough water throughout the day.
          </p>
          <h2>3. Eat Balanced Meals</h2>
          <p>
            Consuming a diet rich in whole foods, including fruits, vegetables, lean proteins, and whole grains, can provide sustained energy.
          </p>
          <h2>4. Exercise Regularly</h2>
          <p>
            Physical activity can boost your energy levels by improving circulation and reducing stress.
          </p>
          <h2>5. Take Breaks</h2>
          <p>
            Taking short breaks during your day can help prevent burnout and keep your energy levels up.
          </p>
          <h2>6. Get Outside</h2>
          <p>
            Spending time outdoors, especially in natural light, can improve your mood and energy.
          </p>
          <h2>7. Practice Deep Breathing</h2>
          <p>
            Deep breathing exercises can increase oxygen levels in your blood, helping to boost energy.
          </p>
          <h2>8. Reduce Stress</h2>
          <ul>
            <li>Practice mindfulness or meditation.</li>
            <li>Engage in activities that you enjoy and that help you relax.</li>
          </ul>
          <h2>9. Socialize</h2>
          <p>
            Interacting with friends and family can provide a mental boost and increase your energy levels.
          </p>
          <h2>10. Listen to Music</h2>
          <p>
            Uplifting music can improve your mood and give you a quick energy boost.
          </p>
          <h2>11. Maintain a Consistent Routine</h2>
          <p>
            Keeping a regular schedule can help regulate your body's natural rhythms and maintain steady energy levels.
          </p>
          <h2>12. Try Aromatherapy</h2>
          <p>
            Certain scents, like peppermint or citrus, can invigorate your senses and increase your alertness.
          </p>
          <h2>13. Laugh</h2>
          <p>
            Laughter releases endorphins and can give you a burst of energy and improve your overall mood.
          </p>
        </BlogPost>
      </BlogPageContainer>
    </ThemeProvider>
  );
};

export default Blog5;
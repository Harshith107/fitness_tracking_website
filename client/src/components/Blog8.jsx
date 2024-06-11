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

const Blog8 = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BlogPageContainer>
        <Header>
          <h1>The Magic Pill: Unlocking the Power of Proper Nutrition</h1>
        </Header>

        <BlogPost>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/09/the-magic-pill-670x404.png" alt="Healthy Nutrition" />
          <p>
            In a world of fad diets and quick fixes, finding the magic pill for optimal health and wellness seems like an elusive goal. However, the truth is that there is no one-size-fits-all solution. Instead, the key lies in understanding the power of proper nutrition and its impact on overall well-being.
          </p>
          <p>
            Proper nutrition is about more than just counting calories or following the latest diet trend. It's about nourishing your body with the nutrients it needs to function optimally and thrive. Here are some essential principles to consider:
          </p>
          <h2>1. Eat a Balanced Diet</h2>
          <p>
            A balanced diet includes a variety of foods from all the major food groups, including fruits, vegetables, whole grains, lean proteins, and healthy fats. Each of these food groups provides essential nutrients that support various functions in the body.
          </p>
          <h2>2. Prioritize Whole Foods</h2>
          <p>
            Whole foods are foods that are minimally processed and as close to their natural state as possible. Examples include fruits, vegetables, whole grains, nuts, seeds, and lean meats. These foods are rich in vitamins, minerals, and antioxidants and provide the most nutritional value.
          </p>
          
          <h2>3. Pay Attention to Portion Sizes</h2>
          <p>
            Portion control is essential for maintaining a healthy weight and preventing overeating. Be mindful of serving sizes and listen to your body's hunger and fullness cues to avoid overeating.
          </p>
          <h2>4. Stay Hydrated</h2>
          <p>
            Proper hydration is crucial for overall health and well-being. Aim to drink plenty of water throughout the day and limit sugary beverages like soda and juice.
          </p>
          <h2>5. Practice Mindful Eating</h2>
          <p>
            Mindful eating involves paying attention to the sensory experience of eating and tuning into your body's hunger and fullness signals. Avoid distractions like television or screens while eating and take the time to savor each bite.
          </p>
          <h2>6. Listen to Your Body</h2>
          <p>
            Every person's nutritional needs are unique, so it's essential to listen to your body and adjust your diet accordingly. Pay attention to how different foods make you feel and make choices that support your health and well-being.
          </p>
          <p>
            By incorporating these principles into your daily life, you can unlock the power of proper nutrition and experience the transformative benefits it can have on your health and well-being.
          </p>
        </BlogPost>
      </BlogPageContainer>
    </ThemeProvider>
  );
};

export default Blog8;

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

const Blog2 = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BlogPageContainer>
        <Header>
          <h1>Why Your Ab Workouts Don't Work</h1>
        </Header>

        <BlogPost>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/06/COVERS-6-670x404.png" alt="Frustrated Person" />
          <p>
            Many people find themselves frustrated with the lack of progress in their ab workouts despite putting in consistent effort. There are several common pitfalls that may be hindering your results:
          </p>
          <h2>1. Lack of Progressive Overload</h2>
          <p>
            Progressive overload is the principle of gradually increasing the demands placed on the body during exercise to continually make gains in muscle size, strength, and endurance. In the context of ab workouts, this means increasing the resistance or intensity of your exercises over time. Simply doing the same number of crunches or sit-ups every day may not be enough to challenge your muscles to grow stronger and more defined.
          </p>
          <h2>2. Poor Exercise Selection</h2>
          <p>
            Many people focus solely on traditional ab exercises like crunches and sit-ups, neglecting other important muscles in the core such as the obliques (side muscles) and the deeper stabilizing muscles. A well-rounded ab workout should include exercises that target all areas of the core, including rotational movements for the obliques and exercises that engage the entire core, such as planks and leg raises.
          </p>
          <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/04/ab-exercises-scaled.jpg?fit=2560%2C1709&ssl=1" alt="Ab Exercises" />
          <h2>3. Overemphasizing Spot Reduction</h2>
          <p>
            Spot reduction is the idea that you can target fat loss in specific areas of the body by exercising those muscles. However, research has shown that spot reduction is largely ineffective. While ab exercises can strengthen and tone the muscles in your midsection, they won't necessarily lead to visible abs if there's a layer of fat covering them. Instead of focusing solely on ab workouts, it's important to incorporate a balanced exercise routine that includes cardiovascular exercise and full-body strength training to reduce overall body fat.
          </p>
          <h2>4. Neglecting Nutrition</h2>
          <p>
            Your diet plays a crucial role in achieving visible abs. No matter how many ab exercises you do, if your diet is high in processed foods and excess calories, you're unlikely to see the results you desire. To reveal your abs, focus on eating a balanced diet that includes plenty of lean protein, fruits, vegetables, whole grains, and healthy fats. Additionally, be mindful of portion sizes and avoid excessive consumption of sugary snacks and beverages.
          </p>
        </BlogPost>
      </BlogPageContainer>
    </ThemeProvider>
  );
};

export default Blog2;

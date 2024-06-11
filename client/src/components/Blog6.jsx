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

const Blog6 = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BlogPageContainer>
        <Header>
          <h1>What is the Difference Between Protein Powders?</h1>
        </Header>

        <BlogPost>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/07/COVERS-1-670x404.png" alt="Different Protein Powders" />
          <p>
            Choosing the right protein powder can be confusing with so many options available. This guide breaks down the differences between various types of protein powders, including whey, casein, soy, pea, and more. Each type has unique benefits and is suitable for different goals and dietary needs.
          </p>
          <h2>1. Whey Protein</h2>
          <p>
            Whey protein is a complete protein with all essential amino acids. It's quickly absorbed, making it ideal for post-workout recovery.
          </p>
          <h2>2. Casein Protein</h2>
          <p>
            Casein protein digests slowly, providing a steady release of amino acids. It's great for sustained muscle repair, especially overnight.
          </p>
          <h2>3. Soy Protein</h2>
          <p>
            Soy protein is a plant-based protein with a good amino acid profile. It's suitable for vegetarians and those with dairy allergies.
          </p>
          <h2>4. Pea Protein</h2>
          <p>
            Pea protein is hypoallergenic and easily digestible. It's an excellent option for vegans and those with food sensitivities.
          </p>
          <h2>5. Other Protein Powders</h2>
          <ul>
            <li>Hemp Protein: Rich in omega-3 fatty acids and fiber.</li>
            <li>Brown Rice Protein: A good plant-based option, often combined with pea protein for a complete amino acid profile.</li>
            <li>Egg White Protein: Fat-free and high in protein, ideal for those who can’t consume dairy.</li>
          </ul>
        </BlogPost>
      </BlogPageContainer>
    </ThemeProvider>
  );
};

export default Blog6;
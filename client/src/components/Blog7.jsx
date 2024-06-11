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

const Blog7 = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BlogPageContainer>
        <Header>
          <h1>Chocolate Chia Protein Pudding</h1>
        </Header>

        <BlogPost>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/07/1-6-670x404.png" alt="Chocolate Chia Protein Pudding" />
          <p>
            Looking for a healthy and delicious way to boost your protein intake? This chocolate chia protein pudding is perfect for you. It’s easy to make, packed with nutrients, and can be enjoyed as a snack or dessert.
          </p>
          <h2>Ingredients</h2>
          <ul>
            <li>2 tablespoons chia seeds</li>
            <li>1 cup almond milk</li>
            <li>1 scoop chocolate protein powder</li>
            <li>1 tablespoon cocoa powder</li>
            <li>1 teaspoon honey or maple syrup</li>
            <li>1/2 teaspoon vanilla extract</li>
          </ul>
          <h2>Instructions</h2>
          <p>
            In a bowl, mix chia seeds, almond milk, chocolate protein powder, cocoa powder, honey, and vanilla extract. Stir well until combined. Let it sit for 5 minutes, then stir again to prevent clumping. Cover and refrigerate for at least 2 hours or overnight. Enjoy chilled.
          </p>
        </BlogPost>
      </BlogPageContainer>
    </ThemeProvider>
  );
};

export default Blog7;
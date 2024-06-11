import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from "../utils/Themes";
import { Link } from 'react-router-dom';


const BlogPageContainer = styled.div`
  width: 100%;
  height: 100vh; // Full viewport height
  background-image: "https://wallpapercave.com/wp/wp12288633.jpg";
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  overflow-y: auto; // Enable scrollbar when content overflows
  background: ${({ theme }) => theme.blue}; 
  color: ${({ theme }) => theme.text_primary};
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
  max-width: 800px;
  margin-bottom: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.bgLight};
  border-radius: 10px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.shadow};

  h2 {
    font-size: 1.5em;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.6;
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BlogPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
         
      <BlogPageContainer>
        <Header>
          <h1>Health & Fitness Blog</h1>
        </Header>

        <BlogPost>
          <h2>TRAINING TO FAILURE: 5 QUESTIONS YOU NEED TO ANSWER</h2>
          <img src="https://www.bornfitness.com/wp-content/uploads/2013/08/shutterstock_194099144-1-670x404.jpg" alt="pic" />
          <p>
            Taking every set in your workout to complete exhaustion might be a big mistake. Training to failure can build muscle and strength, but only if done right.<br />
            <Link to="/blog1">Read more here</Link>
          </p>
        </BlogPost>

        <BlogPost>
          <h2>WHY YOUR AB WORKOUTS DON’T WORK</h2>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/06/COVERS-6-670x404.png" alt="Build Muscle" />
          <p>
            It’s time to rethink what you “know” about best ab workouts. Here’s a smarter approach to the best core workouts, reducing pain, and making you stronger.
            <Link to="/blog2">Read more here</Link>
          </p>
        </BlogPost>

        <BlogPost>
          <h2>WHY DO SQUATS HURT? (AND HOW TO FIX THE PROBLEMS)</h2>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/06/COVERS-5-670x404.png" alt="Lose Fat" />
          <p>
            Do squats hurt your back? What about pain in your knees? This pain-free approach will fix your squat, increase strength, and prevent injury.
            <Link to="/blog3">Read more here</Link>
          </p>
        </BlogPost>

        <BlogPost>
          <h2>ULTIMATE GUIDE TO BODYWEIGHT EXERCISES FOR YOUR HOME WORKOUT</h2>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/06/COVERS-1-670x404.png" alt="Calorie" />
          <p>
            Can your ability to do more pushups prolong your life? The question might sound like a joke, but science has recently focused on better ways to predict lifespan. And, one study found that your ability to crush pushups might determine if you can fight off cardiovascular disease. And, it’s not just pushups. The link between bodyweight strength and your health is becoming too hard to ignore.
            <Link to="/blog4">Read more here</Link>
          </p>
        </BlogPost>

        <BlogPost>
          <h2>13 CAFFEINE-FREE WAYS TO BOOST ENERGY</h2>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/07/COVERS-670x404.png" alt="Squat" />
          <p>
            13 ways to get more energy so you can power through your workouts, feel more productive, and make the most of each day. No caffeine required.  
            <Link to="/blog5">Read more here</Link>
          </p>
        </BlogPost>

        <BlogPost>
          <h2>THE DIFFERENT FORMS OF WHEY PROTEIN AND WHAT’S BEST FOR YOU</h2>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/07/COVERS-1-670x404.png" alt="Kettlebell Goblet Clean" />
          <p>
            What’s best: whey protein concentrate, isolate, or hydrolysate? This article breaks down the differences to help you understand what’s best for you.
            <Link to="/blog6">Read more here</Link>
          </p>
        </BlogPost>

        <BlogPost>
          <h2>CHOCOLATE CHIA PROTEIN PUDDING</h2>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/07/1-6-670x404.png" alt="Great Workout" />
          <p>
            The addition of chia seeds in this dessert increases fiber (keeps you feeling fuller longer) and omega-3 (heart-healthy). Chocolate Chia Protein Pudding Ingredients Yields 3 servings 1 tbsp coconut sugar or sugar substitute 2 tbsp unsweetened cocoa 1 scoop unflavored protein powder 1 tsp vanilla extract 1 1/2 cups unsweetened regular or vanilla almond milk […]
            <Link to="/blog7">Read more here</Link>
          </p>
        </BlogPost>

        <BlogPost>
          <h2>THE MAGIC PILL IS THE WAY</h2>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/09/the-magic-pill-670x404.png" alt="Sentenced To Life" />
          <p>
            For years, I’ve been saying there is no magic pill. But, maybe I was wrong… here’s why.
            <Link to="/blog8">Read more here</Link>
            
          </p>
        </BlogPost>

      </BlogPageContainer>
    </ThemeProvider>
  );
};

export default BlogPage;

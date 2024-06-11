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

  ul {
    padding-left: 20px;
    margin-bottom: 20px;
  }

  li {
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    display: block; /* Ensures the image is treated as a block element */
    margin-left: auto; /* Aligns the image to the center */
    margin-right: auto; /* Aligns the image to the center */
  }
`;

const Blog4 = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BlogPageContainer>
        <Header>
          <h1>Effective Bodyweight Exercises for Strength and Fitness</h1>
        </Header>

        <BlogPost>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/06/COVERS-1-670x404.png" alt="Bodyweight Exercises" align="center" />
          <p>
            Bodyweight exercises are a convenient and effective way to build strength, improve flexibility, and enhance overall fitness without the need for equipment. Whether you're a beginner or advanced fitness enthusiast, incorporating bodyweight exercises into your routine can help you achieve your fitness goals.
          </p>
          <h2>1. Push-ups</h2>
          <p>
            Push-ups are a classic bodyweight exercise that targets the chest, shoulders, triceps, and core muscles. Proper form is essential to maximize the effectiveness of push-ups and prevent injury. Key points to remember include:
          </p>
          <ul>
            <li>Start in a high plank position with your hands slightly wider than shoulder-width apart.</li>
            <li>Lower your body until your chest nearly touches the ground, keeping your elbows close to your body.</li>
            <li>Push through your palms to return to the starting position, fully extending your arms.</li>
            <li>Engage your core throughout the movement to maintain stability.</li>
          </ul>
          <h2>2. Bodyweight Squats</h2>
          <p>
            Bodyweight squats are an excellent lower body exercise that targets the quadriceps, hamstrings, glutes, and calves. Proper squat technique is crucial to prevent injury and maximize muscle engagement. Here's how to perform bodyweight squats with proper form:
          </p>
          <ul>
            <li>Stand with your feet shoulder-width apart, toes pointed slightly outward.</li>
            <li>Engage your core and keep your chest up as you lower your body by bending your knees and pushing your hips back.</li>
            <li>Lower yourself until your thighs are parallel to the ground or slightly below.</li>
            <li>Push through your heels to return to the starting position, fully extending your legs.</li>
          </ul>
          <h2>3. Plank</h2>
          <p>
            The plank is a core-strengthening exercise that also engages the shoulders, back, and glutes. Holding a plank position with proper form challenges your core muscles and improves overall stability. Here's how to perform a plank:
          </p>
          <ul>
            <li>Start in a forearm plank position with your elbows directly beneath your shoulders and your body in a straight line from head to heels.</li>
            <li>Engage your core muscles and avoid arching or rounding your back.</li>
            <li>Hold the position for the desired duration, maintaining proper form throughout.</li>
          </ul>
          <h2>4. Lunges</h2>
          <p>
            Lunges are a versatile lower body exercise that targets the quadriceps, hamstrings, glutes, and calves. Performing lunges with proper form helps improve balance, stability, and leg strength. Here's how to do a basic bodyweight lunge:
          </p>
          <ul>
            <li>Start by standing tall with your feet hip-width apart.</li>
            <li>Take a step forward with one foot, lowering your body until both knees are bent at a 90-degree angle.</li>
            <li>Ensure your front knee is directly above your ankle, and your back knee hovers just above the ground.</li>
            <li>Push through your front heel to return to the starting position, then repeat on the other side.</li>
          </ul>
          <h2>5. Mountain Climbers</h2>
          <p>
            Mountain climbers are a dynamic full-body exercise that targets the core, shoulders, chest, and legs. Performing mountain climbers with proper form and control increases cardiovascular endurance and core strength. Here's how to do mountain climbers:
          </p>
          <ul>
            <li>Start in a high plank position with your hands directly beneath your shoulders and your body in a straight line.</li>
            <li>Engage your core and bring one knee toward your chest, then quickly switch legs, alternating back and forth in a running motion.</li>
            <li>Keep your hips level and maintain a steady pace throughout the exercise.</li>
          </ul>
          <p>
            Incorporating these bodyweight exercises into your fitness routine can help you build strength, improve flexibility, and boost overall fitness levels. Remember to prioritize proper form, listen to your body, and progress gradually to avoid injury.
          </p>
        </BlogPost>
      </BlogPageContainer>
    </ThemeProvider>
  );
};

export default Blog4;
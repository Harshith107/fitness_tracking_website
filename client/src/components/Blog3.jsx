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

const Blog3 = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BlogPageContainer>
        <Header>
          <h1>Why Do Squats Hurt?</h1>
        </Header>

        <BlogPost>
          <img src="https://www.bornfitness.com/wp-content/uploads/2021/06/COVERS-5-670x404.png" alt="Why Do Squats Hurt?" />
          <p>
            Squats are a fundamental exercise for building strength and muscle, but they can also cause discomfort or pain. Understanding why squats hurt can help you address the issue and improve your form and technique.
          </p>
          <h2>1. Common Causes of Squat Pain</h2>
          <p>
            Several factors can contribute to pain during squats, including improper form, muscle imbalances, and insufficient mobility. It's crucial to identify the root cause to prevent injury. Other common causes include:
          </p>
          <ul>
            <li><strong>Patellar Tendonitis:</strong> Pain in the front of the knee due to overuse or stress on the patellar tendon.</li>
            <li><strong>Meniscus Tears:</strong> Injuries to the cartilage in the knee, often due to twisting movements during squats.</li>
            <li><strong>Lower Back Strain:</strong> Pain in the lower back from improper form or excessive weight.</li>
            <li><strong>Hip Impingement:</strong> Discomfort in the hip joint caused by restricted movement or improper form.</li>
          </ul>
          <h2>2. Improper Form</h2>
          <p>
            Poor squat technique, such as knee valgus (knees caving in) or excessive forward lean, can put undue stress on your joints and muscles. Ensuring proper alignment and form is essential. Key points to maintain proper form include:
          </p>
          <ul>
            <li>Keep your feet shoulder-width apart.</li>
            <li>Maintain a neutral spine with a slight arch in the lower back.</li>
            <li>Ensure your knees track over your toes without caving in or flaring out.</li>
            <li>Lower yourself until your thighs are parallel to the ground or slightly below, depending on your mobility.</li>
            <li>Avoid over-arching the lower back or rounding the spine excessively.</li>
            <li>Engage your core muscles throughout the movement to stabilize your spine.</li>
          </ul>
          <h2>3. Muscle Imbalances</h2>
          <p>
            Weakness or tightness in certain muscle groups can lead to pain during squats. Strengthening your glutes, hamstrings, and core can help alleviate discomfort. Additionally, addressing muscle imbalances through targeted exercises can improve your overall squat performance.
          </p>
          <ul>
            <li>Incorporate unilateral exercises such as lunges or split squats to address muscle imbalances between the left and right sides of your body.</li>
            <li>Include exercises targeting the hip abductors and external rotators to improve hip stability and prevent inward knee collapse.</li>
          </ul>
          <h2>4. Insufficient Mobility</h2>
          <p>
            Limited ankle, hip, or thoracic spine mobility can hinder your squat depth and form. Incorporating mobility exercises into your routine can improve your squatting mechanics. Effective mobility exercises include:
          </p>
          <ul>
            <li>Ankle dorsiflexion stretches.</li>
            <li>Hip flexor and hamstring stretches.</li>
            <li>Thoracic spine extensions and rotations.</li>
            <li>Practice deep squat holds to improve flexibility and comfort in the bottom position of the squat.</li>
            <li>Perform dynamic warm-up routines focusing on mobility drills before squatting.</li>
          </ul>
          <h2>5. Solutions and Tips</h2>
          <ul>
            <li>Focus on proper form and alignment.</li>
            <li>Gradually increase squat depth and intensity to avoid sudden overload.</li>
            <li>Listen to your body and modify exercises or reduce weight if experiencing persistent pain.</li>
            <li>Include regular rest and recovery days in your training schedule to allow muscles and joints to recover.</li>
            <li>Consult with a qualified fitness professional or physical therapist for personalized advice and assistance.</li>
          </ul>
          <p>
            Understanding and addressing the causes of squat pain can help you improve your technique, prevent injury, and make the most of your workout.
          </p>
        </BlogPost>
      </BlogPageContainer>
    </ThemeProvider>
  );
};

export default Blog3;
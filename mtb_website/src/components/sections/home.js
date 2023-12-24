import React from "react"
import styled, {keyframes} from "styled-components"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import FadeIn from 'react-fade-in';

const StyledHomeSection = styled.section`
    overflow: hidden;

  ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    min-height: 85vh;
    padding: 0px;
}
  .big-heading{
      font-size: var(--fz-xxl)
  }
  a{
    display: inline-block;
    position: relative;
    color: var(--green);
  }
  a:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--green);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-lg));
    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }
  p {
    margin: 20px 0 0;
    max-width: 540px;
    font-famil: var(--font-mono);
  }
  .special{
    color: var(--green);
  }
`;
const Home = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Allen Lu.</h2>;
  const three = <h3 className="big-heading">I am a software engineer.</h3>;
  const four = (
    <>
      <p>
        I am a fourth-year senior majoring in 
        {''} <a href="https://www.cs.cmu.edu" className="special" target="_blank" rel="noopener noreferrer"> Computer Science </a> at
        <a href="https://www.cmu.edu" className="special" target="_blank" rel="noopener noreferrer"> Carnegie Mellon University </a>. 
        Most recently, I was a back-end software engineering intern at
        {''} <a href="https://ziphq.com/" className="special" target="_blank" rel="noopener noreferrer"> ZipHQ </a>.
        I am currently seeking new grad software engineering roles.
    
      </p>
    </>
  );
  

  const items = [one, two, three, four];

  return (
    <StyledHomeSection id="home">
      
        <TransitionGroup component={null}>
            <FadeIn transitionDuration="750" delay="250">
                {items.map((item, i) => (
                    
                    <div>{item}</div>
                    ))}
            </FadeIn>
        </TransitionGroup>
      
    </StyledHomeSection>
  );
}
export default Home
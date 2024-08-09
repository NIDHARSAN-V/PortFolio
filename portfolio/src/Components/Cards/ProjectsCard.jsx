import React from 'react'
import styled from 'styled-components'
const HeroImg = require("../../images/new.jpg");

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px); 
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-overflow: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Details = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
  
`;

const Title = styled.div`
font-size: 20px;
font-weight: 600;
color: ${({theme})=>theme.text_secondary};
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.9em;
`;

const Description = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.text};
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

const Button = styled.div`

`;

function ProjectsCard({ project }) {
  return (
    <Card>
      <Image />
      <Tags>
        {project.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {(project.members || []).map((member, index) => (
          <Avatar key={index} src={member.img || HeroImg} alt={member.name} />
        ))}
      </Members>
      <Button href={project.github} target="_blank">
        View Project
      </Button>
    </Card>
  );
}

export default ProjectsCard;

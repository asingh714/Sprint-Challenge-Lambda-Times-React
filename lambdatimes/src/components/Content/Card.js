import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";


const CardDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;


const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const Author = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  padding: 24px;
`;

const ImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const Img = styled.img`
  width: 40px;
`;

const AuthorSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

 

const Card = props => {
  return (
    // DONE
    <CardDiv>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgContainer>
          <Img src={props.card.img} alt="Author" />
        </ImgContainer>
        <AuthorSpan>By {props.card.author}</AuthorSpan>
      </Author>
    </CardDiv>
  );
};

// DONE
// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  })
}

export default Card;

/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LoginIcon, MenuIcon } from '../svg';

const Container = styled.div`
  display: flex;
`;

const CategoryBox = styled.div`
  display: flex;
  background-color: red;
  width: 100%;
  height: 100px;
  padding: 0.5em;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.button`
  display: flex;
  background-color: blue;
  border: none;
  color: white;
  height: 100px;
  padding: 1em;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BoardCategoryBox = styled.button`
  display: flex;
  background-color: green;
  border: none;
  color: white;
  height: 100px;
  padding: 1em;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: beige;
  font-size: large;
  font-weight: 600;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
`;

export function Header() {
  return (
    <Container>
      <BoardCategoryBox>
        <MenuIcon />
      </BoardCategoryBox>
      <CategoryBox>
        <Link to="/">
          <Button>Main</Button>
        </Link>
        <Link to="/board">
          <Button>Board</Button>
        </Link>
        <Link to="/mypage">
          <Button>My Page</Button>
        </Link>
      </CategoryBox>
      <LoginBox>
        <Link to="/login">
          <LoginIcon />
        </Link>
      </LoginBox>
    </Container>
  );
}

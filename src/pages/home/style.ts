import styled from 'styled-components';
import { shade } from 'polished'

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 650px;
  line-height: 56px;
  margin-top: 80px;
`

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
      width: 200px;
      height: 70px;
      background-color: #00D25A;
      border-radius: 0 5px 5px 0;
      border: 0;
      color: #fff;
      font-weight: bold;

      &:hover {
        transition: 1s;
        background: ${shade(0.2, '#00D25A')};
      }
    }
`

export const Repositories = styled.div`
  margin-top: 88px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: .5s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
        margin-top: 18px;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #3D3D4D;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`

export const Button = styled.button`
  height: 50px; 
  width: 100px; 
  border: none; 
  background: lightgray; 
  border-radius: 15px;
  margin-top: 20px;
  color: #011;

  &:hover {
    transform: translateX(10px);
    transition: .5s;
  }
`

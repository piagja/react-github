import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #8a8bb3;
    transition: color 0.8s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width:120px;
      height: 120px;
      border-radius: 50%;
    }

      div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #545454;
      }

      p {
        font-size: 18px;
        color: #929292;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        font-weight: bold;
        color: #545454;
      }

      span {
        display: block;
        margin-top: 8px;
        color: #949494;
      }
    }
  }
`

export const Issues = styled.section`
  margin-top: 88px;

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
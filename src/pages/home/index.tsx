import React from 'react';
import Logo from '../../img/logo-github.svg'
import { Title, Form, Repositories } from './style'
import { FiChevronRight } from 'react-icons/fi'

const Home: React.FC = () => {
  return (
    <>
      <img src={Logo} alt='Logo app' />
      <Title>Encontre no Github</Title>
      <Form action=''>
        <input type='text' name='' id='' />
        <button type='submit'>Pesquisar</button>
      </Form>
      <Repositories>
        <a href="/">
          <img src='https://avatars.githubusercontent.com/u/47226459?s=460&u=5e60f5cf069c065392e3220bf9a30b2fdd974fd5&v=4' alt='' />
          <div>
            <strong>pigja</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={40}/>
        </a>
      </Repositories>
    </>
  )
}

export default Home
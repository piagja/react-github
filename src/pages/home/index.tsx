import React,  { FormEvent, useState } from 'react';
import { Title, Form, Repositories } from './style'
import { FiChevronRight } from 'react-icons/fi'

import Logo from '../../img/logo-github.svg'
import api from '../../services/api';

interface Repository {
  full_name: string,
  description: string,
  owner: {
    login: string,
    avatar_url: string
  }
}

const Home: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])

  async function handleAddRepository (event: FormEvent<HTMLFormElement>) {
    // adicionar novos repositorios
    event.preventDefault()
    const response = await api.get(`repos/${newRepo}`)
    const repository = response.data
    console.log(repository)
    setRepositories([...repositories, repository])
  }

  return (
    <>
      <img src={Logo} alt='Logo app' />
      <Title>Encontre no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input 
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type='text'
          placeholder='Pesquise pelo Github'/>
        <button type='submit'>Pesquisar</button>
      </Form>
      <Repositories>
          { repositories.map((repo, index) => (
          <a key={index} href="/">
            <>
              <img 
                src={repo.owner.avatar_url} 
                alt={repo.owner.login} />
              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
              </div>
              <FiChevronRight size={40}/>
            </>
          </a>
          ))}
      </Repositories>
    </>
  )
}

export default Home
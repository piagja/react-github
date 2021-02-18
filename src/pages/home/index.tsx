import React,  { FormEvent, useState } from 'react';
import { Title, Form, Repositories, Button, Error } from './style'
import { FiChevronRight } from 'react-icons/fi'
import { toast } from 'react-toastify'

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
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])

  async function handleAddRepository (event: FormEvent<HTMLFormElement>) {
    try {
    // adicionar novos repositorios
    event.preventDefault()
    if (!newRepo) {
      setInputError('Digite o nome do repositório: usuário/repositório!')
      toast.error('Campo vazio, por favor, preencha-o corretamente.')
      return
    }

    const response = await api.get(`repos/${newRepo}`)
    const repository = response.data
    setRepositories([...repositories, repository])
    setNewRepo('')
    toast.success('Repositório adicionado com sucesso!')
    } catch (e) {
      setInputError('Digite o nome do repositório: usuário/repositório!')
      return toast.error('Erro na requisição ' + e)
    }
  }

  function clearRepos() {
    setRepositories([])
    toast.success('Repositórios limpos!')
  }

  return (
    <>
      <img src={Logo} alt='Logo app' />
      <Title>Encontre repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input 
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type='text'
          placeholder='Pesquise pelo Github'/>
        <button type='submit'>Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}        
      <Repositories>
          { repositories.map((repo, index) => (
          <a key={index} href="repo">
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
      <Button onClick={clearRepos}>Limpar</Button>
    </>
  )
}

export default Home
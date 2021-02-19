import React, { useEffect, useState } from 'react'
import Logo from '../../img/logo-github.svg'
import api from '../../services/api'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Header, RepositoryInfo, Issues } from './style'
import { Link, useRouteMatch } from 'react-router-dom'

interface RepositoryParams {
  repository: string
}

interface Repository {
  full_name: string,
  description: string,
  forks_count: number,
  open_issues_count: number,
  stargazers_count: number,
  owner: {
    login: string,
    avatar_url: string
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null)
  const [issues, setIssues] = useState()
  const { params } = useRouteMatch<RepositoryParams>()

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(
      response => {
        console.log(response.data)
        setRepository(response.data)
      }
    )

    api.get(`repos/${params.repository}/issues`).then(
      response => {
        console.log(response.data)
      }
    )
  }, [])

  return (
    <>
      <Header>
        <img src={Logo} alt='Logo app' />
        <Link to='/'>
          <FiChevronLeft size={40}/> Go Back
        </Link>
      </Header>
      { repository && (
          <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.full_name}/>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Open Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
        )}
      <Issues>

        <a href="la">
          <div>
              <div>
                <strong>Issues Title</strong>
                <p>description</p>
              </div>
          </div>
              <FiChevronRight size={40}/>
        </a>
        <a href="la">
          <div>
              <div>
                <strong>Issues Title</strong>
                <p>description</p>
              </div>
          </div>
              <FiChevronRight size={40}/>
        </a>

      </Issues>
    </>
  )
}

export default Repository
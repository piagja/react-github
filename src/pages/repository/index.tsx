import React, { useEffect, useState } from 'react'
import Logo from '../../img/logo-github.svg'
import api from '../../services/api'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Header, RepositoryInfo, Issues } from './style'
import { Link, useRouteMatch } from 'react-router-dom'

interface Repositories {
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

interface RepositoryParams {
  repository: string
}

interface IssuesParams {
  id: number,
  title: string,
  html_url: string,
  user: {
    login: string
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repositories | null>(null)
  const [issues, setIssues] = useState<IssuesParams[]>([])
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
        setIssues(response.data)
      }
    )

    // async function loadData(): Promise<void> {
    //   const repository = await api.get(`repos/${params.repository}`)
    //   const issues = await api.get(`repos/${params.repository}/issues`)

    //   console.log('repository', repository.data)
    //   console.log('issues', issues.data)
    // }

    // loadData()
  }, [params.repository])

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
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
                <div>
                  <strong>{issue.title}</strong>
                  <p>{issue.user.login}</p>
                </div>
              </div>
            <FiChevronRight size={40}/>
          </a>
        ))}
      </Issues>
    </>
  )
}

export default Repository
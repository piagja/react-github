import React from 'react'
import Logo from '../../img/logo-github.svg'
import { FiChevronLeft } from 'react-icons/fi'
import { Header, RepositoryInfo } from './style'
import { Link, useRouteMatch } from 'react-router-dom'

interface RepositoryParams {
  repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return (
    <>
      <Header>
        <img src={Logo} alt='Logo app' />
        <Link to='/'>
          <FiChevronLeft size={40}/> Go Back
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars.githubusercontent.com/u/47226459?s=460&u=5e60f5cf069c065392e3220bf9a30b2fdd974fd5&v=4" alt="Logo Repository"/>
          <div>
            <strong>Repository Info</strong>
            <p>Descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>123556</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>123556</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>123556</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  )
}

export default Repository
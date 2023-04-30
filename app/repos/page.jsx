import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import Link from 'next/link'

async function fetchRepos() {
  const resp = await fetch(`https://api.github.com/users/bradtraversy/repos`)
  await new Promise((res) => setTimeout(res, 2000))

  const repos = await resp.json()
  return repos
}

const ReposPage = async () => {
  const repos = await fetchRepos()

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.length !== 0
          ? repos.map((repo) => (
              <li key={repo.id}>
                <Link href={`/repos/${repo.name}`}>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <div className="repo-details">
                    <span>
                      <FaStar /> {repo.stargazers_count}
                    </span>
                    <span>
                      <FaCodeBranch /> {repo.forks_count}
                    </span>
                    <span>
                      <FaEye /> {repo.watchers_count}
                    </span>
                  </div>
                </Link>
              </li>
            ))
          : repos.message}
      </ul>
    </div>
  )
}

export default ReposPage

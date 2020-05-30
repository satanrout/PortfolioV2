import React, { Fragment } from 'react';
import "./medium.css";

class RepoCard extends React.Component {
  constructor(props) {
    super(props);
    this.apiRoot = 'https://api.github.com/repos';
    this.state = {};
  }

  componentDidMount() {
    (async () => {
      try {
        let address = `${this.apiRoot}/${this.props.username}/${this.props.repo}`;
        if (this.props.clientId && this.props.clientSecret) {
            address += `?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`
        }
        const response = await fetch(address);
        const repo = await response.json();
        this.setState({ repo });
      } catch (err) {
        console.error(err.message);
      }
    })();
  }

  render() {
    if (this.state.repo) {
      const profileUrl = this.state.repo.owner.html_url;
      const repoUrl = this.state.repo.html_url;
      const repoName = this.state.repo.name;
      const user = this.state.repo.owner.login;
      const forks = this.state.repo.forks_count;
      const stars = this.state.repo.stargazers_count;
      return (
        <div className="medium-theme">
          <div className="github-card repo-card">
            <div className={`header`}>
              <h1>
                <a href={repoUrl}>{repoName}</a>
              </h1>
            </div>
            <div className="content">
      <div className="description">{this.state.repo.description}{this.state.repo.network}</div>
              <ul className="status">
                <li><strong>{forks}</strong>Forks</li>
                <li><strong>{stars}</strong>Stars</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export { RepoCard };

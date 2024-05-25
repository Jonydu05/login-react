import githubLogo from '../../assets/github-mark.svg';

function Header() {
  return (
    <header className='header'>
      <h2>Login</h2>

      <a href='/'>Início</a>

      <a href='https://github.com/Jonydu05' className='svg-github'>
        <img src={githubLogo} alt='Logo github' />
      </a>
    </header>
  );
}

export default Header;

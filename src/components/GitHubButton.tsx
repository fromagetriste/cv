const GitHubButton: React.FC = () => {
  return (
    <a
      href="https://github.com/fromagetriste"
      target="_blank"
      className="github-button"
      rel="noopener noreferrer"
    >
      <img
        className="logo-github"
        src={`${import.meta.env.BASE_URL}/icons/github-icon.svg`}
        alt="github icon"
      />
    </a>
  );
};

export default GitHubButton;

const LinkedInButton = () => {
  return (
    <a
      href="https://www.linkedin.com/in/damiengravelle/"
      target="_blank"
      className="linkedin-button"
    >
      <img
        className="logo-linkedin"
        src={`${import.meta.env.BASE_URL}/icons/linkedin-icon.svg`}
        alt="linkedin icon"
      />
    </a>
  );
};

export default LinkedInButton;

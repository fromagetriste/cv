const WhatsApp = () => {
  return (
    <div className="form-card" id="contact-shadow">
      <div className="photo-container">
        <img
          className="contact-photo"
          src={`${
            import.meta.env.BASE_URL
          }/icons/contact/whatsapp-damien-fr.jpg`}
          alt="profile picture"
        />
      </div>

      <div className="contact-buttons-container">
        <button
          className="contact-button contact-whatsapp"
          onClick={() => window.open("https://wa.me/33695739622", "_blank")}
        >
          WhatsApp
        </button>
        <button
          className="contact-button contact-cv"
          onClick={() =>
            window.open(
              `${import.meta.env.BASE_URL}/CV/FRA-ENG-Damien-Gravelle.pdf`,
              "_blank"
            )
          }
        >
          View my CV
        </button>
      </div>
    </div>
  );
};

export default WhatsApp;

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        Компания Google не имеет никакого отношения к этому контенту.&thinsp;
        <a
          className="footer-link"
          href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdJd5QttkBXAf0ag4wgi3N_W_4mOOqBxEjK2XNA4tEl_LwZWg/reportabuse?source=https://docs.google.com/forms/d/e/1FAIpQLSdJd5QttkBXAf0ag4wgi3N_W_4mOOqBxEjK2XNA4tEl_LwZWg/viewform"
          target="_blank"
        >
          Сообщение о нарушении
        </a>
        &thinsp; - &thinsp;
        <a href="https://policies.google.com/terms" className="footer-link" target="_blank">
          Условия использования
        </a>
        &thinsp; - &thinsp;
        <a href="https://policies.google.com/privacy" className="footer-link" target="_blank">
          Политика конфиденциальности
        </a>
      </div>
      <div className="footer-item footer-img">
        <img
          src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg"
          alt="google"
        />
        <span className="img-title">&thinsp;Формы</span>
      </div>
    </footer>
  );
};

export default Footer;

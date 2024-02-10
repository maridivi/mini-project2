export default function AboutPage() {
  return (
    <div className="AboutPage">
      <h1>About</h1>
      <p>This app allows you to create and manage your favorite recipes.</p>

      <h2>The Team</h2>
      <div className="TeamMember">
        <p>Marianna Di Vito</p>
        <div className="Links">
          <a>LinkedIn</a>
          <a>Github</a>
        </div>
      </div>

      <div className="TeamMember">
        <p>Melanie Schiffner</p>
        <div className="Links">
          <a href="https://www.linkedin.com/in/melanie-schiffner-525b8aa2/">
            LinkedIn
          </a>
          <a href="https://github.com/MelSchiffner">Github</a>
        </div>
      </div>
    </div>
  );
}

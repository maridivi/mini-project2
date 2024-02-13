import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import MaryAvatar from "../assets/images/marianna.jpeg";
export default function AboutPage() {
  return (
    <div className="AboutPage">
      <h1>About</h1>
      <p>
        This app allows you to explore, update or delete recipes, and create new
        ones.
      </p>

      <h2>The Team</h2>
      <div className="MembersCards">
        <div className="TeamMember">
          <img src={MaryAvatar} className="MemberImage" />
          <div className="MemberData">
            <h3>Marianna Di Vito</h3>
            <p>
              Former dentist willing to change career to become web developer.
              <br /> Favourite dish: <b>Pizza</b>
            </p>

            <div className="Links">
              <a href="https://www.linkedin.com/in/marianna-di-vito-b4178676/">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/maridivi">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="TeamMember">
          <img />

          <div className="MemberData">
            <h3>Melanie Schiffner</h3>
            <div className="Links">
              <a href="https://www.linkedin.com/in/melanie-schiffner-525b8aa2/">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/MelSchiffner">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

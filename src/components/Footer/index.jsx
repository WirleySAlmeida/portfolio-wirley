import './styles.css';
import {
  IoLogoGithub as Github,
  IoLogoLinkedin as Linkedin,
  IoMailOutline as Email
} from 'react-icons/io5';

export function Footer() {
  return (
    <footer>
      <a href="mailto:wirley.s.almeida@gmail.com">
        <Email className="icon-footer" color={ 'white' } size={ 50 } />
        <p>wirley.s.almeida@gmail.com</p>
      </a>
      
      <a href="https://github.com/WirleySAlmeida">
        <Github className="icon-footer" color={ 'white' } size={ 50 } />
        <p>github.com/WirleySAlmeida</p>
      </a>

      <a href="https://www.linkedin.com/in/wirley-almeida-91343154/">
        <Linkedin className="icon-footer" color={ 'white' } size={ 50 } />
        <p>linkedin.com/wirley-almeida</p>
      </a>
    </footer>
  );
}
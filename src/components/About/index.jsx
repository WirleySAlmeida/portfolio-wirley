import './styles.css';
import picture from '../../assets/wirleyalmeida.jpeg';
import { ProgressBar } from './ProgressBar';

export function About() {
  return (
    <main id='about' >

      <div className="infos-about">
        <h1 className='title-about'>Wirley Almeida</h1>
        <h2 className='subtitle-about'>Desenvolvedor Web Full Stack</h2>
        <ProgressBar className="progress-bar" width={ 354 } percent={ 100 } />
        <div className="text-about">
          <p>Certified Tech Developer</p>
          <p>Digital House Brasil</p>
          <p>Atualmente no 3º bimestre</p>
        </div>
      </div>

      <div className="picture">
        <img src={ picture } />
      </div>

    </main>
  );
}
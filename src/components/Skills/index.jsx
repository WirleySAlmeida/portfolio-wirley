import './styles.css';
import {
  SiAmazonaws as Aws,
  SiBootstrap as Bootstrap,
  SiCss3 as Css,
  SiDocker as Docker,
  SiFlask as Flask,
  SiGit as Git,
  SiHtml5 as Html,
  SiJava as Java,
  SiJavascript as JavaScript,
  SiMysql as MySql,
  SiPython as Python,
  SiReact,
  SiSass as Sass,
  SiSpring as Spring
} from 'react-icons/si';
import ReactTooltip from 'react-tooltip';

export function Skills() {
  return (
    <div className='content-skills' id='skills'>
      <h1 className='title-skills'>Habilidades</h1>

      <div className="badges-skills">

        <div className="container-skills">
          <h2 className='subtitle-skills'>Front End</h2>
          <div className='container-badges-skills'>
            <Html data-tip="HTML" color={ 'OrangeRed' } size={ 50 } />
            <ReactTooltip place="bottom" type="light" effect="solid" />
            <Css data-tip="CSS" color={ 'RoyalBlue' } size={ 50 } />
            <Bootstrap data-tip="Bootstrap" color={ 'Indigo' } size={ 50 } />
            <Sass data-tip="Sass" color={ '#bf4080' } size={ 50 } />
            <JavaScript data-tip="JavaScript" color={ 'Gold' } size={ 50 } />
            <SiReact data-tip="React" color={ '#61dafb' } size={ 50 } />
          </div>
        </div>

        <div className="container-skills">
          <h2 className='subtitle-skills'>Back End</h2>
          <div className="container-badges-skills">
            <Java data-tip="Java" size={ 60 } />
            <Spring data-tip="Spring" color={ '#6db33f' } size={ 50 } />
            <Python data-tip="Python" size={ 50 } />
            <Flask data-tip="Flask" size={ 50 } />
          </div>
        </div>

        <div className="container-skills">
          <h2 className='subtitle-skills'>Git, Banco de Dados e Infraestrutura</h2>
          <div className="container-badges-skills">
            <Git data-tip="Git" color={ '#f14e32' } size={ 50 } />
            <MySql data-tip="MySQL" size={ 60 } />
            <Docker data-tip="Docker" color={ '#2496ed' } size={ 50 } />
            <Aws data-tip="AWS" size={ 50 } />
          </div>
        </div>

      </div>
    </div>
  );
}
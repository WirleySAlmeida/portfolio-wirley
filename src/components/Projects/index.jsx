import './styles.css';
import { BiLink } from 'react-icons/bi';

const data = [
  {
    id: '1',
    name: 'Front End I - Checkpoint 1',
    link: 'https://wirleysalmeida.github.io/checkpoint1FrontEndI/',
    image: 'src/assets/checkpoint1feiipreview.png'
  },
  {
    id: '2',
    name: 'Front End I - Checkpoint 2',
    link: 'https://wirleysalmeida.github.io/FE-checkpoint-2/',
    image: 'src/assets/checkpoint2feipreview.png'
  },
  {
    id: '3',
    name: 'Front End I - Checkpoint 3',
    link: 'https://wirleysalmeida.github.io/checkpoint-03-front-end/',
    image: 'src/assets/checkpoint3feipreview.png'
  },
  {
    id: '4',
    name: 'Front End II - Checkpoint 1',
    link: 'https://wirleysalmeida.github.io/checkpoint-front-end-2/',
    image: 'src/assets/checkpoint1feiipreview.png'
  },
  {
    id: '5',
    name: 'Front End II - Checkpoint 2',
    link: 'https://wirleysalmeida.github.io/ctd_fe2_checkpoint2_update/',
    image: 'src/assets/checkpoint2feiipreview.png'
  },
];

export function Projects() {
  return (
    <div className='content-projects' id='projects'>
      <h1 className='title-projects' >Projetos</h1>
      <ul className='list-projects'>
        {
          data.map(({ image, name, link }) => (
            <a target="_blank" href={ link }>
              <li className='item-list-projects'>
                <h3 className='name-projects' >{ name }</h3>
                <img className='image-projects' src={ image } width={ 300 } />
                <BiLink color={ 'white' } size={ 20 } />
              </li>
            </a>
          ))
        }
      </ul>
    </div>
  );
}
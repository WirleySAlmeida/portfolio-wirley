import logo from '../../assets/bracket.png';
import './styles.css';

export function Header() {
  
  function scrollToComponent(id){
    document.getElementById(id).scrollIntoView();
  }

  return (
    <header id='header'>
        <img src={ logo } width={ 50 } />
        <ul className='menu'>
            <li className='item-menu' onClick={ () => scrollToComponent('about') }>Sobre</li>
            <li className='item-menu' onClick={ () => scrollToComponent('projects') } >Projetos</li>
            <li className='item-menu' onClick={ () => scrollToComponent('skills') } >Habilidades</li>
        </ul>
    </header>
  );
}
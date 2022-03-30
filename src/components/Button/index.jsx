import './styles.css';
import { BiChevronUp } from 'react-icons/bi';

export function Button() {
  
  function scrollToTop(id){
      document.getElementById(id).scrollIntoView();
  }

  return (
    <div className='button-scroll-to-top' onClick={ () => scrollToTop('header') }>
      <BiChevronUp className="icon-button-scroll-to-top" size={ 30 } />
    </div>
  );
}
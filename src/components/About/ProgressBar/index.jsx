import { useEffect, useState } from 'react';
import './styles.css';
import MediaQuery from 'react-responsive';

export function ProgressBar({width, percent}) {
  
  const [value, setValue] = useState(0);

  useEffect( () => {
    setValue(width * percent);
  })
  
  return (
    <div>
      <MediaQuery minWidth={ 401 } >
        <div className='progress-div' style={{ width: width }} >
          <div className='progress' style={{ width: `${value}px` }} />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={ 400 }>
        <div className='progress-div' style={{ width: 265 }} >
          <div className='progress' style={{ width: `${value}px` }} />
        </div>
      </MediaQuery>
    </div>
  );
}
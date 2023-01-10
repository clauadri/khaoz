import { render } from '@testing-library/react'
import React from 'react'
import './Musica.scss'
const Musica = () => {
  
    const item = [
      {
        id: 1,
        audio: 'https://nubecolectiva.com/blog/tutos/demos/renderizando_elementos_multimedia_react/mp3/cancion.mp3',
        formato: 'audio/mpeg',
      },{
        id: 2,
        audio: 'https://nubecolectiva.com/blog/tutos/demos/renderizando_elementos_multimedia_react/mp3/cancion.mp3',
        formato: 'audio/mpeg',
      },{
        id: 3,
        audio: 'https://nubecolectiva.com/blog/tutos/demos/renderizando_elementos_multimedia_react/mp3/cancion.mp3',
        formato: 'audio/mpeg',
      }
    ];
    return (
      item.map(item => { 
        return(
          <div className='audio' key={ item.id }>
                  <audio  controls>
                    <source src={ item.audio } type={ item.formato }/>
                  </audio>
                </div>
        )
      })
    
  )
  
  
}

export default Musica
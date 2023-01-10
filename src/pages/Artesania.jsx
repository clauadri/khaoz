import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArtesanias } from '../redux/artesanias/artesanias.functions';
import './Artesania.scss'
const Artesania = () => {

    const dispatch = useDispatch();

    const { artesanias, isLoading, error } = useSelector(
    (state) => state.artesanias
  );
  useEffect(() => {
    dispatch(getArtesanias());
  }, []);

  return (
    <div>
        {isLoading ? (
        <img
          src="https://tbphelps.com/skin/frontend/ultimo/default/images/wating.gif"
          alt="loading"
        />
      ) : !error ? (
        
        artesanias.map((artesania) => {
          return (
            
              <div className="artesania" key={artesania._id}>
                
                <img src={artesania.img} alt={artesania.name} />
                <h3>{artesania.name}</h3>
                <p>{artesania.price} €</p>
                <p>{artesania.description}</p>
                
              </div>
            
          );
        })
      ) : (
        <div style={{ backgroundColor: "red" }}>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  )
}

export default Artesania
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLienzos } from "../redux/lienzos/lienzos.functions";

const Lienzos = () => {
  const dispatch = useDispatch();

  const { lienzos, isLoading, error } = useSelector((state) => state.lienzos);
  useEffect(() => {
    dispatch(getLienzos());
  }, []);
  return (
    <div>
      {isLoading ? (
        <img
          src="https://tbphelps.com/skin/frontend/ultimo/default/images/wating.gif"
          alt="loading"
        />
      ) : !error ? (
        lienzos.map((lienzo) => {
          return (
            <div className="lienzo" key={lienzo._id}>
              <img src={lienzo.img} alt={lienzo.name} />
              <h3>{lienzo.name}</h3>
              <p>{lienzo.price} €</p>
              <p>{lienzo.description}</p>
            </div>
          );
        })
      ) : (
        <div style={{ backgroundColor: "red" }}>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default Lienzos;

import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newUser } from '../redux/users/users.functions';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
  } = useForm();
  const send = async (formData) => {
    console.log(formData);
    dispatch(newUser(formData, navigate));
    navigate("/login");
  };

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(send)} className="register">
        <h2>Registrate</h2>
        <div>
          <input
            placeholder="Nombre"
            type="text"
            name="name"
            {...register("name", {
              required: "Introduce tu email, por favor",
              minLength: {
                value: 2,
                message: "el email tiene que ser mas largo",
              },
            })}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            {...register("email", {
              required: "Introduce tu email, por favor",
              minLength: {
                value: 2,
                message: "el email tiene que ser mas largo",
              },
            })}
          />
          <input
            placeholder="Contraseña"
            type="password"
            name="password"
            {...register("password", {
              required: "El password tiene que existir",
              // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
            })}
          />
          <input
            placeholder="Edad"
            type="text"
            name="age"
            {...register("age", {
              required: "Introduce tu email, por favor",
              minLength: {
                value: 2,
                message: "el email tiene que ser mas largo",
              },
            })}
          />
        </div>
        <button>Register</button>
      </form>
      <div>
        <a onClick={goToLogin}>Ya tienes una cuenta?</a>
      </div>
    </div>
  )
}

export default Register
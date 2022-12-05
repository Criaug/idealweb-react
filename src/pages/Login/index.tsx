import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import styles from './index.module.css';

const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  const campoFocus = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<boolean>(false);
  //controle teclado virtual
  const [campo, setCampo] = useState('username');
  const [cursor, setCursor] = useState<number>(0);
  const auth = useContext(AuthContext);

  useEffect(() => {
    campoFocus?.current?.focus();
  }, []);

  const validaLogin = (e: any) => {
    if (e) e.preventDefault();
    setError(false);

    if (input.username && input.password) {
      const autentica = await auth.login(input.username, input.senha);
    }
  };

  const handleChange = (campo: string, texto: string) => {
    setInput((prevState) => ({ ...prevState, [campo]: texto }));
  };

  const handleCursor = (e: any) => {
    setCursor(e.target.selectionStart);
  };

  const eventoTecla = (tecla: string) => {
    if (campo !== null) {
      if (tecla === 'DEL') {
        setInput((prevState) => ({
          ...prevState,
          [campo]:
            input[campo].substring(0, cursor - 1) +
            input[campo].substring(cursor),
        }));
        setCursor(Number(cursor) - 1);
      } else if (tecla === 'ENTER') {
        validaLogin(false);
      } else {
        setInput((prevState) => ({
          ...prevState,
          [campo]:
            input[campo].substring(0, cursor) +
            tecla +
            input[campo].substring(cursor),
        }));
        setCursor(Number(cursor) + 1);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={validaLogin}>
        <input
          placeholder="username"
          className={styles.input}
          ref={campoFocus}
          required={true}
          onChange={(e) => handleChange(e.target.id, e.target.value)}
          id={'username'}
          onFocus={(e) => setCampo(e.target.id)}
          onKeyUp={(e) => {
            handleCursor(e);
          }}
          onMouseUp={(e) => {
            handleCursor(e);
          }}
          value={input.username}
        ></input>

        <input
          placeholder="password"
          type={'password'}
          className={styles.input}
          required={true}
          onChange={(e) => handleChange(e.target.id, e.target.value)}
          id={'password'}
          onFocus={(e) => setCampo(e.target.id)}
          onKeyUp={(e) => {
            handleCursor(e);
          }}
          onMouseUp={(e) => {
            handleCursor(e);
          }}
          value={input.password}
        ></input>
        <button id="login" name="login" className={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;

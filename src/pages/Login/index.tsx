import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './index.module.css';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const campoFocus = useRef(null);

  const validaLogin = () => {};
  const handleChange = (campo: string, texto: string) => {};
  const handleCursor = (e: React.FormEvent<EventTarget>) => {};

  //controle teclado virtual
  const [campo, setCampo] = useState<string>('username');
  const [cursor, setCursor] = useState<number>(0);

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
          value={inputs.username}
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
          value={inputs.password}
        ></input>
        <button id="login" name="login" className={styles.button}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;

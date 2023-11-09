import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const Elements = () => {
  const navigate=useNavigate()
  const onSave = () => {
    if (loginRef.current.value === 'qadamboyev' && pwRef.current.value === '1203') {
      localStorage.setItem('token', true);
      navigate('/home');
    } else{
      localStorage.setItem('token', false);
      alert('Login yoki Password xato');
    }
  }
  const loginRef = useRef();
  const pwRef = useRef();
  return (
    <div>
      <h1>
        Elements
      </h1>
      <input ref={loginRef} type="text" value={'qadamboyev'} />
      <input ref={pwRef} type="password" value={'1203'} />
      <button onClick={onSave}>LOGIN</button>
    </div>
  )
}
export default Elements;

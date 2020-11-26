import React from 'react';

const Button = ({setVisibleModal, visibleModal, activeTimer, setActiveTimer}) => {

  const visibleHandler = () => {
    setVisibleModal(!visibleModal)
    setActiveTimer(!activeTimer)
  }

  return(
    <>
      <button onClick={visibleHandler} className='open-modal-btn btn' >Let's open modal</button>
    </>
  );
}

export default Button;
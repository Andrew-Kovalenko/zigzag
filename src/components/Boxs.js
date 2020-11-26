import React, {useState} from 'react';

const Boxs = ({setValueData}) => {
  const [boxesState, setBoxesState] = useState([false, true, false]);

  function setBoxActive(number) {
    let newBoxesState = [];

    for (let i = 0; i < boxesState.length; i++) {

      if (i === number) {
        newBoxesState.push(true)
      } else {
        newBoxesState.push(false)
      }

      if (newBoxesState.length !== 0 && newBoxesState !== boxesState) setBoxesState(newBoxesState)
    }
  }

	const valueHandler = (number, putValue, getValue) => {
		setBoxActive(number)
    setValueData({putValue: putValue, getValue: getValue})
  }

  return(
    <>
      <div className="modal_boxs">
        <div onClick={() => valueHandler(0, 50, 100)} 
          className={`modal_box ${boxesState[0] && "active"}`}>
        <div className="put">
          <p className="put_name">Пополнить на</p>
          <p className="put_value_block">
            <span className="put_value_dollar-symbol">$ </span>
            <span className="put_value">50</span>
          </p>
        </div>
        <div className="get">
          <p className="get_name">Получить</p>
          <p className="get_value_block">
            <span className="get_value_dollar-symbol">$ </span>
            <span className="get_value">100</span>
          </p>
        </div>
        </div>
        <div 
          onClick={() => valueHandler(1, 100, 200)} 
          className={`modal_box ${boxesState[1] && "active"}`}>
          <div className="put">
            <p className="put_name">Пополнить на</p>
            <p className="put_value_block">
              <span className="put_value_dollar-symbol">$ </span>
              <span className="put_value">100</span>
            </p>
          </div>
          <div className="get">
            <p className="get_name">Получить</p>
            <p className="get_value_block" value="200">
              <span className="get_value_dollar-symbol">$ </span>
              <span className="get_value">200</span>
            </p>
          </div>
        </div>
        <div 
          onClick={() => valueHandler(2, 500, 1000)} 
          className={`modal_box ${boxesState[2] && "active"}`}>
          <div className="put">
            <p className="put_name">Пополнить на</p>
            <p className="put_value_block">
              <span className="put_value_dollar-symbol">$ </span>
              <span className="put_value">500</span>
            </p>
          </div>
          <div className="get">
            <p className="get_name">Получить</p>
            <p className="get_value_block" value="1000">
              <span className="get_value_dollar-symbol">$ </span>
              <span className="get_value">1000</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Boxs;
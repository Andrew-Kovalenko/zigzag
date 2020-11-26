import React, {useState} from 'react';

import Boxs from './Boxs';
import Timer from './Timer';

const ModalWindow = ({setVisibleModal, visibleModal, activeTimer, setActiveTimer}) => {
	const [paymentMethod, setPaymentMethod] = useState('Биткоин');
	const [valueData, setValueData] = useState({
		putValue: 100,
		getValue: 200
	});

	const visibleHandler = () => {
		setVisibleModal(!visibleModal)
		setActiveTimer(!activeTimer)
	}

	const selectHandler = (e) => {
		setPaymentMethod(e.target.value)
	}

	const alertHandler = () => {
		alert(`Метод пополнения: ${paymentMethod} \nСумма пополнения: ${valueData.putValue}`);
		setVisibleModal(!visibleModal)
		setActiveTimer(!activeTimer)
	}

	return(
    <div className="modal">
    	<div className='modal-container'>
				<div onClick={visibleHandler} className="modal_close-button"></div>

				<Timer 
					setTimerMinutes={16}
					activeTimer={activeTimer} 
					setActiveTimer={setActiveTimer} 
					visibleModal={visibleModal} 
					setVisibleModal={setVisibleModal}
				/>

				<h3 className="modal_title">Увеличь свой депозит</h3>

				<div className="modal_paymethod_container">
					<select value={paymentMethod} onChange={selectHandler} className="modal_paymethod">
						<option value="Банковская карта">Банковская карта</option>
						<option value="Биткоин">Биткоин</option>
						<option value="Выставить счёт">Выставить счёт</option>
					</select>
				</div>

				<Boxs setValueData={setValueData}/>

				<p className="modal_you-will-get">
					<span className="modal_you-will-get_amount">
						{valueData.getValue}
						<span className="modal_you-will-get_dollar-symbol"> $</span>
					</span>
					<span> будет зачисленно вам на счёт</span>
				</p>

				<div className="modal_replanish_container">
					<button 	
						onClick={alertHandler} 
						className="btn modal_replanish" id="replanish">Пополнить</button>
				</div>    

				<div className="modal_anatation-block">
					<p className="modal_anatation-block_text">
						При пополнении счета с банковской карты списание средств происходит по курсу банка клиента</p>
					<div className="modal_anatation-block_learn-more_container">
						<a href="/" className="modal_anatation-block_learn-more">ПОДРОБНЕЕ</a>
					</div>
				</div>
			</div>
		</div>
    );
}

export default ModalWindow;
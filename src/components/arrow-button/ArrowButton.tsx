import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { useEffect, useState } from 'react';
import { IClickProp } from 'src/constants/articleProps';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = ({ onClick: setState, isOpen }: IClickProp) => {
	// const [isOpen, changeStatus] = useState(false);

	let arrowOpenClass = '';
	let containerOpenClass = '';

	if (isOpen) {
		arrowOpenClass = styles.arrow_open;
		containerOpenClass = styles.container_open;
	}

	const openingHandler = () => {
		isOpen ? setState(false) : setState(true);
	};

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} 
			${containerOpenClass}`}
			onClick={openingHandler}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${arrowOpenClass}`}
			/>
		</div>
	);
};

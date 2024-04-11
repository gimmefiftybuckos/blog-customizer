import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { IClickProp } from 'src/constants/articleProps';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = ({
	setOpenStatus: setState,
	isOpen,
}: IClickProp) => {
	const openingHandler = () => {
		isOpen ? setState(false) : setState(true);
	};

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {
				[styles.container_open]: isOpen,
			})}
			onClick={openingHandler}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
			/>
		</div>
	);
};

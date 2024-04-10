import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	IChangeProp,
	ParamsType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { useState } from 'react';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { Text } from '../text';

export const ArticleParamsForm = ({ onChange: setState }: IChangeProp) => {
	const userStorage = useLocalStorage('themeState');

	const params = userStorage || (defaultArticleState as ParamsType);

	const [fontFamilyState, setFontFamilyState] = useState(
		params.fontFamilyOption
	);

	const [fontSizeState, setFontSizeState] = useState(params.fontSizeOption);

	const [fontColorState, setFontColorState] = useState(params.fontColor);

	const [backgroundColorState, setBackgroundColorState] = useState(
		params.backgroundColor
	);

	const [contentWidthState, setcontentWidthState] = useState(
		params.contentWidth
	);

	const state = {
		fontFamilyOption: fontFamilyState,
		fontSizeOption: fontSizeState,
		fontColor: fontColorState,
		backgroundColor: backgroundColorState,
		contentWidth: contentWidthState,
	};

	const submitHandler = (event: React.FormEvent<EventTarget>) => {
		setState(state);

		localStorage.setItem('themeState', JSON.stringify(state));

		event.preventDefault();
	};

	const resetHandler = () => {
		setFontFamilyState(defaultArticleState.fontFamilyOption);
		setFontSizeState(defaultArticleState.fontSizeOption);
		setFontColorState(defaultArticleState.fontColor);
		setBackgroundColorState(defaultArticleState.backgroundColor);
		setcontentWidthState(defaultArticleState.contentWidth);
	};

	const [isOpen, setStatus] = useState(false);

	let containerOpenClass = '';

	if (isOpen) {
		containerOpenClass = styles.container_open;
	}

	return (
		<>
			<ArrowButton onClick={setStatus} isOpen={isOpen} />
			<aside
				className={`
			${styles.container} 
			${containerOpenClass}
			`}>
				<form onSubmit={submitHandler} className={styles.form}>
					<Text size={31} weight={800} uppercase align='left'>
						Задайте параметры
					</Text>
					<Select
						selected={fontFamilyState}
						options={fontFamilyOptions}
						title={'Шрифт'}
						onChange={setFontFamilyState}
					/>
					<RadioGroup
						name={'Font size'}
						selected={fontSizeState}
						options={fontSizeOptions}
						title={'Размер шрифта'}
						onChange={setFontSizeState}
					/>
					<Select
						selected={fontColorState}
						options={fontColors}
						title={'Цвет шрифта'}
						onChange={setFontColorState}
					/>
					<Separator />
					<Select
						selected={backgroundColorState}
						options={backgroundColors}
						title={'Цвет фона'}
						onChange={setBackgroundColorState}
					/>
					<Select
						selected={contentWidthState}
						options={contentWidthArr}
						title={'Ширина контента'}
						onChange={setcontentWidthState}
					/>
					<div className={styles.bottomContainer}>
						<Button onClick={resetHandler} title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};

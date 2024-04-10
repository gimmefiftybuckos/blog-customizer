import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, useEffect } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { ParamsType, defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { useLocalStorage } from './hooks/useLocalStorage';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const userStorage = useLocalStorage('themeState');

	const [state, setState] = useState(userStorage || defaultArticleState);

	const params = state as ParamsType;

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': params.fontFamilyOption.value,
					'--font-size': params.fontSizeOption.value,
					'--font-color': params.fontColor.value,
					'--container-width': params.contentWidth.value,
					'--bg-color': params.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onChange={setState} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

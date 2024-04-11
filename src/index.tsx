import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
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

	const param = state as ParamsType;

	const [isOpen, setOpenStatus] = useState(false);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': param.fontFamilyOption.value,
					'--font-size': param.fontSizeOption.value,
					'--font-color': param.fontColor.value,
					'--container-width': param.contentWidth.value,
					'--bg-color': param.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				transferData={setState}
				setOpenStatus={setOpenStatus}
				isOpen={isOpen}
			/>
			<Article setOpenStatus={setOpenStatus} />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);

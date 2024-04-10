export const useLocalStorage = (value: string) => {
	let storage;

	localStorage.getItem(value)
		? (storage = JSON.parse(localStorage.getItem(value) as string))
		: null;

	return storage;
};

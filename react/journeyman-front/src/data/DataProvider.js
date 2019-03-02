export const fetch = (url, onSuccess, onError) => {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", './' + url, true);

	xhr.onload = function (e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				const data = JSON.parse(xhr.response);
				onSuccess(data);
			} else {
				console.error(xhr.statusText)
			}
		}
	};

	xhr.onError = function (e) {
		onError(e);
	}

	xhr.send();
};
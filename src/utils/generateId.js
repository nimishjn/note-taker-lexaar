function generateRandomString(length) {
	let result = '';
	const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
	}
	return result;
}

// This function generates a unique ID everytime
export default function generateUniqueId(allIds) {
	let idExists = true;
	let attempts = 0;

	while (idExists && attempts <= 200) {
		attempts += 1;
		const newId = generateRandomString(6);
		idExists = allIds.includes(newId);
		if (!idExists) {
			return newId;
		}
	}

	return null;
}

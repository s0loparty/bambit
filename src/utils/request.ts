export function numbersToQuery(ids: number[]) {
	return ids.map((id) => `albumId=${id}`).join('&');
}

export function objectToQuery(params: Record<string, string | number>): string {
	const result: Record<string, string> = {};

	for (const key in params) {
		result[key] = String(params[key]);
	}
	console.log('result', result);

	return new URLSearchParams(result).toString();
}

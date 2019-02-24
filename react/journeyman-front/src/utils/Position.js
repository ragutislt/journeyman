/**
 * Get a center latitude,longitude from an array of like geopoints
 *
 * @param data data 2 dimensional array of latitudes and longitudes
 * For Example:
 * $data = array
 * (
 *   0 = > {lat: 45.849382, lng: 76.322333},
 *   1 = > {lat: 45.843543, lng: 5.324143},
 *   ...
 * );
 */
export const getCenterFromCoordinates = (data) => {
	if (!(data.length > 0)) {
		return false;
	}

	const num_of_coords = data.length;

	let X = 0.0;
	let Y = 0.0;
	let Z = 0.0;

	for (let i = 0; i < data.length; i++) {
		let lat = data[i].lat * Math.PI / 180;
		let lon = data[i].lng * Math.PI / 180;

		const a = Math.cos(lat) * Math.cos(lon);
		const b = Math.cos(lat) * Math.sin(lon);
		const c = Math.sin(lat);

		X += a;
		Y += b;
		Z += c;
	}

	X /= num_of_coords;
	Y /= num_of_coords;
	Z /= num_of_coords;

	const lon = Math.atan2(Y, X);
	const hyp = Math.sqrt(X * X + Y * Y);
	const lat = Math.atan2(Z, hyp);

	const newX = (lat * 180 / Math.PI);
	const newY = (lon * 180 / Math.PI);

	return {lat: newX, lng: newY};
};
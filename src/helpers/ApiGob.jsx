//Consulta para obtener datos especificos para la tablan

// const formatearFecha = (fecha) => {
// 	const nuevaFecha = new Date(fecha);
// 	const opciones = {
// 		year: 'numeric',
// 		month: '2-digit',
// 		day: '2-digit',
// 	};

// 	return nuevaFecha.toLocaleDateString('en-US', opciones);
// };

// const formatoFecha = (fecha) => {
// 	const date = new Date(parseInt(fecha.substr(8)));

// 	return date;
// };

export const ApiGob = async () => {
	const url = `https://api.datos.gob.mx/v1/condiciones-atmosfericas`;
	const respuesta = await fetch(url);
	const resultado = await respuesta.json();

	const data = resultado.results;

	const nuevoArreglo = data.map((info, index) => ({
		key: index,
		id: info._id,
		cityid: info.cityid,
		name: info.name,
		state: info.state,
		precip: info.probabilityofprecip,
		humidity: info.relativehumidity,
		fecha: info.lastreporttime,
		llueve: info.probabilityofprecip > 60 || info.relativehumidity > 50 ? 'Si' : 'No',
	}));

	// console.log('nuevoarreglo', { nuevoArreglo });

	return nuevoArreglo;
};

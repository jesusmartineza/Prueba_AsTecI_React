//Consulta para obtener todos los datos de un registro por id

export const ApiId = async () => {
	const url = `https://api.datos.gob.mx/v1/condiciones-atmosfericas/`;
	const respuesta = await fetch(url);
	const resultado = await respuesta.json();

	const data = resultado.results;

	// console.log('data id', { data });

	return data;
};

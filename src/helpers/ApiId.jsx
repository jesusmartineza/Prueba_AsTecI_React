//Consulta para obtener todos los datos de un registro por id

// const id = '5952983359954a0adbf7ab09';
const cityid = 'MXAS0002';

export const ApiId = async (cityid) => {
	const url = `https://api.datos.gob.mx/v1/condiciones-atmosfericas/${cityid}`;
	const respuesta = await fetch(url);
	const resultado = await respuesta.json();

	const data = resultado.results;

	// console.log('data id', { data });

	return data;
};

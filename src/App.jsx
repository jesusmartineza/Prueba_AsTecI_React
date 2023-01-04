//Generar la siguiente apliacaión utilizando React, Redux y Sass
//La información sera consumida desde el siguiente acceso https://api.datos.gob.mx/v1/condiciones-atmosfericas
//Generar una consulta y que muestre una tabla de 10 en 10 registros
//Al darle click a un id hacer una consulta por id a la api debe mostrar todos los datos de la consulta como una pantalla de detalle
//Generar el test unitario con Jest

//Datos de la tabla: _id, cityid, name, state, probabilityodprecip, relativehumidity, lastreporttime(formato yyyy/mm/dd), LLUEVE si se cumple probabilityofprecip > 60 || relativehumidity > 50.

import { Table } from 'antd';
import { useEffect, useState } from 'react';
import './App.css';
import { ApiGob } from './helpers/ApiGob';
import { ApiId } from './helpers/ApiId';

function App() {
	const [data, setData] = useState([]);

	const dataApi = async () => {
		const nuevosDatos = await ApiGob();
		setData(nuevosDatos);
	};

	const [dataId, setDataId] = useState([]);

	const dataPorId = async () => {
		const datosCompletos = await ApiId();
		setDataId(datosCompletos);
	};

	useEffect(() => {
		dataApi();
		dataPorId();
	}, []);

	// console.log(dataId);

	const columns = [
		{
			title: 'Id',
			dataIndex: 'id',
			width: 100,
			render: (text) => <a> {text} </a>,
		},
		{
			title: 'Cityid',
			dataIndex: 'cityid',
			width: 100,
		},
		{
			title: 'Name',
			dataIndex: 'name',
			width: 150,
		},
		{
			title: 'State',
			dataIndex: 'state',
			width: 150,
		},
		{
			title: 'Precip',
			dataIndex: 'precip',
			width: 80,
		},
		{
			title: 'Humidityt',
			dataIndex: 'humidity',
			width: 80,
		},
		{
			title: 'Fecha',
			dataIndex: 'fecha',
			width: 150,
		},
		{
			title: 'LLueve',
			dataIndex: 'llueve',
			width: 150,
		},
	];

	return (
		<div className='App'>
			<Table
				columns={columns}
				dataSource={data}
				pagination={{
					pageSize: 10,
				}}
				scroll={{
					y: 550,
				}}
			/>
		</div>
	);
}

export default App;

import DataTable from 'react-data-table-component';

const Table = (props) => {
	const { columns, data } = props;
	const columnsDefs = [
		{
			className: 'text-center',
		},
	];
	return (
		<>
			<DataTable
				columns={columns}
				data={data}
				pagination
				responsive
				columnsDefs={columnsDefs}
			/>
		</>
	);
};

export default Table;

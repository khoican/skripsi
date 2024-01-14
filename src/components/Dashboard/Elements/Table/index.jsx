import DataTable from "react-data-table-component";
import columnsDefs from "./columnsDefs";

const Table = (props) => {
    const { columns, data } = props;
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

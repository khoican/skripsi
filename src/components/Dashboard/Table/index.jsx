const Table = () => {
    return (
        <>
            <table className="table-auto w-full border-separate border-spacing-3">
                <thead className="text-left border-b-2 border-black">
                    <tr>
                        <th>No</th>
                        <th>Invoice</th>
                        <th>Customer Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-[1px] border-gray-400">
                        <td>1</td>
                        <td>#10435634</td>
                        <td>Mario Nitzsche</td>
                        <td>Pending</td>
                        <td>Details</td>
                    </tr>
                    <tr className="border-b-[1px] border-gray-400">
                        <td>2</td>
                        <td>#10435634</td>
                        <td>Mario Nitzsche</td>
                        <td>Pending</td>
                        <td>Details</td>
                    </tr>
                    <tr className="border-b-[1px] border-gray-400">
                        <td>3</td>
                        <td>#10435634</td>
                        <td>Mario Nitzsche</td>
                        <td>Pending</td>
                        <td>Details</td>
                    </tr>
                    <tr className="border-b-[1px] border-gray-400">
                        <td>4</td>
                        <td>#10435634</td>
                        <td>Mario Nitzsche</td>
                        <td>Pending</td>
                        <td>Details</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Table;

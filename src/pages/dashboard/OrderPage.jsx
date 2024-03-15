import Button from "../../components/Dashboard/Elements/Button";
import Header from "../../components/Dashboard/Elements/Header";
import SearchInput from "../../components/Dashboard/Elements/SearchInput";
import { Link } from "react-router-dom";
import Table from "../../components/Dashboard/Elements/Table";

const columns = [
    {
        name: "No",
        selector: (row) => row.no,
        sortable: true,
    },
    {
        name: "ID Invoice",
        selector: (row) => row.idinvoice,
        sortable: true,
    },
    {
        name: "Customer Name",
        selector: (row) => row.custname,
        sortable: true,
    },
    {
        name: "Status",
        selector: (row) => row.status,
        sortable: true,
    },
    {
        name: "Actions",
        cell: () => (
            <>
                <Link to={"/Dashboard/Order/OrderDetails"}>
                    <Button>Details</Button>
                </Link>
            </>
        ),
    },
];

const data = [
    {
        id: 1,
        no: 1,
        idinvoice: "#10435634",
        custname: "John Doe",
        status: "Pending",
    },
    {
        id: 2,
        no: 2,
        idinvoice: "#10435634",
        custname: "Jane Doe",
        status: "Paid",
    },
    {
        id: 3,
        no: 3,
        idinvoice: "#10435634",
        custname: "John Well",
        status: "Pending",
    },
    {
        id: 4,
        no: 4,
        idinvoice: "#10435634",
        custname: "Jane Qwell",
        status: "Paid",
    },
];

function DashboardOrder() {
    return (
        <>
            <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
                <Header title="User" linkPage="User" />
                <div className="flex justify-between mt-5 px-7">
                    <div className="my-auto w-2/4">
                        <SearchInput name="order" placeholder="Order" />
                    </div>
                </div>
                <div className="my-10 px-7">
                    <div className="mt-2 w-full bg-white shadow-lg px-2">
                        <Table data={data} columns={columns} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardOrder;

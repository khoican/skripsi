import DataTable from "react-data-table-component";
import Button from "../Button";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const SubCategoryComponent = ({ subCategories }) => {
    return (
        <DataTable
            title="Sub Categories"
            columns={[
                {
                    name: "Name",
                    selector: (row) => row.name,
                    sortable: true,
                },
                {
                    name: "Actions",
                    cell: (row) => (
                        <>
                            <Button
                                onClick={() => handleEditSubCategory(row.id)}>
                                <PencilIcon className="w-8 pr-2" />
                            </Button>
                            <Button
                                onClick={() => handleDeleteSubCategory(row.id)}>
                                <TrashIcon className="w-8 pl-2" />
                            </Button>
                        </>
                    ),
                },
            ]}
            data={subCategories}
            pagination
            responsive
        />
    );
};

export default SubCategoryComponent;

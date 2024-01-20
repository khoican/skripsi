import Button from "../Elements/Button";
import Modal from "../Elements/Modal";

function ModalUser() {
    return (
        <>
            <Modal id="delete">
                <div className="modal-box py-3 px-9">
                    <h3 className="font-bold text-lg">Alert!</h3>
                    <p className="py-4 flex">
                        Are you sure you want to delete
                        <p className="px-1 font-bold">"this user"</p>?
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            {/* <button className="btn">Close</button> */}
                            <div className="flex mt-2 justify-end">
                                <Button
                                    type="submit"
                                    variants="btn mr-2 px-4 py-2 border border-light-red rounded-lg">
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variants="btn px-4 py-2 bg-light-red rounded-lg text-white">
                                    Delete
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ModalUser;

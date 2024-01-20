import Button from "../Elements/Button";
import Modal from "../Elements/Modal";

function ModalRole(props) {
    const { children, title, btn, id, variants } = props;
    return (
        <>
            <Modal id={id} variants="border-slate-300 w-[600px]">
                <div className="modal-box py-3 px-9">
                    <h3 className="font-bold text-lg pt-3 pb-6">{title}</h3>
                    {children}
                    <div className="modal-action py-4">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            {/* <button className="btn">Close</button> */}
                            <div className="flex mt-2 justify-end">
                                <Button
                                    type="submit"
                                    variants="btn mr-2 px-4 py-2 border border-light-red rounded-lg text-light-red">
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variants={`btn px-4 py-2 ${variants} rounded-lg text-white`}>
                                    {btn}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ModalRole;

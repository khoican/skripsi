import Button from "../Elements/Button";
import Modal from "../Elements/Modal";

const ModalCategory = (props) => {
    const { children, title, btn, id, variants } = props;
    return (
        <Modal id={id} variants="border-none z-10 w-[600px] m-auto">
            <div className="bg-white modal-box py-3 px-9">
                <h3 className="text-black font-bold text-lg pt-3 pb-6">
                    {title}
                </h3>
                {children}
                <div className="modal-action py-4">
                    <form method="dialog">
                        <div className="flex mt-2 justify-end"></div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default ModalCategory;

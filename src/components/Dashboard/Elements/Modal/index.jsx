const Modal = (props) => {
    const { children, id, variants } = props;
    return (
        <>
            <dialog
                id={id}
                className={`modal modal-bottom sm:modal-middle rounded-lg border ${variants}`}>
                {children}
            </dialog>
        </>
    );
};

export default Modal;

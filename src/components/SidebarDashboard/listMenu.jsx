
const listMenu = (props) => {
    const { menu, icon, variants } = props;
    return (
        <a
            href="#"
            aria-label="dashboard"
            className={variants}>
            {icon}
            <span className="-mr-1 font-medium">{menu}</span>
        </a>
    );
};

export default listMenu;

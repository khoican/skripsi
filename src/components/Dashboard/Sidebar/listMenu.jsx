import { Link } from "react-router-dom";

const listMenu = (props) => {
    const { menu, icon, variants } = props;
    return (
        <Link
            href="#"
            aria-label="dashboard"
            className={variants}>
            {icon}
            <span className="-mr-1 font-medium">{menu}</span>
        </Link>
    );
};

export default listMenu;

import { Fragment } from "react"

const FooterComponent = (props) => {
    const { title, children, style } = props

    return (
        <Fragment>
            <div className={style}>
                <h1 className="font-montserrat text-2xl font-bold">{title}</h1> 
                {children}
            </div>
        </Fragment>
    )
}

const Menu = (props) => {
    const { children, style } = props

    return (
        <div className={style}>
            {children}
        </div>
    )
}

const SubTitle = (props) => {
    const { subTitle } = props

    return (
        <h3 className="font-montserrat text-md font-semibold">{subTitle}</h3>
    )
}

FooterComponent.SubTitle = SubTitle
FooterComponent.Menu = Menu

export default FooterComponent
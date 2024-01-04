import { Fragment } from "react"

const Label = ( props ) => {
    const { title, style, children } = props

    return (
        <Fragment>
            <h1 className={`font-semibold text-sm mb-1 ${style}`}>{title}</h1>
            {children}
        </Fragment>
    )
}

const Note = (props) => {
    const {note} = props

    return (
        <Fragment>
            <p className="font-light text-xs mt-1"> 
                <span className="text-red font-bold">*</span>
                {' '}
                {note}
            </p>
        </Fragment>
    )
}

Label.Note = Note

export default Label
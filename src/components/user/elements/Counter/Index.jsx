import { Fragment, useState } from "react"
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid"

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const dectrement = () => {
        setCount(count <= 0 ? 0 : count -1)
    }

    return (
        <Fragment>
            <div className="flex">
                <BtnCounter func={dectrement}>
                    <MinusIcon className="w-5 h-5" />
                </BtnCounter>
                <input type="text" value={count} className="text-center w-40 border-y border-y-black bg-white font-semibold" disabled />
                <BtnCounter func={increment}>
                    <PlusIcon className="w-5 h-5" />
                </BtnCounter>
            </div>
        </Fragment>
    )
}

const BtnCounter = ( props ) => {
    const { func, children } = props

    return (
        <button onClick={func} className="border border-black px-2 py-2 active:bg-slate-100" >
            { children }
        </button>
    )
}

export default Counter
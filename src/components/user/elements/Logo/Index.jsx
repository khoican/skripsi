import { Fragment } from "react"

const Logo = () => {
    return (
        <Fragment>
            <div className="flex items-center gap-8">
                <div className="w-20 h-20 bg-slate-300"></div>
                <div className="font-montserrat">
                    <h1 className="text-2xl font-bold">AS-SAKINAH MART</h1>
                    <p className="text-xs font-bold tracking-widest">KOPWAN &#39;AISYIYAH JEMBER</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Logo
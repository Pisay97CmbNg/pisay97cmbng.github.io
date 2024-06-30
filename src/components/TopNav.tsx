import * as React from "react"
import { PageProps } from "gatsby"

const TopNav = (props : any) => {
    const { selected } = props

    const items = [
        { id : "home", label : "Home", link : "/" },
        { id : "history", label : "History", link : "/history" },
        { id : "awards", label : "The Awards", link : "/awards" }
    ]

    return (
        <>
        <img className="site-logo" alt="CNG NG Logo" width="300" src="/images/cmb-ng.png" />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {
                    items.map(item => (
                        <li className="nav-item">
                        {
                            (item.id == selected ? 
                                (<a className="nav-link active" aria-current="page" href={item.link}>{item.label}</a>) :
                                (<a className="nav-link" href={item.link}>{item.label}</a>)
                            )
                        }
                        </li>     
                    ))
                }
            </ul>
            </div>
        </div>
        </nav>
        </>
    )   
}

export default TopNav

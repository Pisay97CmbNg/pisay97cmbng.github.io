import { Link } from "gatsby"
import * as React from "react"

const TopNav = (props : any) => {
    const { path } = props

    const items = [
        { id : "home", label : "Home", link : "/" },
        { id : "history", label : "History", link : "/history" },
        { id : "awards", label : "The Awards", link : "/awards" },
        { id : "awards", label : "Awardees", link : "/awardees" }
    ]

    return (
        <div className="topnav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img className="site-logo" alt="CNG NG Logo" width="300" src="/images/cmb-ng.png" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        items.map(item => {

                            return (
                                <li key={item.id} className="nav-item">
                                {
                                    (item.link == path.replace(/\/+$/, "") ? 
                                        (<Link className="nav-link active" aria-current="page" to={item.link}>{item.label}</Link>) :
                                        (<Link className="nav-link" to={item.link}>{item.label}</Link>)
                                    )
                                }
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )   
}

export default TopNav

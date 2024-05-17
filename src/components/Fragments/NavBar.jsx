import { Link } from "react-router-dom"
import OvalButton from "../Elements/Button/OvalButton"
import NavLink from "../Elements/Link/NavLink"
import Logo from "../Elements/Logo/Logo"
import { Button } from "@material-tailwind/react"
import Modal from "./Modal/Modal"
import { useState } from "react"
import LoginForm from "./Form/LoginForm"


function NavBar() {
    return (
        <>
            <nav className="container py-6 flex items-center justify-between">
                <Logo home={"/"} />
                <NavLink menu="/menus" events="/events" about="/about" contacts="/contact" />
                <div className="flex gap-12 items-center">
                    <Link to={"/carts"}><i className="fa-solid fa-shopping-cart fa-xl" ></i></Link>
                    <Link to={"/login"}><Button variant="outlined" color="deep-orange" onClick={() => setShowModal(true)}>Sign in</Button></Link>

                </div>
            </nav>
        </>
    )
}

export default NavBar
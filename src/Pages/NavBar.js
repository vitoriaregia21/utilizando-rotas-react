import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="cornavbar">
        <ul className="UlLista">
            <li className="LiLista">
                <Link className="RemoverSub" to="/">Home</Link>
            </li >
            <li className="LiLista">
                <Link className="RemoverSub" to="/turismo">Turismo</Link>
            </li>
            <li className="LiLista">
                <Link className="RemoverSub" to="/historico">Histórico</Link>
            </li >
            <li className="LiLista">
                <Link className="RemoverSub" to="/trabalhe">Ajuda</Link>
            </li>
        </ul>
        </div>
        )
} export default NavBar
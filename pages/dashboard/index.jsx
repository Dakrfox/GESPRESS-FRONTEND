import React from 'react';

export default function Navbar() {
    return (


        <div className="bg-blue-300 h-screen flex items-center justify-center bg-fixed">

            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Proyecto</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Logo</a></li>
                        <li>
                            <details>
                                <summary>
                                    Opciones
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    <li><a>presupuestos 4</a></li>
                                    <li><a>gastos 2/3</a></li>
                                    <li><a>ingresos 2/3</a></li>
                                    <li><a>ajustes 5</a></li>
                                    <li><a>overview 1</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    );

}
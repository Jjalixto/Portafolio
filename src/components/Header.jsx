
export const Header = () => {

    return(
        <>
        <section>
            <div className="container flex justify-between items-center py-4 m-6">
                <div className="flex items-center">
                    <a className="text-black dark:text-white">Joel</a>
                    <nav className="ml-6 hidden md:block">
                        <ul className="flex space-x-4 items-center">
                            <li>Inicio</li>
                            <li>Sobre Mi</li>
                            <li>Mis Habilidades</li>
                            <li>Mis Proyectos</li>
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-end">
                    <img src="../assets/noche.png"/>
                    <button>Contacto</button>
                </div>
            </div>
        </section>
        </>
    )
}
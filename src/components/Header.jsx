
export const Header = () => {

    return(
        <>
        <section className="bg-white dark:bg-black">
            <div className="container flex justify-between items-center py-4 mx-8 bg-white dark:bg-black">
                <div className="flex items-center">
                    <a className="font-serif text-black font-bold text-xl ml-8 space-x-4  dark:text-white">Joel</a>
                    <nav className="ml-6 hidden md:block">
                        <ul className="font-outfit flex space-x-4 items-center text-black dark:text-white">
                            <li>Inicio</li>
                            <li>Sobre Mi</li>
                            <li>Mis Habilidades</li>
                            <li>Mis Proyectos</li>
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-end">
                    <img src="luz.png" alt="luna" width="35px" height="5px" className="mx-4" />
                    <button className="text-white cursor-pointer p-2 bg-orange-400 rounded-lg px-4 mx-4 dark:text-white">Contacto</button>
                </div>
            </div>
        </section>
        </>
    )
}
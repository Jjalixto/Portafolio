import { useEffect, useState } from "react";

export const Header = () => {
    const [theme, setTheme] = useState("ligth");

    useEffect(() => {
        if(theme === "dark"){
            document.querySelector('html').classList.add('dark')
        }else{
            document.querySelector('html').classList.remove('dark')
        }
    },[theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "ligth" ? "dark" : "ligth")
    }
    return(
        <>
        <section className="bg-white dark:bg-black">
            <div className="container flex justify-between items-center py-4 mx-8 bg-white dark:bg-black">
                <div className="flex items-center">
                    <a href="/joel" className="hover:text-neutral-500 cursor-pointer font-outfit text-black font-bold text-xl ml-8 space-x-4 dark:text-white">Joel</a>
                    <nav className="ml-6 hidden md:block">
                        <ul className="font-outfit flex space-x-4 items-center text-black dark:text-white">
                            <li className="hover:text-neutral-500 cursor-pointer">Inicio</li>
                            <li className="hover:text-neutral-500 cursor-pointer">Sobre Mi</li>
                            <li className="hover:text-neutral-500 cursor-pointer">Mis Habilidades</li>
                            <li className="hover:text-neutral-500 cursor-pointer">Mis Proyectos</li>
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-end">
                    <button onClick={handleChangeTheme} >
                    <img src="luz.png" alt="luna" width="35px" height="5px" className="mx-4" /></button>
                    <button className="text-white cursor-pointer p-2 bg-orange-600 rounded-lg px-4 mx-4 hover:bg-orange-400 dark:text-white">Contacto</button>
                </div>
            </div>
        </section>
        </>
    )
}
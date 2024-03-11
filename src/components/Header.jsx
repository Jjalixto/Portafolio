import { useEffect, useState } from "react";

export const Header = () => {

    const images = {
        dark:'../../public/luz.png',
        ligth:'../../public/negro.png',    
    }

    const themeImages = {
        ligth:'../../public/dia.jpg',
        dark:'../../public/noche.jpg',
    }

    const [theme, setTheme] = useState("ligth");

    useEffect(() => {

        document.querySelector("html").classList.toggle("dark", theme === "dark");

        const imageElement = document.querySelector('.modo');

        imageElement && (imageElement.src = images[theme]);

        const modeImage  = document.querySelector('.modelo');

        modeImage && (modeImage.src = themeImages[theme]);

    },[theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "ligth" ? "dark" : "ligth")
    }

    return(
        <>
            <section className="bg-white fixed z-50 w-full dark:bg-slate-800 border-gray-300 border-b-2 dark:border-gray-700">
                <div className="container mx-auto flex justify-between items-center py-4 px-6 bg-white dark:bg-slate-800">
                    <div className="flex items-center">
                        <a href="/" className="hover:text-neutral-500 cursor-pointer font-outfit text-black font-bold text-xl ml-8 space-x-4 dark:text-white">JOEL</a>
                        <nav className="ml-6 hidden md:block">
                            <ul className="font-outfit flex space-x-4 items-center text-black dark:text-white">
                                <li className="hover:text-black cursor-pointer text-gray-600 dark:text-white dark:hover:text-gray-500">Inicio</li>
                                <li className="hover:text-black cursor-pointer text-gray-600 dark:text-white dark:hover:text-gray-500">Sobre Mi</li>
                                <li className="hover:text-black cursor-pointer text-gray-600 dark:text-white dark:hover:text-gray-500">Mis Habilidades</li>
                                <li className="hover:text-black cursor-pointer text-gray-600 dark:text-white dark:hover:text-gray-500">Mis Proyectos</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center">
                        <div onClick={handleChangeTheme} className="cursor-pointer rounded-full border border-amber-500/5 bg-amber-500/5 p-1 text-amber-500 transition-colors hover:border-amber-500/10 hover:bg-amber-500/10 hover:!opacity-100 group-hover:opacity-70">
                        <img src="{images[theme]}" width="35px" height="5px" className="mx-4 modo" />
                        </div>
                    
                        <button className="ml-4 md:ml-6 dark:bg-sky-500 bg-amber-500 transition-colors shadow-md dark:shadow-sky-500/10 shadow-amber-500/10 dark:hover:bg-sky-400 hover:bg-amber-400 text-white font-medium tracking-wide py-2 px-4 rounded-lg">Contacto</button>
                    </div>
                </div>
                
                <div className="hidden md:hidden bg-white dark:bg-slate-800">
                    <ul className="mt-4 border-t-2 border-slate-700">
                        <li className="block py-2 px-4 cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out">Inicio</li>
                        <li className="block py-2 px-4 cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out">Sobre mi</li>
                        <li className="block py-2 px-4 cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out">Mis Habilidades</li>
                        <li className="block py-2 px-4 cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 font-medium tracking-wide transition duration-300 ease-in-out">Mis Proyectos</li>
                    </ul>
                </div>
            </section>
        </>
    )
}
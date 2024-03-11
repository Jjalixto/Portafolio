
export const Footer = () => {

    return (
        <>
            <div className="flex justify-between py-1 px-14  text-black dark:bg-gray-800 dark:text-white">
                <div className="flex items-center">
                    <p>© 2023 <span className="font-bold">Joel Jalixto</span>. Todos los derechos reservados.</p>
                </div>
                <div className="flex items-center gap-3">
                    <a className="rounded-full bg-amber-300 transition-all hover:text-lg hover:bg-amber-100 dark:bg-sky-500 dark:hover:bg-sky-400 z-50 cursor-pointer">
                        <img src="../../public/linkedin-claro.png" width="35px" height="35px"/>
                    </a>
                    <a className="rounded-full bg-amber-300 transition-all hover:text-lg hover:bg-amber-100 dark:bg-sky-500 dark:hover:bg-sky-400 z-50 cursor-pointer">
                        <img src="../../public/github.png" width="35px" height="35px" />
                    </a>
                    <a className="rounded-full bg-amber-300 transition-all hover:text-lg hover:bg-amber-100 dark:bg-sky-500 dark:hover:bg-sky-400 z-50 cursor-pointer">
                        <img src="../../public/wst-claro.png" width="35px" height="35px" />
                    </a>
                </div>
            </div>
        </>
    )
}
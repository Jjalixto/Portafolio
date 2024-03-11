import { NavLink } from "react-router-dom"

export const Body = () => {
    
    return (
        <>
            <div>
                <div className="bg-slate-800 dark:text-white relative">
                   <header className="bg-no-repeat bg-cover bg-center bg-[url('../../public/noche.jpg')] dark:bg-[url('../../public/dia.jpg')]">
                   {/* <img className="modelo" src="{themeImages[theme]}" /> */}
                        <div className="h-screen flex flex-col text-center justify-center">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold my-8">
                                JOEL JALIXTO
                            </h1>
                            <h2 className="text-2xl font-semibold">
                                FULL STACK DEVELOPER
                            </h2>
                        </div> 
                   </header>
                </div>
            </div>
        </>
    )
}
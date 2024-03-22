import { Navigate, Route, Routes } from "react-router-dom"
import App from "./App"
import { Perfil } from "./components/Perfil"
export const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<App /> } />
                <Route path="/perfil" element={ <Perfil /> } />
                <Route path="/" element={<Navigate to={"/"} />} />
            </Routes>
        </>
    )
}
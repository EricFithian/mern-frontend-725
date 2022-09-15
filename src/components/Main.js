import { Routes, Route, Outlet } from "react-router-dom"
import People from "../pages/People"
import Show from "../pages/Show"

export default function Main() {
    return (
        <>
            <Outlet />
            <Routes >
                <Route path='/whatever' element={<People />} />
                <Route path='/people/:id' element={<Show />} />
            </Routes>
        </>
    )
}
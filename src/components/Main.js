import { Routes, Route, Outlet } from "react-router-dom"
import People from "../pages/People"
import Show from "../pages/Show"
import Breweries from "../pages/Breweries"

export default function Main() {
    return (
        <>
            <Outlet />
            <Routes >
                <Route path='/whatever' element={<People />} />
                <Route path='/people/:id' element={<Show />} />
                <Route path='/breweries' element={<Breweries />} />
            </Routes>
        </>
    )
}
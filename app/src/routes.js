import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playstation from "./pages/Playstation";
import Nintendo from "./pages/Nintendo";
import Xbox from "./pages/Xbox";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }></Route>
                <Route path="/playstation" element={ <Playstation/> }></Route>
                <Route path="/nintendo" element={ <Nintendo/> }></Route>
                <Route path="/Xbox" element={ <Xbox/> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

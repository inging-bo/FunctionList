import {Route, Routes} from "react-router-dom";
import Msw from "../view/Msw"
import Index from "../view/Index"
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/Msw" element={<Msw />}/>
        </Routes>
    )
}

export default Router;
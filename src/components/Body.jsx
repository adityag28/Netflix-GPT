import Login from './Login'
import Browse from './Browse'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



const Body = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/browse' element={<Browse />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Body


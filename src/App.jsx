
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import MainPage from "./pages/MainPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";

function App() {

    return (

        <Router>

            <div className='p-5 md:p-5 lg:p-10 xl:px-15 md:pt-0 lg:pt-3 xl:px-15 pt-0'>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/movie/:id" element={<DetailPage/>}/>
                </Routes>
            </div>
        </Router>


    )
}

export default App

import Hero from "../components/Hero.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getPopuler} from "../redux/actions/movieActions.js";

const MainPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopuler())
    }, []);

    return (
        <div>
           <Hero/>
        </div>
    )
}
export default MainPage
import Hero from "../components/Hero.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPopuler} from "../redux/actions/movieActions.js";
import {getGenres} from "../redux/actions/genreActions.js";

const MainPage = () => {

    const dispatch = useDispatch();

   const {isLoading, error, genres} = useSelector((store) => store.genres);

    useEffect(() => {
        dispatch(getGenres())
        dispatch(getPopuler())
    }, []);

    return (
        <div>
           <Hero/>

            {

            }

        </div>
    )
}
export default MainPage
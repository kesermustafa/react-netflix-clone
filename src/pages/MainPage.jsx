import Hero from "../components/Hero.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPopuler} from "../redux/actions/movieActions.js";
import {getGenres} from "../redux/actions/genreActions.js";
import {Loader} from "../components/Loader.jsx";
import MovieList from "../components/MovieList.jsx";

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
                // eslint-disable-next-line react/jsx-no-undef
                isLoading ? (<Loader/>) : error ? <Error/> : (
                    // eslint-disable-next-line react/jsx-key
                    genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
                )
            }

        </div>
    )
}
export default MainPage
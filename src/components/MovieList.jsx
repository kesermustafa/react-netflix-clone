


// eslint-disable-next-line react/prop-types
import {useEffect, useState} from "react";
import api from "../utils/api.js";
import {getPopuler} from "../redux/actions/movieActions.js";

const MovieList = ({genre}) => {

    const [movie, setMovie] = useState([]);


    useEffect(() => {

        const params={
            // eslint-disable-next-line react/prop-types
            with_genres : genre.id,
        }
        api.get('/discover/movie', {params})
            .then((res) => setMovie(res.data.results))
            .catch((err) => console.error(err));
    }, []);

    console.log(movie)

    return (
        <div>
            Movie List
        </div>
    )
}

export default MovieList;
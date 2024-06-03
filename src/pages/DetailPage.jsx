import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../utils/api.js";
import {Loader} from "../components/Loader.jsx";
import {baseImgUrl} from "../constants/index.js";
import {DetailDisplay} from "../components/DetailDisplay.jsx";
import millify from "millify";

const DetailPage = () => {

    const {id} = useParams();

    const [movie, setMovie ] = useState(null)

    useEffect( () => {
        api.get(`movie/${id}`).then((res) => setMovie(res.data)
        ).catch(err => console.error(err));
    },[])


    return (
        <div>
            {!movie ? (
                <Loader />
            ) : (
                <div>
                    <div className="relative mt-5 h-[35vh] rounded-md overflow-hidden shadow-lg">
                        <img
                            src={baseImgUrl + movie.backdrop_path}
                            className="w-full h-full object-cover rounded-md"
                            alt=""
                        />
                        <div className="absolute bg-black inset-0 bg-opacity-50 grid place-items-center">
                            <h2 className="text-4xl font-semibold ">{movie.title}</h2>
                        </div>
                    </div>

                    {/*orta alan*/}

                    <div className='my-10 grid grid-cols-1 md:grid-cols-2 '>

                        <div className=''>
                            <DetailDisplay title={"Kategoriler"} data={movie?.genres} />
                            <DetailDisplay title={"Konusulan Diller"} data={movie?.spoken_languages} />
                            <DetailDisplay title={"Yapim Sirketleri"} data={movie?.production_companies} />
                            <DetailDisplay title={"Yapimci Ulkeler"} data={movie?.production_countries} />

                        </div>

                        <div className= 'flex flex-col gap-2 '>
                            <p className='text-xl mb-4 text-gray-300'>
                                {movie.overview}
                            </p>
                            <p className='flex gap-3'>
                                <span>Butce :</span>
                                <span className='text-blue-500 font-semibold'>${millify(movie.budget)}</span>

                            </p>
                            <p>
                                <span className='me-3'>Hasilat :</span>
                                <span className='text-blue-500 font-semibold'>${millify(movie.revenue)}</span>

                            </p>
                        </div>

                    </div>

                </div>
            )}
        </div>
    );

}
export default DetailPage
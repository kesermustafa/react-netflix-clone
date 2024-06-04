import {baseImgUrl} from "../constants/index.js";


export const ActorCard = ({actor}) => {

    console.log(actor)


    return (
        <div className="max-w-[150px] line-clamp-2 overflow-hidden">

            <img
                className='h-[175px] max-w-[125px] rounded'
                src={actor.profile_path == null ?  "/public/noimage2.png" : (baseImgUrl + actor?.profile_path)}
                alt=""
            />

            <h2 className=' line-clamp-1 max-w-[120px] text-ellipsis'>{actor.original_name}</h2>
            <h2>{actor.character}</h2>
        </div>
    )
}
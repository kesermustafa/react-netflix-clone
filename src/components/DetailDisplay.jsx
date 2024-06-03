import {baseImgUrl} from "../constants/index.js";

export const DetailDisplay = ({title, data}) => {

    console.log(title)
    console.log(data)
    return (
        <div className="mb-6">

            <h2 className='text-2xl mt-3 font-semibold'>{title}</h2>
            <div className='flex gap-5 mt-3 mb-4'>
                {
                    // eslint-disable-next-line react/prop-types
                    data?.map((item) =>
                    item.logo_path ? (
                        <div key={item.id} className='bg-white flex items-center justify-center py-1 px-2 rounded'>
                            <img
                                className='w-[100px] object-contain h-[40px] '
                                src={
                                baseImgUrl + item.logo_path
                            } alt=""/>
                        </div>

                        ) :
                        (
                            <span
                                className='border border-red-200 py-1 px-3 rounded hover:bg-zinc-600 transition duration-500 '
                                key={item.id}>{item.name}</span>
                        ))
                }
            </div>

        </div>
    )
}
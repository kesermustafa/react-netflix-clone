import axios from 'axios';

export default axios.create ({

    detailUrl: 'https://api.themoviedb.org/3/movie',
    params: {language: 'tr-TR'},
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    }
});

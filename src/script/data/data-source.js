class DataSource {
    static searchFilm(keyword) {
        return fetch(`http://www.omdbapi.com/?apikey=4aa9d564&s=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.Search) {
                return Promise.resolve(responseJson.Search);
            } else {
                return Promise.reject(`Judul Film "${keyword}" Tidak Ditemukan`);
            }
        })
    }
} 

export default DataSource;
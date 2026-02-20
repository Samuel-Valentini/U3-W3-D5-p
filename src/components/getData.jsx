const getData = (query, func, dispatch) => {
    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`;
    fetch(url + query)
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(
                    `error in the first .then (GET): ${res.status} - ${res.statusText}`,
                );
            }
        })
        .then((res) => {
            dispatch(func(res));
            // console.log(res);
        })
        .catch((e) => {
            console.log(
                `Error communicating with the server, please try again. Error: ${e}`,
            );
        });
};

export default getData;

// connection with rapid api 
export const ExcercisesOptions = {
	method: 'GET',
	// url: 'https://exercisedb.p.rapidapi.com/status',
	headers: {
	  'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
	  'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST
	}
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json();
	console.log("API Key:", process.env.REACT_APP_RAPID_API_KEY);
	
    return data;
}

fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": 'eb642bde3bmsh87249ecf71c9674p1fb746jsn8da6e59c41ac'
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    
    })
.catch(err => {
	console.log(err);
});

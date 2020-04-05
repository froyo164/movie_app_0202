import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

// component: ex) <App />
// mounting: component를 DOM 에 추가 하는 것

class App extends React.Component {
  // state는 class component 가 가짐
  state = {
    // state는 object 이고 component의 data를 넣을 공간이 있고 이 data 는 변함
    isLoading: true,
  };
  // 미래에 쓰고자 하는 state를 추가로 선언하는건 (setState) 필수가 아님(no error)

  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); //getMovies 라는 함수를 따로 만듬
    // console.log(movies); //console 창에 object 가 나옴
    /*
    {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
    data:
    status: "ok"
    status_message: "Query was successful"
    data:
    movie_count: 16044
    limit: 20
    page_number: 1
    movies: Array(20)
    0: {id: 16438, url: "https://yts.mx/movie/the-twilight-samurai-2002", imdb_code: "tt0351817", title: "The Twilight Samurai", title_english: "The Twilight Samurai", …}
    1: {id: 16436, url: "https://yts.mx/movie/2047-virtual-revolution-2016", imdb_code: "tt4054004", title: "2047: Virtual Revolution", title_english: "2047: Virtual Revolution", …}
    2: {id: 16435, url: "https://yts.mx/movie/april-fools-day-1986", imdb_code: "tt0090655", title: "April Fool's Day", title_english: "April Fool's Day", …}
    3: {id: 16434, url: "https://yts.mx/movie/the-grace-of-jake-2015", imdb_code: "tt3091258", title: "The Grace of Jake", title_english: "The Grace of Jake", …}
    4: {id: 16433, url: "https://yts.mx/movie/james-vs-his-future-self-2019", imdb_code: "tt6739796", title: "James vs. His Future Self", title_english: "James vs. His Future Self", …}
    5: {id: 16432, url: "https://yts.mx/movie/territorial-behavior-2015", imdb_code: "tt2916772", title: "Territorial Behavior", title_english: "Territorial Behavior", …}
    6: {id: 16430, url: "https://yts.mx/movie/lil-quinquin-2014", imdb_code: "tt3053694", title: "Li'l Quinquin", title_english: "Li'l Quinquin", …}
    7: {id: 16429, url: "https://yts.mx/movie/will-it-snow-for-christmas-1996", imdb_code: "tt0118201", title: "Will It Snow for Christmas?", title_english: "Will It Snow for Christmas?", …}
    8: {id: 16427, url: "https://yts.mx/movie/sweet-home-carolina-2017", imdb_code: "tt5319656", title: "Sweet Home Carolina", title_english: "Sweet Home Carolina", …}
    9: {id: 16425, url: "https://yts.mx/movie/lazy-susan-2020", imdb_code: "tt8633560", title: "Lazy Susan", title_english: "Lazy Susan", …}
    10: {id: 16424, url: "https://yts.mx/movie/never-rarely-sometimes-always-2020", imdb_code: "tt7772582", title: "Never Rarely Sometimes Always", title_english: "Never Rarely Sometimes Always", …}
    11: {id: 16421, url: "https://yts.mx/movie/the-duchess-and-the-dirtwater-fox-1976", imdb_code: "tt0074441", title: "The Duchess and the Dirtwater Fox", title_english: "The Duchess and the Dirtwater Fox", …}
    12: {id: 16420, url: "https://yts.mx/movie/gone-fishin-1997", imdb_code: "tt0119214", title: "Gone Fishin'", title_english: "Gone Fishin'", …}
    13: {id: 16417, url: "https://yts.mx/movie/mongol-the-rise-of-genghis-khan-2007", imdb_code: "tt0416044", title: "Mongol: The Rise of Genghis Khan", title_english: "Mongol: The Rise of Genghis Khan", …}
    14: {id: 16416, url: "https://yts.mx/movie/battle-for-incheon-operation-chromite-2016", imdb_code: "tt4939066", title: "Battle for Incheon: Operation Chromite", title_english: "Battle for Incheon: Operation Chromite", …}
    15: {id: 16414, url: "https://yts.mx/movie/a-genius-two-partners-and-a-dupe-1975", imdb_code: "tt0073036", title: "A Genius, Two Partners and a Dupe", title_english: "A Genius, Two Partners and a Dupe", …}
    16: {id: 16412, url: "https://yts.mx/movie/mythica-a-quest-for-heroes-2014", imdb_code: "tt3405714", title: "Mythica: A Quest for Heroes", title_english: "Mythica: A Quest for Heroes", …}
    17: {id: 16411, url: "https://yts.mx/movie/back-to-zero-2018", imdb_code: "tt6071704", title: "Back to Zero", title_english: "Back to Zero", …}
    18: {id: 16410, url: "https://yts.mx/movie/pierrepoint-the-last-hangman-2005", imdb_code: "tt0462477", title: "Pierrepoint: The Last Hangman", title_english: "Pierrepoint: The Last Hangman", …}
    19: {id: 16409, url: "https://yts.mx/movie/where-birds-dont-fly-2017", imdb_code: "tt3612246", title: "Where Birds Don't Fly", title_english: "Where Birds Don't Fly", …}
    length: 20
    __proto__: Array(0)
    __proto__: Object
    @meta: {server_time: 1585968837, server_timezone: "CET", api_version: 2, execution_time: "0.01 ms"}
    __proto__: Object
    status: 200
    statusText: ""
    headers: {cache-control: "max-age=604800", content-type: "application/json; charset=utf-8", expires: "Sat, 11 Apr 2020 02:53:17 GMT", pragma: "no-cache"}
    config: {url: "https://yts-proxy.now.sh/list_movies.json", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
    request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
    __proto__: Object
    */
    // console.log(movies.data.data.movies)

    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); // ?sort_by_rating
    // 위 주소로 받은 데이터 중에 data.data.movie 에 있는 데이터 만 가져옴
    console.log(movies); // movies 는 array
    /*
    (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    array 안에 object 가 있음
    */
    this.setState({ movies, isLoading: false }); // movies: movies 와 같음, 앞에 movies 는 state에 있고 뒤에 movies는 axios 에서 옴
  };
  componentDidMount() {
    // fetch() 대신에 axios ,npm install axios
    // const movie = axios.get("https://yts-proxy.now.sh/list_movies.json"); // axios 가 request 함
    // axios 로 부터온 data를 변수에 저장해야 state 에 사용할 수 있음
    // axios 는 시간이 걸리기 떄문에 componentDidMount 함수가 끝날 때 까지 약간의 시간이 걸릴 수 있다고 알려줘야 됨
    // async await
    this.getMovies();
  }
  // render를 하면 호출되는 life cycle method, component가 mount 되자 마자, 호출
  // 이론적으로 우리가 할 일은 componentDinMount에서 data를 fetch 하는 것
  // 그리고 API 로 부터 data 가 fetching 이 완료 되면,
  // 그러면 "we are ready" 대신에 movie를 render하고 map을 만들고 movie를 render하는 것

  render() {
    const { isLoading, movies } = this.state; // this.state.isLoading 을 하지 않아도 됨
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((
              //movies: {id: 16438, url: "https://yts.mx/movie/the-twilight-samurai-2002", imdb_code: "tt0351817", title: "The Twilight Samurai", title_english: "The Twilight Samurai", …}
              movie //map 은 각각 item(element) 별로 function을 호출함, 여기서는 Movie function
            ) => (
              <Movie // Movie.js 에서 정의 함
                key={movie.id} // Warning: Each child in a list should have a unique "key" prop 때문에 key prop 추가
                id={movie.id} // 각 엘리먼트가 obect 이기 때문에 movie.id 가 가능
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                //key, id, year, title, summary, poster 들은 prop 임
                /*
                function Movie({ id, year, title, summary, poster }) {
                  return <h4>{title}</h4>;
                } 
                여기서 id, year, title, summary, poster 와 동일
                */
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  } // alaways return from some from map
}
export default App;

import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
//movies component 는 state를 필요로 하지 않음, class component 가 될 필요는 없음

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      {/*alt 와 title 은 마우스를 이미지위에 올렷을때 movie 의 제목을 보여줌*/}
      <div className="movie__data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genres">
              {genre}
            </li>
          ))}
        </ul>
        {/* Warning: Each child in a list should have a unique "key" prop. 
        map 에 있는 각각 item은 key가 필요함, map function은 또 다른 argument를 줌,
        하나는 현재 item이거 다른 하나는 item number임
        */}
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
// father component로 부터 전달받은 props 가 우리가 예상한 props 인지를 점검 해야 됨 (버그를 잡기위해)

export default Movie;

/*
const kim = {
  name: 'kim',
  age: 10,
  addr: 'kor',
  friends: [
    {name: 'joe', age: 20, addr:'usa'},
    {name: 'miko', age: 30, addr:'jp'}
  ]
};

var { name: userName, friends: [ ,{ name: jpFriend }] } = kim;
console.log(userName); // kim
console.log(jpFriend); // miko
*/

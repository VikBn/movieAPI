import React from 'react'
import {API_KEY_3} from "../utils/index";
import MovieItem from "./MovieItem";

export default class MovieList extends React.Component {

    constructor(){
        super();

        this.state = {
            movies: [],
            isFetched: false
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.type}?api_key=${API_KEY_3}&language=ru-US&region=ru&page=1`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    movies: data.results,
                    isFetched: true
                });
                {console.log(data.results)}
            })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props.type) {
            this.setState({
                isFetched: false
            });
            fetch(`https://api.themoviedb.org/3/movie/${nextProps.type}?api_key=${API_KEY_3}&language=ru-US&region=ru&page=1`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                  this.setState({
                      movies: data.results,
                      isFetched: true
                  });
                })
        }

    }

    render() {
        const { movies } = this.state;
        return(
            <div className="row">{this.state.movies.map(item => {
                return (
                    <div className="col-lg-6 col-md-12 col-12" key={item.id}>
                        <MovieItem item={item}/>
                    </div>
                )
            })
            }
            </div>
        )
    }

}
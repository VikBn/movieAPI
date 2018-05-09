import React from 'react'

export default class MovieItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isShowOverview: false,
            count:0,
            isLike: false
        }
    }

    render() {
        const { item } = this.props;
        return (
            <div className="d-flex justify-content-between flex-wrap item">
                <div className="col-md-3 col-sm-4 col-xs-4 col-lg-4 text-center">
                     <img className="item__img" src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path}`}
                         alt="img"/>
                </div>
                <div className="item__content col-md-9 col-xs-12 col-sm-8 col-lg-7">
                    <h4 className="item__title">{item.title}</h4>
                    <p className="item__descr">Rating: {item.vote_average}</p>

                    <div className="d-flex justify-content-between item__btns">
                    <div className="btn btn-info"  onClick={() => {this.setState({isShowOverview: !this.state.isShowOverview})}}>
                        {this.state.isShowOverview ? "Hide overview" : "Show overview"}
                    </div>
                        <div className={this.state.isLike ? "btn btn-danger" : "btn btn-warning"}
                                onClick={() => {!this.state.isLike ?
                                    this.setState({count: this.state.count + 1, isLike: true})
                                    :  this.setState({count: this.state.count - 1, isLike: false})}}>
                            {this.state.count}
                           </div>
                    </div>
                    {this.state.isShowOverview ? <p className="item__overview">{item.overview}</p> : <div className="box">
                        <p className="item__overview">{item.overview}</p>
                    </div>}
                </div>
            </div>
        )
    }
}
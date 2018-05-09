import React from 'react'

export default class MovieTabs extends React.Component {
    render(){
        const { changeTab } = this.props;
        return (
                <div className="container">
                    <ul className="tabs nav nav-pills">
                        <li className="nav-item">
                            <div className={this.props.type === "now_playing" ? "btn btn-light active" : "btn btn-light"}
                            onClick={() => {changeTab("now_playing")}}>
                                Now Playing
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className={this.props.type === "upcoming" ? "btn btn-light active" : "btn btn-light"}
                            onClick={() => {changeTab("upcoming")}}>
                                Upcoming
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className={this.props.type === "popular" ? "btn btn-light active" : "btn btn-light"}
                            onClick={() => {changeTab("popular")}}>
                                Popular
                            </div>
                        </li>
                    </ul>
                </div>
        )
    }
}
import React from 'react'
import {API_KEY_3} from "../utils/index";

export default class LoginForm extends React.Component {

    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            passwordRepeat: "",
            errors: {
                passwordRepeat: false
            }
        }
    }

    componentDidMount() {
        // this.refs.focus();
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
            errors: {
                passwordRepeat: false
            }
        });
    };

    onSubmit = event => {
        event.preventDefault();
        if(this.state.password !== this.state.passwordRepeat) {
            this.setState({
                errors: {
                    passwordRepeat: true
                }
            });
        } else {
            fetch(
                `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY_3}`
            )
            .then(response => response.json())
            .then(data => {
                 this.props.getSession(data.request_token);
            });
        }
    };

    render() {
        return (
            <div className="container d-flex justify-content-center">

                    <div className="col-lg-4 ">
                    <div className="form-login-container">
                        <form className="form-login">
                            <h1 className="h3 mb-3 font-weight-normal text-center">Sign in</h1>
                            <h5 className="banner">Чтобы войти, нажмите кнопку "sign in"</h5>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Username"
                                    ref="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    name="username"
                                />
                            </div>
                            {/*
                    <p>Username {this.state.username.length}</p>
                  */}
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    name="password"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Repeat Password</label>
                                <input
                                    type="password"
                                    className={
                                        this.state.errors.passwordRepeat
                                            ? "form-control invalid"
                                            : "form-control"
                                    }
                                    id="repeat-password"
                                    placeholder="Repeat Password"
                                    value={this.state.passwordRepeat}
                                    onChange={this.handleChange}
                                    name="passwordRepeat"
                                />
                                {this.state.errors.passwordRepeat ? (
                                    <div className="invalid-feedback">Passwords must be equal</div>
                                ) : null}
                            </div>
                            <button
                                type="button"
                                className="btn btn-lg btn-primary btn-block"
                                onClick={this.onSubmit}
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import { connect } from 'react-redux';

// import { loginUser } from '../../actions/authActions';

class Login extends React.Component {
    constructor() {
		super();
		
		this.state = {
			login: '',
			password: '',
			errors: {}
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            login: this.state.login,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
	
    render() {
        const { errors } = this.state;

        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">
                                Sign in to your BeeJee account
                            </p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="login"
                                        placeholder="Login"
                                        name="login"
                                        value={this.state.login}
                                        onChange={this.onChange}
                                        error={errors.login}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        error={errors.password}
                                    />
                                </div>
                                <input type="submit" className="btn btn-outline-warning btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     auth: state.auth,
//     errors: state.errors
// });

export default connect()(Login);
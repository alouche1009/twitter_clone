import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions'
import FileUpload from '../../../../FileUpload';

const styles = {
    TextField: {
        marginTop: 5,
        width: '100%'
    },
    btnBlock: {
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20
    }
}
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            login: '',
            password: '',
            password_confirmation: '',
            images: [],
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }
    componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors })
		}
	}
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            login: this.state.login,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            images: this.state.images
        }
        this.props.registerUser(userData, this.props.history)
    }

updateFiles = (newImages) => {
this.setState({ images: newImages })
}

    render() {
        const { classes } = this.props;
        const { errors } = this.state 
        return (
            <Paper style={{ padding: 15 }}>
                <form onSubmit={this.handleSubmit}>
               <FileUpload refreshFunction={this.updateFiles} />
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className={classes.TextField}
                        helperText={errors.email ? errors.email : ''}
                        error={errors.email ? true : false } 
                    />
                    <TextField
                        label="Login"
                        type="text"
                        name="login"
                        value={this.state.login}
                        onChange={this.handleChange}
                        className={classes.TextField}
                        helperText={errors.login ? errors.login : ''}
                        error={errors.login ? true : false }
                    />
                    <TextField
                        label="Password"
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className={classes.TextField}
                        helperText={errors.password ? errors.password : ''}
                        error={errors.password ? true : false }  
                    />
                    <TextField
                        label="Repeat Password"
                        type="text"
                        name="password_confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        className={classes.TextField}
                        helperText={errors.password_confirmation ? errors.password_confirmation : ''}
                        error={errors.password_confirmation ? true : false }  
                    />
                    <br />
                    <br />
                    <div className={classes.btnBlock}>
                        <Button variant="outlined" color="secondary" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(withStyles(styles)(Register)))
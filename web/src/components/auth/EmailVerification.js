import React, {Component} from 'react';
import axios from 'axios';

export default class EmailVerification extends Component {
    constructor(props) {
        super(props);
        this.onChangeVerificationCode = this.onChangeVerificationCode.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            verificationCode : ''
        }
    }

    onChangeVerificationCode(e){
        this.setState({
            verificationCode : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()


        const emailVerification = {
            verificationCode: this.state.username
        }




        this.setState({
            verificationCode : ''


        })

    }

    render(){
        return(
            <div>
                <h3>Verify Your Email</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Verify Code: </label>
                        <input type = "string"
                               required
                               className="form-control"
                               value = {this.state.type}
                               onChange = {this.onChangeVerificationCode}
                        />
                    </div>
                    <div className="form-group">
                        <input type ="submit" value = "Verify" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}


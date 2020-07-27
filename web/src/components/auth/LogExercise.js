import React, {Component} from 'react'
import { addExercise } from '../../api/exercise';

export default class LogExercise extends Component {
    constructor(props) {
        super(props);
        this.onChangeExerciseName = this.onChangeExerciseName.bind(this);
        this.onChangeExerciseDuration = this.onChangeExerciseDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            duration: 0
        }
    }

    onChangeExerciseName(e){
        this.setState({
            name : e.target.value
        })
    }

    onChangeExerciseDuration(e){
        this.setState({
            duration : e.target.value
        })
    }

    onSubmit(e){
        const { name, duration } = this.state;
        e.preventDefault();

        addExercise(name, duration).then((res) => {
            this.setState({
                name: '',
                duration: ''
            });
        }).catch((err) => console.log(err));
    }



    render(){
        return(
            <div>
                <h3>Log A Exercise</h3><br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Exercise Name: </label>
                        <input type = "string"
                               required
                               className="form-control"
                               value = {this.state.name}
                               onChange = {this.onChangeExerciseName}
                        />
                    </div>
                    <br/>
                    <div>
                        <label>Duration: </label>
                        <input type = "number"
                               required
                               className="form-control"
                               value = {this.state.duration}
                               onChange={this.onChangeExerciseDuration}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type ="submit" value = "Log Exercise" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}






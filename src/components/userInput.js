import React from 'react'

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showElements: false
        };
    }

        handleChange = (event) => {
            this.setState({value: event.target.value})
        }

        badRobot = () => {
            const newInput = this.state.value
            let badInput = 'BLA'.repeat(newInput.length / 3 + 1).substring(0, newInput.length)
            return badInput
        }

    render(){
        const { value } = this.state
        const showElements = value !== ""

        return(
            <div>
            <form>
                <label>
                    <p>Say Anything</p>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            </form>
            <div style={{ display: showElements ? "block" : "none "}}>
            <h3>Good Robot</h3>
            <p>I hear you saying {this.state.value}. Is that correct?</p>
            <h3>Bad Robot</h3>
            <p>I hear you saying {this.badRobot()}. Is that correct?</p>
            <h3>Kanyebot 5000</h3>
            <p>I'm gonna let you finish but Beyonce is {this.state.value}.</p>
            </div>
            </div>
        )
    }
}

export default UserInput

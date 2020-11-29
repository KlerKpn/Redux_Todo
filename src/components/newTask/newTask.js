import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add } from '../../store/actions/motion'
import classes from './newTask.module.css'

class NewTask extends Component {

    state = {
        label: ''
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.nextStepHandle()
        }
    }

    nextStepHandle = () => {
        if(this.state.label.trim() !== ''){
            const id = Math.random()
            this.props.add(this.state.label, id)
            this.setState({ label: '' })
        }
    }

    task = (value) => {
        this.setState({
            label: value
        })
    }

    render() {
        return (
            <div className={classes.page}>
                <div className={classes.title}>
                    New Task
                </div>
                <div className={classes.Input}>
                    <input className={classes.Input_input} value={this.state.label} onKeyDown={event => this.handleKeyDown(event)} onChange={event => this.task(event.target.value)} />
                    <button className={classes.btn} onClick={this.nextStepHandle}>
                         <i className="far fa-plus-square"></i>
                    </button>
                </div>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: (item, id) => dispatch(add(item, id)) 
    }
}

export default connect(null, mapDispatchToProps)(NewTask)
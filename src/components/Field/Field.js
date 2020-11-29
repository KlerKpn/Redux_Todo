import React from 'react'
import './Field.css'
import Item from './../Item/Item'
import { connect } from 'react-redux'
import { removeEvent, checkTask } from './../../store/actions/motion'
import NewTask from './../newTask/newTask';

const Field = props => {


    return (
        <div className='Field'>
            <NewTask />
            {
                props.items.map((el, index) => {

                    return (
                        <Item
                            isChecked={el.checked}
                            key={index}
                            item={el}
                            onDelete={() => props.removeEvent(el.id)}
                            toggleCheck={() => props.checkTask(el.id)}
                        />
                    )
                })
            }

        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        removeEvent: id => dispatch(removeEvent(id)),
        checkTask: id => dispatch(checkTask(id))
    }
}
function mapStateToProps(state) {
    return {
        items: state.motionReducer.items
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Field)
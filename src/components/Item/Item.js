import React from 'react'
import './Item.css'

const Item = props => {

    function isCheck() {
        return props.isChecked
            ? `Item isChecked`
            : `Item`
    }

    return (
        <div className={isCheck()} onClick={props.toggleCheck}>
            {props.item.label}
            <i onClick={props.onDelete} class="fas fa-trash-alt"></i>
        </div>
    )
}

export default Item
import React from "react";
import PropTypes from 'prop-types'
import './InputField.css'
import { FormGroup } from "reactstrap";
InputField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
}
InputField.defaultProps = {
    type: 'text',
    label: '',
}
export default function InputField(props) {
    const { field, form, type, label } = props;
    const { name, value } = field
    return (
        <FormGroup>

            <div className="form__row ">
                <h5 className="form__title">sssss</h5>
                <input className="form__input" type={type} id={name} {...field} />
            </div>
        </FormGroup>
    )
}
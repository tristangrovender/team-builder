import React from "react";

export default function Form(props) {
    return (
        <form onSubmit={props.onFormSubmit}>
            <label>
                name:
                <input
                    name="name"
                    type="text"
                    onChange={props.onInputChange}
                    value={props.formValues.name}
                />
            </label>
            <br />
            <label>
                email:
                <input
                    name="email"
                    type="text"
                    onChange={props.onInputChange}
                    value={props.formValues.email}
                />
            </label>
            <label>
                role:
                <input
                    name="role"
                    type="text"
                    onChange={props.onInputChange}
                    value={props.formValues.role}
                />
            </label>

            <input type="submit" />
        </form>
    );
}

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import Form from "./Form";

import "./App.css";

const initialMembers = [
    {
        id: uuid(),
        name: "Tristan",
        email: "tristan@lambda.com",
        role: "Front-end"
    },
    {
        id: uuid(),
        name: "Joshua",
        email: "joshua@lambda.com",
        role: "Back-end"
    },
    { id: uuid(), name: "Kia", email: "kia@lambda.com", role: "UI/UX" }
];

function App() {
    const [members, setMembers] = useState(initialMembers);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        role: ""
    });

    const onInputChange = event => {
        const inputThatChanged = event.target.name;
        const newValueForInput = event.target.value;
        setFormValues({
            ...formValues,
            [inputThatChanged]: newValueForInput
        });
    };

    const onFormSubmit = event => {
        event.preventDefault();
        const newMember = {
            id: uuid(),
            name: formValues.name,
            email: formValues.email,
            role: formValues.role
        };
        setMembers([...members, newMember]);
    };

    return (
        <div className="App">
            <Form
                onInputChange={onInputChange}
                onFormSubmit={onFormSubmit}
                formValues={formValues}
            />
            <h3>List of friends:</h3>
            {members.map(mbr => (
                <div key={mbr.id}>
                    {mbr.name} {mbr.email} {mbr.role}
                </div>
            ))}
        </div>
    );
}

export default App;

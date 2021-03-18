import React, { Component } from 'react'
class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    };
    hendleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                     <input type="text"
                        name="name"
                        value={name}
                        onChange={this.hendleChange}
                        placeholder="Ivan Ivanov"
                    />
                </label>
                <label >
                    Number
          <input
                        type="text"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        placeholder="111-11-11"
                    />
                </label>
                <button type="submit">
                    Add contact
        </button>
                
            </form>
            

        )
    }
}

    
export default ContactForm;
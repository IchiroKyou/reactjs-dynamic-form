import React from 'react'
import ReactDOM from 'react-dom'
import './form.css'

export class DynamicForm extends React.Component {
    state = {}

    constructor(props) {
        super(props);
    }

    onChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state);
        }
    };

    renderForm() {
        let model = this.props.model;

        let formUI = model.map((m) => {
            let key = m.key;
            let type = m.type || "text";
            let props = m.props || {};

            return (
                <div key={key} className="form-group">
                    <label
                        className="form-label"
                        key={`l${key}`}
                        htmlFor={m.key}
                    >
                        {m.label}
                    </label>
                    <input {...props}
                        ref={(key) => { this.key = key; }}
                        className="form-input"
                        type={type}
                        key={`i${key}`}
                        onChange={(e) => { this.onChange(e, key); }}
                    />
                </div>
            );
        });

        return formUI;
    }

    render() {
        let title = this.props.title || "Dynamic Form";

        return (
            <div className={this.props.className}>
                <h3>{title}</h3>
                <form className="dynamic-form" onSubmit={(e) => { console.log(e); this.onSubmit(e); }}>
                    {this.renderForm()}
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
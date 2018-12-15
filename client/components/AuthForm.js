import React from 'react'

class AuthForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit(e){
        e.preventDefault()
        const {email , password} = this.state;
        this.props.onSubmit({email , password})
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="row">
                <form className="col s4" onSubmit={this.onSubmit.bind(this)} >
                    <div className="input-field">
                        <input placeholder="Email" value={email} onChange={(event) => this.setState({ email: event.target.value })} />
                    </div>
                    <div className="input-field">
                        <input placeholder="Password" value={password} onChange={(event) => this.setState({ password: event.target.value })} />
                    </div>
                   <div className="errors">
                    {
                        this.props.errors.map(error=><div key={error}>{error}</div>)
                    }
                    </div>
                    <button  className="btn" type="submit">
                       Submit
                    </button>
                </form>
            </div>
        )
    }
}


export default AuthForm
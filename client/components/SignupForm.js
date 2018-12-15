import React from 'react'
import AuthForm from './AuthForm'
import mutation from '../mutations/signup';
import query from '../queries/CurrentUser';
import {hashHistory} from 'react-router';
import { graphql } from 'react-apollo';
class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { errors: [] }
    }
    componentWillUpdate(nextProps){
        if(!this.props.data.user && nextProps.data.user){
            hashHistory.push('/dashboard')
        }
    }


    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).then(()=>{
            hashHistory.push('/dashboard')
        }).catch(res => {
            const errors = res.graphQLErrors.map(er => er.message);
            this.setState({ errors })
        });
    }

    render() {

        return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm
                    errors={this.state.errors}
                    onSubmit={this.onSubmit.bind(this)}>
                </AuthForm>
            </div>
        )
    }
}


export default graphql(mutation)(graphql(query)(SignupForm));
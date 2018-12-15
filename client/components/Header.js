import React from 'react';
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser';
import { Link } from 'react-router';
import mutation from '../mutations/logout';
class Header extends React.Component {

    onlogoutClick() {
        console.log(this.props)
        this.props.mutate({
            refetchQueries: [{ query }]
        })
    }

    renderButtons() {
        const { loading, user } = this.props.data;
        if (loading) { return <div>Loading...</div> }
        if (user) {
            return <li><a onClick={this.onlogoutClick.bind(this)}>Logout</a>  </li>
        } else {
            return (<div>
                <li>
                    <Link to='/signup'>
                        Singup
                     </Link>
                </li>
                <li>
                    <Link to='/login'>
                        Login
                    </Link>
                </li>

            </div>)
        }
    }

    render() {

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to='/' className="brand-logo left" >
                        Home
                    </Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        )
    }

}

export default
    graphql(mutation)(
        graphql(query)(Header));
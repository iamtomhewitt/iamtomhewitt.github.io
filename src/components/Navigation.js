import React from 'react';

const NavigationItem = props => {
    const pageURI = window.location.pathname + window.location.search
    console.log('page URI: '+pageURI);
    console.log('props: ' + props.path);
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
    return (
        <li className={liClassName}>
            <a href={props.path} className={aClassName}>
                {props.name}
                {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
        </li>
    );
}

class NavigationDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }

    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
        return (
            <li className="nav-item dropwdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropwdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e) => { this.showDropdown(e) }}>
                    {this.props.name}
                </a>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdwn">
                    {this.props.children}
                </div>
            </li>
        )
    }
}

class Navigation extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Tom Hewitt</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavigationItem path="/" name="Home" />
                        <NavigationItem path="/#projects" name="Projects" />

                        <NavigationDropdown name="Dropdown">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Something else here</a>
                        </NavigationDropdown>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation;

// https://m.pardel.net/react-and-bootstrap-4-part-1-setup-navigation-d4767e2ed9f0
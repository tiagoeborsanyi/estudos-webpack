import React, { Component } from "react";

class Layout extends Component {
    render () {
        return (
            <div>
                <header>
                    <nav>NavBar</nav>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
};

export default Layout;
import React, {Component} from 'react';
class NewsList extends Component {
    render() {
        const id=this.props.match.params.id;
        return (
            <div>
                    <h3>{id}</h3>

            </div>

        );
    }
}

export default NewsList;
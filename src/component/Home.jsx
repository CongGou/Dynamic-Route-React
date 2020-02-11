import React, {Component} from 'react';

class Home extends Component {
    render() {
        //把下面的操作放在App.js或传参过来
        console.log(this.props)
        // const { store, addnum, rmnum } = this.props
        // console.log(store)
        return (
            <div>
                {/* <h1>{store.getState()}</h1> */}
            </div>

        );
    }
}

export default Home;
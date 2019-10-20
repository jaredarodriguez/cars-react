import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'


class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID d5b39169c9a15ca15fac846b831c304e02ee945462c946294d4690ea6ce6e4f8'
            }
        });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App; 
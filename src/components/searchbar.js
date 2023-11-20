import React, { Component } from 'react';
import searchbarStyles from '../styles/searchbarStyles.css'
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        };

        this.countries = [

        ];
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ searchInput: e.target.value });
    };

    render() {
        const filteredCountries = this.state.searchInput.length > 0
            ? this.countries.filter((country) => country.name.match(this.state.searchInput))
            : this.countries;

        return (
            <div >
                <input className={"searchInput"}
                    type="search"
                    placeholder="Search here"
                    onChange={this.handleChange}
                    value={this.state.searchInput}
                />

                <table>
                    <thead>

                    </thead>
                    <tbody>
                    {filteredCountries.map((country, index) => (
                        <tr key={index}>
                            <td>{country.name}</td>
                            <td>{country.continent}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SearchBar;

import "./style/searchBar.css";

function SearchBar(props) {
    const sendQuery = e => {
        e.preventDefault();
        props.onQueryChange(e.target.value);
    };

    return (
        <div className="search-bar-container">
            <input
                className="search-bar"
                type="text"
                name="search"
                placeholder="Search... (case sensitive)"
                onChange={sendQuery}
            />
        </div>
    );
}

export default SearchBar;

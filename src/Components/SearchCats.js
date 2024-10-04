import "../Styles/SearchCats.css";

function SearchCats({ term, setTerm }) {

    // set search term 
    const onSearchTermChange = (e) => {
        setTerm(e.target.value)
    };

    return (
        <div className="is-pulled-right">
            <div className="field has-addons">
                <div className="control">
                    <input className="input i1" type="text"
                        value={term}
                        placeholder="Search..."
                        onChange={onSearchTermChange}
                    />
                </div>
            </div>
        </div>
    )
};
export default SearchCats;
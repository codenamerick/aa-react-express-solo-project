import './Search.css';


const Search = () => {


    return (
        <div className='search-container'>
            <form className='search-form-wrapper'>
                <div>
                    <input type='text' placeholder='Search for a song or artist...' />
                    <button className='search-btn'>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
            <div className='search-results-container'>
                results container
            </div>
        </div>
    );
};

export default Search;

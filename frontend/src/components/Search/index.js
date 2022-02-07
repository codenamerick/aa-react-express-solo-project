import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Search.css';


const Search = () => {
    const [search, setSearch] = useState('');
    const songs = useSelector(state => Object.values(state.songs));
    const [activeResults, setActiveResults] = useState('');

    const filteredSongs = songs.filter(song => {
        return song.User?.username?.toLowerCase().includes(search.toLowerCase()) || song.title.toLowerCase().includes(search.toLowerCase());
    });

    const searchList = (
        filteredSongs.map(song => {
            return (
                <Link key={song.id} className='search-result-item' to={{pathname: `/songs/${song.id}`}} onClick={() => setSearch('')}>
                    <div>
                        <p>{song.title}</p>
                        <p>{song.User?.username}</p>
                    </div>
                </Link>
            )
        })
    );

    return (
        <div className='search-container'>
            <form className='search-form-wrapper'>
                <div>
                    <input type='text' placeholder='Search for a song or artist...' value={search} onClick={() => setActiveResults('results-active')} onBlur={() => setActiveResults('')} onChange={(e) => setSearch(e.target.value)}/>
                    <i className="fas fa-search search-btn"></i>
                </div>
            </form>
            <div className={`search-results-container ${activeResults}`}>
                {searchList}
            </div>
        </div>
    );
};

export default Search;

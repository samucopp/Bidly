import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchAuctions } from '../../api/auction';
import './SearchBar.css';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [previousSearch, setPreviousSearch] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) {
            if (location.pathname !== '/catalog') {
                navigate('/catalog', { state: { resetSearch: true } });
            }
            return;
        }

        const results = await searchAuctions(searchQuery);
        const hasMore = results.totalPages > 1;
        console.log("hasMore", hasMore);
        navigate('/catalog', { state: { searchResults: results.auctions, query: searchQuery, hasMore }, replace: true });

        setPreviousSearch(searchQuery);
        setSearchQuery('');
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                placeholder={previousSearch || "Search product..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
                <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
                    <path
                        d="M11.856 11.856l4.3 4.3"
                        stroke="#222"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.693 8.155a4.538 4.538 0 11-9.077 0 4.538 4.538 0 019.077 0z"
                        stroke="#222"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </form>
    );
};

export default SearchBar;
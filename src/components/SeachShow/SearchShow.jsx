import React from 'react';
import SearchResult from './SearchResult';
import NoResult from './NoResult';

const SearchShow = (props) => {
    const { searchList } = props;
    return (
        <div className="bg-gray-700 p-2 rounded mt-2 absolute top-16 w-full">
            {searchList && searchList.length > 4 ? (
                searchList.slice(0, 5).map((data, index) => {
                    return <SearchResult data={data} key={index} />;
                })
            ) : (
                <NoResult></NoResult>
            )}
        </div>
    );
};

export default SearchShow;

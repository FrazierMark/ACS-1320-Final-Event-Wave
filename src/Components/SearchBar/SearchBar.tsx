
import { useState } from "react";
import { searchEvents } from "../../utils/searchApi.js";
import { useNavigate } from 'react-router-dom';
import { isValidZipCode } from '../../utils/helperFunctions.js';
import './SearchBar.css'


const SearchBar = () => {
    const [zip, setZip] = useState("");
    const [radius, setRadius] = useState("50");
    const navigate = useNavigate();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setZip(value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValidZipCode(zip)) {
            const responseData = await searchEvents(zip, radius);
            if (responseData) {
                navigate("/events", { state: { search_results: responseData.data } });
            }
        }
    };

    return (
        <>
            <form className="search-box" onSubmit={handleSubmit}>
                <label className="search-label">Find Events Near You</label>
                <input
                    type="text"
                    className="search-txt"
                    placeholder="Zip Code"
                    value={zip}
                    onChange={onChange}
                />
                <button className="search-btn">
                    <img className="img" src="images/search.png" alt="search icon" />
                </button>
            </form>
            <div className="alert" id="zip-code-alert">Please enter a valid zip code.</div>
        </>
    );
};

export default SearchBar;

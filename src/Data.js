import React, { useCallback, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import './Data.css';

const UseEffectAPI = () => {

    const [output, setOutput] = useState([]);
    const [searchText, setSearchText] = useState("");


    const getData = useCallback(async (searchTerm) => {
        searchTerm = searchText;
        const numResults = 6;
        if (searchTerm.length > 1) {
            const response = await fetch(`https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${numResults}&solrTerm=${searchTerm}`)
                .then((response) => response.json())
                .then(dataResponse => {
                    setOutput(dataResponse.results.docs);
                })
        }
        else setOutput("");
    }, [searchText]);
    console.log(output);
    useEffect(() => {
        getData()

    }, [getData])

    const renderData = () => {
        if (output.length > 1)
            return (<div className="searchResultsRow">
                {output.map((val) => {
                    return (
                        
                            <table className="searchTextBox" id="search-results">
                                <tbody>
                                    <tr>
                                        <td>

                                            <button>{val.bookingId}</button>
                                            <h4> </h4>
                                        </td>
                                        <td >
                                            {val.name}                                                                                      
                                            {val.country}
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        
                    )
                })
                }
            </div>)

    }

    return (
        <div className="landingPage">
            <div className="heading">Car Hire – Search, Compare & Save</div>
            <div className="">
                <div>
                    <table className="features">
                        <tbody>
                            <tr>
                                <td className="features__data">
                                    <FaCheck className="features__data" /> Free cancellations on most bookings
                                </td>
                                <td className="features__data">
                                    <FaCheck className="features__data" /> 60,000+ locations
                                </td>
                                <td className="features__data">
                                    <FaCheck className="features__data" /> Customer support in 40+ languages
                                </td>

                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            <div>
                <table className="searchBox">
                    <tbody>
                        <tr>
                            <td className="seachBoxText">
                                Let’s find your ideal car
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className="searchTextBox" type="text" aria-label="Pick-up Location" id="landingPage-searchTextBox"
                                    placeholder="Pick-up Location"
                                    onChange={event => setSearchText(event.target.value)}
                                />

                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

            {renderData()}



        </div>
    )
}

export default UseEffectAPI
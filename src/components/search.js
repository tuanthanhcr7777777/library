import { useState } from "react";
import list from "../data";
import '../style/search.css'

function Search() {
  
  const [search, setSearch] = useState('')
  

    return (
        <div>
            <div className="input">
                <input 
                    placeholder="Search..."
                    onChange={(event) => {
                        setSearch(event.target.value)
                    }} 
                />

            </div>
            <div className="searchName">
                {
                    list
                        .filter((value) => {
                            if(search === '') {
                                return ;
                            } else if(value.title.toLowerCase().includes(search.toLowerCase())) {
                                return value;
                            }
                        
                        })
                        .map((value) => {
                            return (
                                <div className="input-value">
                                    <ul>
                                        <li 
                                            key={value.id}
                                            className="li-style"
                                        >
                                            <p>{value.title}</p>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

  export default Search
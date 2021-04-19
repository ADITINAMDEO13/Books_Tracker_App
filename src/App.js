import React, { useState } from "react";
// import ListItem from "./ListItem";
import "./App.css";
import data from './data/books';

function App() {
  const [books, setBooks] = useState(data);
  const [searchItem, setSearchItem] = useState("");
  const [isList , setIsList] = useState(true);
  const [gridlistbtnText, setgridlistbtnText] = useState("Grid");
  const [lightDarkMode,setLightDark] =useState("Dark");
  const [lightDarkClass,setLightDarkClass] =useState("lightMode");

  
  return (
    <div id="main" className={lightDarkClass}>

      <div className="searchinput">
        <input type="text"  placeholder="Search.." onChange={(e)=>{
          setSearchItem(e.target.value)
        }} />
      </div>

     <div className="btnPortion">
      <button onClick={ (e)=>{
          if(isList===true){
            setIsList(false);
            setgridlistbtnText("List");
          }
          else{
            setIsList(true);
            setgridlistbtnText("Grid");
          }
        } } >{gridlistbtnText}</button>


        <button onClick={ (e)=>{
          if(lightDarkMode==="Dark"){
            setLightDark("Light");
            setLightDarkClass("darkMode");
          }
          else{
            setLightDark("Dark");
            setLightDarkClass("lightMode");
          }
        } } >{lightDarkMode}</button>

     </div>


      { isList === true ? 
          <div className='displayAsList'>
            {
              books.filter((val)=>{
                if(searchItem === ""){
                  return val;
                }
                else if(books.title.toLowerCase().includes(searchItem.toLowerCase())){
                    return val;
                }
              }).map((item)=>{
                  return(
                      // <p className='lists'>{item.title}</p>
                      <div className='lists'>
                        <img src={item.thumbnailUrl} width="200px" height="200px" />
                        <div>
                          <div className="list_title" >{item.title}</div>
                          <div className="list_auther">
                            { item.authors.map((aut)=>{
                                return(
                                  <p>{aut}</p>
                                );
                            }) }
                          </div>
                        </div>
                      </div>
                  );
              })
            }
          </div> 
          
        :

           <div className='displayAsGrid'>
             {books.filter((val)=>{
                if(searchItem === ""){
                  return val;
                }
                else if(books.title.toLowerCase().includes(searchItem.toLowerCase())){
                    return val;
                }
              }).map((item)=>{
                
                  return(
                      // <p className='grids'>{item.title}</p>
                      <div className='grids'>
                        <img src={item.thumbnailUrl} width="200px" height="200px" />
                        <div>
                          <div className="grids_title">{item.title}</div>
                          <div className="grids_auther">
                            { item.authors.map((aut)=>{
                                  return(
                                    <p>{aut}</p>
                                  );
                              }) }
                          </div>
                        </div>
                      </div>
                  );
              }) 
              }
          </div> 
      }

    </div>
  );
}

export default App;


// import React, { useState} from 'react'
// import './App.css';
// // import axios from 'axios';
// import books from './data/books';

// function App() {
//   var key = 'g5aZCAVGBb89XkWJXVibn36e4VUyS1EV';
//   const [bookData , setBookData] = useState(books);
  
//   // useState(()=>{
//   //   const fetchBooks = async ()=>{
//   //     const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`);
//   //     console.log(res.data.results.books);
//   //     setBookData(res.data.results.books);
//   //   }

//   //   fetchBooks();
//   // },[]);
  
//   // useState(()=>{
//   //   setBookData(books);
//   // });

//   return (
//     <div>
//         {/* <button onClick={handleClick} >CLICK</button> */}
//         <h1>Books</h1>
//         <ul>
//           { bookData.map((item)=>{
//               return(
//                 <li key={item.rank}>{item.title}</li>
//               );
//           }) }
//         </ul>
//     </div>
//   );
// }

// export default App;

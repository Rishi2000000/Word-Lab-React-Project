// import React, { useState } from 'react';
// import './App.css';
// import Header from './Component/Header';
// import { Textform } from './Component/Textform';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { About } from './Component/About';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   const [myStyle, setmyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
//   });
//   const [btntext, setBtntext] = useState('Enable Dark Mode');

//   const toggleStyle = () => {
//     if (myStyle.color === 'white') {
//       setmyStyle({
//         color: 'black',
//         backgroundColor: 'white'
//       });
//       setBtntext('Enable Dark Mode');
//     } else {
//       setmyStyle({
//         color: 'white',
//         backgroundColor: 'black'
//       });
//       setBtntext('Enable Light Mode');
//     }
//   };

//   return (
//     <Router>
//       <div style={myStyle} height="100vh">
//         <Header title="The UpperClass lab" searchbar={true} about="About" />
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//         </Switch>
//         <div className="container my-3">
//           <Textform heading="Write Something" />
//           <div className="container my-3">
//             <button type="btn" className="btn btn-primary btntext" onClick={toggleStyle}>
//               {btntext}
//             </button>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import { Textform } from './Component/Textform';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './Component/About';

function App() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: 'black',
        backgroundColor: "white"
      }); 
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });  
      setBtnText("Enable Light Mode");
    }
  }
  
  return (
    <div style={myStyle} height="100vh">
      <Header title="The UpperClass lab" searchbar={true} about="About"/>
      <div className="container my-3">
        <About/>
        <Textform heading='Write Something'/>
        <div className="container my-3">      
          <button type="button" className="btn btn-primary btntext" onClick={toggleStyle}>{btntext}</button>
        </div>
      </div>
    </div>
  );
}

export default App;

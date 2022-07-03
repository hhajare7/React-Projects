import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Data from './Components/Data';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <h1 className='heading_style'>List of Top Netflix Series in 2022</h1>
        {Data.map((val) => {
            return (
                <App
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />
            );
        })}
    </>
);
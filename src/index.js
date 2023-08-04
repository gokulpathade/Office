import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


// const  App = (props) => (
//   <ReactTable
//     PaginationComponent={Pagination}
//     data={makeData()}
//     columns={[
//       {
//         Header: "First Name",
//         accessor: "firstName"
//       },
//       {
//         Header: "Last Name",
//         accessor: "lastName"
//       },
//       {
//         Header: "Age",
//         accessor: "age"
//       },
//       {
//         Header: "Status",
//         accessor: "status"
//       },
//       {
//         Header: "Visits",
//         accessor: "visits"
//       }
//     ]}
//   />
// );



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

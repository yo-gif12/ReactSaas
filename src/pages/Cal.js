// import React from "react";
// import "antd/dist/antd.css";
// import { Typography, Calendar, Badge } from "antd";
// const { Title } = Typography;

// function getListData(value) {
//   let listData;
//   switch (value.date()) {
//     case 8:
//       listData = [
//         { type: "warning", content: "This is warning event." },
//         { type: "success", content: "This is usual event." },
//       ];
//       break;
//     case 10:
//       listData = [
//         { type: "warning", content: "This is warning event." },
//         { type: "success", content: "This is usual event." },
//         { type: "error", content: "This is error event." },
//       ];
//       break;
//     case 15:
//       listData = [
//         { type: "warning", content: "This is warning event" },
//         { type: "success", content: "This is very long usual event。。...." },
//         { type: "error", content: "This is error event 1." },
//         { type: "error", content: "This is error event 2." },
//         { type: "error", content: "This is error event 3." },
//         { type: "error", content: "This is error event 4." },
//       ];
//       break;
//     default:
//   }
//   return listData || [];
// }

// function dateCellRender(value) {
//   const listData = getListData(value);
//   return (
//     <ul className="events">
//       {listData.map((item) => (
//         <li key={item.content}>
//           <Badge status={item.type} text={item.content} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function getMonthData(value) {
//   if (value.month() === 8) {
//     return 1394;
//   }
// };


// function monthCellRender(value) {
//   const num = getMonthData(value);
//   return num ? (
//     <div className="notes-month">
//       <section>{num}</section>
//       <span>Backlog number</span>
//     </div>
//   ) : null;
// }
// function constructor(props) {
//   super(props);
//   this.state = {
//     error: null,
//     isLoaded: false,
//     data: []
//   };
// }
// function componentDidMount() {
//   fetch("https://rh-delivery.herokuapp.com/test/all-users")
//     .then(res => res.json())
//     .then(
//       (result) => {
//         this.setState({
//           isLoaded: true,
//           data: result.data
//         });
//       },
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error
//         });
//       }
//     )
// }
// console.log(componentDidMount());
// function Cal() {
  
//   return (
//     <div id="Cal" className="Cal">
//         <button>test stripe</button>

//       <div>
//         <Title>Calendrier</Title>
//         <Calendar
//           dateCellRender={dateCellRender}
//           monthCellRender={monthCellRender}
//         />
//       </div>
//     </div>
//   );
// }

// export default Cal;

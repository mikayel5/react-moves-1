import React from "react"

// class HelloWorld extends React.Component {
//   getUrl(){
//     return 'http://webapplog.com'
//   }
//     render() {
//       return (
//         <a href={this.getUrl()} target="_blank">
//           {this.getUrl()}
//         </a>
//       );
//     }
//   };

// export default HelloWorld;


const HelloWorld = function(props){
  return (
    <a href={props.get} target="_blank">
      {props.get}
    </a>
  );
}

export default HelloWorld;
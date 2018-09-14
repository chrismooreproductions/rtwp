// interface App {
//   color?: string
//   width?: number
// }

// function appInit(config: App): {color: string, area: number} {
//   let newSquare = { color: 'white', area: 100 }
//   if (config.color) {
//     newSquare.color = config.color
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }

// let blackSquare = appInit({ color: 'black' })
// let blueSquare = appInit({ color: 'blue', width: 20 })
// let redSquare = appInit({ color: 'red' })

// console.log(blackSquare)
// console.log(blueSquare)
// console.log(redSquare)
// 
// import * as React from "react";

// export interface HelloProps { compiler: string; framework: string; }

// export const Hello = (props: HelloProps) => console.log('hey')


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.


import * as React from "react";
import { connect } from 'react-redux';
import * as ReactDOM from "react-dom";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}

ReactDOM.render(
    <Hello 
        compiler="TypeScript" 
        framework="React" 
    />,
    document.getElementById("app")
);
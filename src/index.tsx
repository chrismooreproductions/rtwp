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

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app') as HTMLElement
);

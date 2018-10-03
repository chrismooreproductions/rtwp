import * as React from 'react';
import { axiosWrapper } from '../../../utilities/axiosWrapper';

// type MainContentProps = {
//   system: string;
// }

// export const MainContent = async (props: MainContentProps, match: any) => {
//   const data = await axiosWrapper(process.env.API_URL, 'dfmea', 'sub-system', 'transmission');
//   // console.log(data);
//   return data.forEach((line:any, key: number) => {
//     console.log(line);
//     return(
//       <div>
//         {line.id}
//       </div>
//     )
//   })
// }
interface MainContentProps {
  system?: string;
  data?: any;
}

type MainContentState = {
  data: any;
}
  
export default class MainContent extends React.Component<MainContentProps, MainContentState> {
  constructor(props: MainContentProps) {
    super(props);
    this.state = {
      data: []
    };
  }

  setStateAsync(state: object) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }
  
  async componentDidMount() {
    const response = await axiosWrapper(process.env.API_URL, 'dfmea', 'sub-system', this.props.system);
    await this.setStateAsync({
      data: response
    })
  }

  render() {
    return (
      <ul>
        {this.state.data.map((item: any, i: number) => <li key={i}>{item.title}</li>)}
      </ul>
    )
  }
}
  

  // return data.map((line :any) => {
  //   <div>{line.id}</div>
  // })
// }

// export const MainContent = (props: MainContentProps, match: any) => {
//   switch(props.system) {
//     case 'transmission':
//       return (
//         <div>{DfmeaLineList}</div>
//       )
//       break;
//     default:
//       return (<div>There are no results to see here</div>)
//       break;
//   }
// }
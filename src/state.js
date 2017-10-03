import React,{Component} from  'react';

class Props3 extends Component
{
   constructor(props)
   {
   super(props);
   this.state = {x: 'Sai,',
                y: 'How you Doing?'};
   }

render()
{
 return <h1>Hello {this.state.x} {this.state.y}</h1>;
}
}
export default Props3;
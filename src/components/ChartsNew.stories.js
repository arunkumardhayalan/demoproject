import React from 'react'
import ChartsNew from "./ChartsNew";

export default {
    title: 'Charts',
    component: ChartsNew
}

// export const Chart1 = () => <ChartsNew size='small' height='200px'  width='100px' />    


function Template(args) {
    return <ChartsNew  {...args} />;
}


export const Barchart = Template.bind({})
Barchart.args = {
    type: 'line',
    width: '500px',
    height: '100px',
    fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
    },
    // colors: ['#F44336', '#E91E63', '#9C27B0'],
    colors: '#F44336'
}

// export function Barchart(args) {
//     return <ChartsNew  {...args} />;
// }

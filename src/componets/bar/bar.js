import React, {Component} from 'react'
import './bar.css'

import {Bar} from 'react-chartjs-2';





export default class Bara extends Component{




    render() {

        const {data} = this.props

        console.log(data, 'bar')

        const dat = {
            labels: data.map((i)=>{return i.age}),
            datasets: [

            {
                label: "males",
                backgroundColor: "blue",
                data: data.map((i)=>{return i.males})
            },
            {
                label: "females",
                backgroundColor: "red",
                data: data.map((i)=>{return i.females})
            },
            {
                label: "total",
                backgroundColor: "green",
                data: data.map((i)=>{return i.total})
            }


            ]
        };


        return(
            <div>
                <h2>Population of Slovenia</h2>
                <Bar
                    data={dat}
                    width={100}
                    height={100}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}
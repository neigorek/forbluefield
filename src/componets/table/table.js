import React, {Component} from 'react'
import './table.css'


export default class Table extends Component{


    render() {

        const {data} = this.props


        const elems = data.map((i)=>{


            return(
                <tr key={data.indexOf(i)}>
                    <td>{i.age}</td>
                    <td>{i.females}</td>
                    <td>{i.males}</td>
                    <td>{i.total}</td>
                </tr>
            )
        })

        console.log(elems,'el')


        return(

            <table className="table">

                <caption>Population on Slovenia in 1990</caption>
                <thead>
                <tr>
                    <th scope="col">Age</th>
                    <th scope="col">Females</th>
                    <th scope="col">Males</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody>
                {elems}
                </tbody>
            </table>
        )
    }
}

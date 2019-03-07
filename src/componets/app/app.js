import React, {Component} from 'react'
import './app.css'

import ServicePopulation from '../../services/servicePopulation'

import Header from '../header/'
import Table from '../table'
import Bara from '../bar'
import Calc from '../calc'

import {BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends Component{


    constructor(props){
        super(props);

        this.updateME()

    }

    state = {
        data: [],
        s:'',
        c:'',
        d:'',
        a:'',
        r:''

    }

    Service = new ServicePopulation();

    async updateME() {

        const data = this.Service.getPopulation()
            .then(data => data.filter((i) => i.age > 18 && i.age<30))
            .then(data => {this.setState({data: data})})

        return await data
    }

     giveCalc = async (sex, country, date, age) => {

        this.setState({s:sex,c:country,d:date,a:age})

        const data = await this.Service.getLifeExpectancy(sex, country, date, age)
            .then(data=> {this.setState({r:data})})

         console.log(this.state.r)


        return await data
    }



    render() {

        const {data,r} = this.state

        console.log(data, 'data')

        const wrapTab = () => {

            return (
                <Table data={data}/>
            )
        }
        const wrapBar = () => {

            return(
                <Bara
                    data={data}/>
            )
        }

        const wrapCalc = () => {

            return(
                <Calc math={this.giveCalc}
                        res={r}/>
            )
        }



        return(
            <div className={'container'}>
                <Router>
                    <div>
                            <h1>App</h1>

                            <Header/>

                            <Route path='/table' component={wrapTab}/>

                            <Route path='/bar' component={wrapBar}/>

                            <Route path='/calc' component={wrapCalc}/>
                    </div>


                </Router>
            </div>
        )
    }
}
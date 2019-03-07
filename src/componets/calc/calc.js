import React, {Component} from 'react'
import './calc.css'

export default class Calc extends Component{


    constructor(props){
        super(props);


        this.state = {sex:'', country:'',date:'',age:'', res:''};




    }
    componentDidMount() {

        this.updateResult(this.props.res)

    }

    changing = (field, e) => {

        this.setState({[field]:e.target.value })

        console.log(field, e.target.value)


    }
    async updateResult(res){

        if (res!==undefined){
            console.log(res)

            this.setState({res:res})

        }

        return res

    }



    onGive =  () =>{

        const {sex, country, date, age, res} = this.state

        console.log(sex,country,date,age, res)

        this.setState({res: this.props.math({sex, country, date, age})})



        this.updateResult(res)

    }

    render() {

        const {sex, country, date, age, res} = this.state

        console.log(res,'render')

        return(

            <div className="card border-light ">

                <div className="card-header">Calculate</div>

                <div className="card-body">
                    <h5 className="card-title">Light card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>

                    <div className="input-group input-group-sm justify-content-around mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Sex</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01" value={sex}
                                    onChange={this.changing.bind(this, 'sex')}>
                                <option>Choose...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Country</span>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-sm"value={country}
                                   onChange={this.changing.bind(this, 'country')}/>
                        </div>



                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
                            <input type="date" pattern={''} className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-sm" value={date}
                                   onChange={this.changing.bind(this, 'date')}/>
                        </div>



                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Age</span>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-sm" value={age}
                                   onChange={this.changing.bind(this, 'age')}/>
                        </div>



                    </div>

                    <label>result:{res}</label>

                    <button type="button" className="btn btn-primary btn-lg btn-block mt-2" onClick={this.onGive}>Calulate</button>

                </div>

            </div>
        )
    }

}
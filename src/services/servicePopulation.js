import axios from 'axios'

export default class ServicePopulation {

    _baseURL = 'http://api.population.io:80/1.0';

    async getPopulation(){

        let data = await axios.get(`${this._baseURL}/population/1990/Slovenia/`)
            .then(data=>{
                return data.data
            })


        return data


    }

    async getLifeExpectancy({sex, country, date, age}){

        console.log(arguments)

        try {

            let data = await axios.get(`${this._baseURL}/life-expectancy/remaining/${sex}/${country}/${date}/${age}`)
                .then((data) => {
                    console.log(data.data.remaining_life_expectancy, 'consol')
                    return data.data.remaining_life_expectancy
                })
            return data
        }
        catch (e) {

            console.log(e.name)
            throw e

        }

    }



}
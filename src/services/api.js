import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://private-59658d-celulardireto2017.apiary-mock.com',
        })
    }

    async getPlatforms() {
        try {
            const skus = await this.api.get('plataformas');
            return skus.data.plataformas;
        } catch (err) {
            console.log(err);
        }     
    }

    async getPlans(plan) {
        try {
            const skus = await this.api.get(`planos/${plan}`);
            return skus.data.plataformas;
        } catch (err) {
            console.log(err);
        }      
    }
}

export default new Api();
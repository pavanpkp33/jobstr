const axios = require('axios');

class RestClient {

    constructor(url, payLoad, headers) {
        this.url = url;
        this.payLoad = payLoad;
        this.headers = headers;

    }

    getData() {

        return axios.get(this.url);

    }

}

module.exports = RestClient;


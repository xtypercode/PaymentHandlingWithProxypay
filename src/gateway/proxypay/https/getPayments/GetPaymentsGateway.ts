import axios from "axios";
import { proxypay } from "..";

class GetPaymentsGateway {
    constructor(){}

    async execute() {
      proxypay.get(`/payments`).then(response => {
          console.log(response.data);
          return response.data;
      })
      .catch(error => {
          console.error('Erro ao fazer a requisição:', error.message);
          return error.message;
      });      
    }
}

const getPaymentsGateway = new GetPaymentsGateway()
export { getPaymentsGateway }
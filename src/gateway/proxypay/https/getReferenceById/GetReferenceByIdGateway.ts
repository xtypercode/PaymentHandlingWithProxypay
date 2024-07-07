import axios from "axios";
import { proxypay } from "..";

class GetReferenceByIdGateway {
    constructor(){}

    async execute(referenceId: string) {
        proxypay.get(`/references/${referenceId}`).then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Erro ao fazer a requisição:', error.message);
            return error.message; 
        });      
    } 
}

const getReferenceByIdGateway = new GetReferenceByIdGateway()
export { getReferenceByIdGateway }


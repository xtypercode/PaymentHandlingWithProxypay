import axios from "axios";
import { proxypay } from "..";

class DeleteReferenceGateway {
    constructor(){}

    async execute(referenceId: string) {
        proxypay.delete(`/references/${referenceId}`).then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Erro ao fazer a requisição:', error.message);
            return error.message;
        });
    }
}

const deleteReferenceGateway = new DeleteReferenceGateway();
export { deleteReferenceGateway }
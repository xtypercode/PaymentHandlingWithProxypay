import axios from "axios";
import { proxypay } from "..";

class DeletePaymentGateway {
    constructor(){}

    async execute(paymentId: string) {
        proxypay.delete(`/payments/${paymentId}`).then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Erro ao fazer a requisição:', error.message);
            return error.message;
        });
    }
}

const deletePaymentGateway = new DeletePaymentGateway();
export { deletePaymentGateway }
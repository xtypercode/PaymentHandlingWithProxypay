import axios from "axios";
import { proxypay } from "..";

class RenovateReferenceGateway {
    constructor(){}

    async execute(referenceId: string, amount?: string, customFields?: { orderId: string; customer_name: string; } | undefined) {
        let expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);

        proxypay.put(`/references/${referenceId}`,
            {
                amount,
                end_datetime: expirationDate.toLocaleDateString('pt-BR'),
                custom_fields: customFields
            },
        ).then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Erro ao fazer a requisição:', error.message);
            return error.message
        });
    }
}

const renovateReferenceGateway = new RenovateReferenceGateway()
export { renovateReferenceGateway }

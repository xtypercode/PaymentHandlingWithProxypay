import axios from "axios";
import { proxypay } from "..";

class GenerateReferenceGateway {
    constructor(){}

    async execute(amount: string, customFields: {orderId: string, customer_name: string}) {
        let expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);

        const reference_id = await proxypay.post(
            `${process.env.PROXYPAY_BASEURL}/reference_ids/`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/vnd.proxypay.v2+json",
                    Authorization: `Token ${process.env.PROXYPAY_TOKEN}`,
                },
            }
        );

        proxypay.put(`/references/${reference_id.data.id}`, {
            amount,
            end_datetime: expirationDate.toLocaleDateString('pt-BR'),
            custom_fields: customFields
        }).then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error('Erro ao fazer a requisição:', error.message);
            return error.message;
        });
    }
}

const generateReferenceGateway = new GenerateReferenceGateway()
export { generateReferenceGateway }
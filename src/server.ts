import fastify, { FastifyInstance, FastifyRequest } from "fastify";
import { getPaymentsGateway } from "./gateway/proxypay/https/getPayments/GetPaymentsGateway";
import { renovateReferenceGateway } from "./gateway/proxypay/https/renovateReference/RenovateReferenceGateway";
import { generateReferenceGateway } from "./gateway/proxypay/https/generateReference/GenerateReferenceGateway";
import { deleteReferenceGateway } from "./gateway/proxypay/https/deleteReference/DeleteReferenceGateway";
import { getReferenceByIdGateway } from "./gateway/proxypay/https/getReferenceById/GetReferenceByIdGateway";

// INIT
const server: FastifyInstance = fastify({})

// ROUTES
server.get('/', async (request, reply) => {
    return reply.send("... XtyperCode ...");
})

server.get('/api', async (request, reply) => {
    return reply.send("ProxyPay Reference Generator API");
})

server.get('/api/reference/generate', async (request, reply) => {
    const { amount, customFields } = request.body

    const response = generateReferenceGateway.execute(amount, customFields)

    return reply.send(response);
})

server.get('/api/payment/list', async (request, reply) => {
    const response = getPaymentsGateway.execute()

    return reply.send(response);
})

server.get('/api/reference/get/:referenceId', async (request, reply) => {
    const { referenceId } = request.params

    const response = getReferenceByIdGateway.execute(referenceId)

    return reply.send(response);
})

server.get('/api/reference/delete/:referenceId', async (request, reply) => {
    const { referenceId } = request.params

    const response = deleteReferenceGateway.execute(referenceId);

    return reply.send(response);
})

server.get('/api/reference/renovate/:id', async (request, reply) => {
    const { referenceId } = request.params
    const { amount, customFields } = request.body

    const response = renovateReferenceGateway.execute(referenceId, amount, customFields)

    return reply.send(response);
})

// ENGINE
const start = async () => {
    try {
        await server.listen({ port: 5000 },  ()=>{
            console.log("API Running...")
        })
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start();
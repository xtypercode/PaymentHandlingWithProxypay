export type ProxypayPayload = {
    transaction_id: number;
    terminal_type: string;
    terminal_transaction_id: number;
    terminal_location: string | null;
    terminal_id: string;
    reference_id: number;
    product_id: number | null;
    period_start_datetime: string;
    period_id: number;
    period_end_datetime: string;
    parameter_id: number;
    id: number;
    fee: string;
    entity_id: number;
    datetime: string;
    custom_fields: Record<string, string>;
    amount: string;
}

export interface ProxypayGateway {
    generate(amount: string, customFields: {orderId: string, customer_name: string}): Promise<ProxypayPayload>,
    renovate(referenceId: string, amount?: string, customFields?: {orderId: string, customer_name: string}): Promise<ProxypayPayload>,
    get(referenceId: string): Promise<ProxypayPayload>,
    getPayments(): Promise<ProxypayPayload>,
    remove(referenceId: string): Promise<ProxypayPayload>
}
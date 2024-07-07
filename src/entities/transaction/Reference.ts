export enum TransactionCurrency {
    AO = "AKZ",
    EUR = "£",
    USD = "$",
    BRL = "R$"
}

export enum TransactionStatus {
    PAID = "Paid",
    PENDING = "Pending",
    FAILED = "Failed",
    EXPIRED = "Expired"
}

export interface Transaction {
    id: string, 
    description: string, 
    ref: string,
    amount: string,
    currency: TransactionCurrency,
    status: TransactionStatus,
}
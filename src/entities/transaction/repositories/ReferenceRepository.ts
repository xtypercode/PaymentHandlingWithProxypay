import { Error } from "../../../shared/Error";
import { Reference, ReferenceStatus } from "../Reference";

export interface ReferenceRepository {
    save(): Promise<Reference>
    list(): Promise<Reference[]>
    update(referenceId: string, status?: ReferenceStatus, description?: string): Promise<Reference>
    getById(referenceId: string): Promise<Reference | Error>
    getByReference(reference: string): Promise<Reference | Error>
}
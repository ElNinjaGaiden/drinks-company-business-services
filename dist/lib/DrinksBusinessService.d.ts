import { IDrinksBusinessService } from 'drinks-company-business-services-contracts';
import { IDrinksDataRepository } from 'drinks-company-data-repositories-contracts';
import { Drink } from 'drinks-company-models-contracts';
export default class DrinksBusinessService implements IDrinksBusinessService {
    drinksDataRepository: IDrinksDataRepository;
    clientName: String;
    constructor({ drinksDataRepository, clientName }: {
        drinksDataRepository: IDrinksDataRepository;
        clientName: String;
    });
    crazyFunction(): Promise<Drink[]>;
}

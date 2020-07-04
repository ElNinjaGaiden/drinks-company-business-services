import { IDrinksBusinessService } from 'drinks-company-business-services-contracts';
import { IDrinksDataRepository } from 'drinks-company-data-repositories-contracts';
import { Drink } from 'drinks-company-models-contracts';
export default class DrinksBusinessService implements IDrinksBusinessService {
    drinksDataRepository: IDrinksDataRepository;
    constructor(drinksDataRepository: IDrinksDataRepository);
    crazyFunction(): Promise<Drink[]>;
}

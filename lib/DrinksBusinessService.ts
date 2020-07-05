import { IDrinksBusinessService } from 'drinks-company-business-services-contracts';
import { IDrinksDataRepository } from 'drinks-company-data-repositories-contracts';
import { Drink } from 'drinks-company-models-contracts';

export default class DrinksBusinessService implements IDrinksBusinessService {
	drinksDataRepository: IDrinksDataRepository;
	clientName: String;

	constructor({ drinksDataRepository, clientName } : {
		drinksDataRepository: IDrinksDataRepository,
		clientName: String }) {
		this.drinksDataRepository = drinksDataRepository;
		this.clientName = clientName;
	}

	crazyFunction() : Promise<Drink[]> {
		return new Promise(async (resolve: Function) => {
			const drinks = await this.drinksDataRepository.getDrinks();
			const result = drinks.map((drink: Drink) => ({
				name: `Running some crazy business process for client ${this.clientName} over drink ${drink.name}`
			}));
			resolve(result);
		});
	}
}

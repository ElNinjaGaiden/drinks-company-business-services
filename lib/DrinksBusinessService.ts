import { IDrinksBusinessService } from 'drinks-company-business-services-contracts';
import { IDrinksDataRepository } from 'drinks-company-data-repositories-contracts';
import { Drink } from 'drinks-company-models-contracts';

export default class DrinksBusinessService implements IDrinksBusinessService {
	drinksDataRepository: IDrinksDataRepository;

	constructor(drinksDataRepository: IDrinksDataRepository) {
		this.drinksDataRepository = drinksDataRepository;
	}

	crazyFunction() : Promise<Drink[]> {
		return new Promise(async (resolve: Function) => {
			const drinks = await this.drinksDataRepository.getDrinks();
			drinks.forEach((drink: Drink) => {
				console.log(`Doing crazy stuff with ${drink.name}`);
			});
			resolve(drinks);
		});
	}
}

import type { Beach } from '$lib/data/beach';
import type { Catalog } from '$lib/data/catalog';
import type BaseService from '$lib/services/interface';

class CatalogService implements BaseService {
	public readonly base_url: string = '/api';
	public uri = `${this.base_url}/catalog`;

	async fetchData(uriParams: Record<string, any>, page: number) {
		const p = new URLSearchParams(uriParams);
		const url = `${this.uri}/?${p.toString()}&page=${page}`;
		const response = await fetch(url, {
			 'Content-Type': 'application/json',
			method: 'GET'
		});
		const results = await response.json();
		if (results.count == 0) {
			return {hasMore: false, data: [] as Beach[]};
		}
		
		return {
			hasMore: false, 
			data: results?.data.map(
			(b: any): Catalog => ({
				id: b.id,
				name: b.name,
				scientific_name: b.scientific_name,
				image: b.image,
				details: b.details,
				conservation_status: b.conservation_status,
				author: b.author,
				entityId: b.entityId,
				beachId: b.beachId,
			})
		)};
	}
	
}

export { CatalogService };

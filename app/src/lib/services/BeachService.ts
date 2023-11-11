import type { Beach } from '$lib/data/beach';
import type BaseService from '$lib/services/interface';

class BeachService implements BaseService {
	public readonly base_url: string = '/api';
	public uri = `${this.base_url}/beach`;

	async fetchData(uriParams: Record<string, any>, page: number) {
		const p = new URLSearchParams({});
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
			(b: any): Beach => ({
				id: b.id,
				title: b.title,
				region: b.region,
                plastic_index: b.plastic_index,
                danger_index: b.danger_index,
                details: b.details,
			})
		)};
	}
	
}

export { BeachService };

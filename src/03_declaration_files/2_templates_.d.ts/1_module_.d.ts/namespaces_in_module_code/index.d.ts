declare namespace API_1 {
	export interface InforRequest {
		id: string;
	}
	export interface InforResponse {
		width: number;
		height: number;
	}
}
export class API_1 {
	constructor(baseUrl: string);
	getInfo(opts: API_1.InforRequest): API_1.InforResponse;
}

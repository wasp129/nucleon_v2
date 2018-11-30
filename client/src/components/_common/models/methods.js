import uuid from "uuid";

export default class Method {
	constructor() {
		this.id = uuid();
		this.answer = 0;
	}
}
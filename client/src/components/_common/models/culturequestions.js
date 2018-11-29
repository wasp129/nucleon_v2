import uuid from "uuid";

export default class CultureQuestion {
	constructor(statement = "") {
		this.id = uuid();
		this.radioId = 0;
		this.statement = statement;
	}
}
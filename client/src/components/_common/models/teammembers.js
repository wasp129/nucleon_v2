import uuid from "uuid";

export default class TeamMember {
	constructor(name = "", placeholder="") {
		this.id = uuid();
		this.name = name;
		this.placeholder = placeholder;
		this.competence = 0;
		this.salary = "";
	}
}
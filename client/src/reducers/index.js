import TeamMember from "../components/_common/models/teammembers";
import CultureQuestion from "../components/_common/models/culturequestions";
import Method from "../components/_common/models/methods";

const initialState = {
	teamMembers: [
		new TeamMember("", "Type name here"),
		new TeamMember("", "Type name here"),
		new TeamMember("", "Type name here")
	],
	proximity: 0,
	bureaucracy: 0,
	cultureQuestions: [
		new CultureQuestion("My team members understand how their role can be a stepping stone to future aspirations."),
		new CultureQuestion("My team members know how their work contributes to the company's strategy and objectives."),
		new CultureQuestion("My team members continuously experiment with different approaches to familiar tasks."),
		new CultureQuestion("My team members often have to abandon or redo work to deal with emergencies or changing priorities."),
		new CultureQuestion("My team members ask me for approval before moving forward or changing direction on their projects."),
		new CultureQuestion("My team members develop their skills according to an individually defined plan."),
		new CultureQuestion("My team members understand their performance level relative to their peers within the company."),
		new CultureQuestion("My team members autonomously complete their tasks without my involvement."),
		new CultureQuestion("My team members' good performance is rewarded with perks, favors, and/or bonuses."),
		new CultureQuestion("My team members know how their work affects the end user."),
		new CultureQuestion("My team members receive feedback about the behaviors they need to change and those they should continue."),
		new CultureQuestion("My team members are only evalutated on things they themselves can influence.")
	],
	methods: [
		new Method(),
		new Method(),
		new Method()
	]
}

export default (state = initialState, action) => {
	switch(action.type) {
		case "SEND_SLIDE_2_DATA":
		console.log("Slide 2 data sent.");
		return { ...state, teamMembers: [...action.teamMembers] }

		case "SEND_SLIDE_3_DATA":
		console.log("Slide 3 data sent.");
		return { ...state, teamMembers: [...action.teamMembers] }

		case "SEND_SLIDE_4_DATA":
		console.log("Slide 4 data sent.");
		return { ...state, proximity: action.proximity };

		case "SEND_SLIDE_5_DATA":
		console.log("Slide 5 data sent.");
		return { ...state, bureaucracy: action.bureaucracy };

		case "SEND_SLIDE_6_DATA":
		console.log("Slide 6 data sent.")
        return { ...state, cultureQuestions: action.questions };

        case "SEND_SLIDE_7_DATA":
		console.log("Slide 7 data sent.")
        return { ...state, methods: action.methods };

        case "SEND_SLIDE_8_DATA":
		console.log("Slide 8 data sent.")
        return { ...state, methods: action.methods };

        case "SEND_SLIDE_9_DATA":
		console.log("Slide 9 data sent.")
        return { ...state, methods: action.methods };

        case "SEND_SLIDE_10_DATA":
		console.log("Slide 10 data sent.")
        return { ...state, teamMembers: [...action.teamMembers] };

		default:
		return state;
	}
}
import TeamMember from "../components/_common/models/teammembers";

const initialState = {
	teamMembers: [
		new TeamMember("", "Type name here"),
		new TeamMember("", "Type name here"),
		new TeamMember("", "Type name here")
	],

	proximity: 0,
	bureaucracy: 0
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

		default:
		return state;
	}
}
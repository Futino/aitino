import { crews } from "$lib/dummy-data/temp-crew";
import * as db from "$lib/server/db";
import type { SessionLoad } from "$lib/types/loads";
import type { Crew, Message, Session } from "$lib/types/models";
import type { PageServerLoad, Actions } from "./$types";
import { error, json} from "@sveltejs/kit";

export const load: PageServerLoad = async ({url, cookies, locals: { getSession } }) => {

	const session = await getSession();
	if (!session) throw error(401, "You are not logged in. Please log in and try again.");
	const profileId = session.user.id;

	// If there is a crewId in the URL, we will use that to start a new session
	const newSession: {title: string | null; crewId: string | null} = {
		title: url.searchParams.get("title"),
		crewId: url.searchParams.get("crewId"),
	};

	const recentSession = await db.getRecentSession(profileId);  

	return {
		recentSession: recentSession,
		allSessions: db.getSessions(profileId),
		newSession, // Used to start a maeve
		sessionMessages:  recentSession ? await db.getMessages(recentSession.id) : [] as Message[],
		recentCrew: await db.getRecentCrew(profileId), // TODO: this will be obsolete when library feature is done. Instead a crew will be selected manually.
	}
};

export const actions: Actions = {
	"get-messages": async ({ url}) => {
		const sessionId = url.searchParams.get("sessionId");
		if (!sessionId) throw error(400, "This session does not exist. Please reload the page.");
		const messages = await db.getMessages(sessionId);

		return json(messages);
		
	},
	"get-session": async ({url}) => {
		const sessionId = url.searchParams.get("sessionId");
		if (!sessionId) throw error(400, "This session does not exist. Please reload the page.");
		const session: Session | null = await db.getSession(sessionId);
		return json({session});
	},
	"get-agent": async ({url}) => {
		// TODO: this is not being called. the route /api/get-agent is being used.
		// I wasn't able to call this from Message.svelte in fetch.
		// So it is temporarily being called from /api/get-agent. This should be used instead if possible.
		console.log("getting agent")
		const agentId = url.searchParams.get("agentId");
		if (!agentId) throw error(400, "No agent ID provided.");
		const agent = await db.getAgent(agentId);
		console.log('agent: ', agent);
		return json(agent);
	},
	rename:  async ({request}) => {
		const { sessionId, newTitle} = await request.json();
		if (!sessionId) throw error(400, "No session ID provided.");
		if (newTitle == "") throw error(400, "No new name provided.");
		await db.renameSession(sessionId, newTitle);
		console.log("sessionId", sessionId, "newName", newTitle);
	},
	delete: async ({request}) => {
		const { sessionId } = await request.json();
		if (!sessionId) throw error(400, "No session ID provided.");
		await db.deleteSession(sessionId);
	}
};

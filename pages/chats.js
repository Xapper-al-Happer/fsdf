import React from "react";
import { ChatEngine } from 'react-chat-engine';

export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='Soviet'
			userSecret='Mandyiscool132'
			projectID='b798f758-4b14-4ec4-ae39-a7f69c5d4302'
		/>
	);
}

export default function Chats() {
  return <div className="background">chats</div>;
}

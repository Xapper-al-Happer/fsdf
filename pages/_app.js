import "../styles/auth.css";
import { ChatEngine } from 'react-chat-engine';
import "../styles/chats.css";
import "../styles/index.css";

// import { ContextProvider } from '../context'


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



export default function App({ Component, pageProps }) {
  return (
    // <ContextProvider>
    <Component {...pageProps} />
    // </ContextProvider>
  );
}

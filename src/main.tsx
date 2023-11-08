import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";

import { App } from "./App.tsx";

const projectId = "40a3565622421e3c80a1887befb3113e";

const chains = [mainnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId });

createWeb3Modal({ wagmiConfig, projectId, chains });

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<WagmiConfig config={wagmiConfig}>
			<App />
		</WagmiConfig>
	</React.StrictMode>,
);

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand(
		"toggle-relative-line-num.toggle",
		() => {
			const config = vscode.workspace.getConfiguration("editor");
			const current = config.get<string>("lineNumbers");
			const next = current === "relative" ? "on" : "relative";

			config.update("lineNumbers", next, vscode.ConfigurationTarget.Global);
		},
	);

	context.subscriptions.push(disposable);
}

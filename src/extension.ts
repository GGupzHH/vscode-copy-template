// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "importtemplate" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('importtemplate.helloWorld', (e) => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from importTemplate!');
		// vscode.window.showInformationMessage(`copied to the clipboard `);
		const name = e ? e?.fsPath?.split('/').pop() :
				vscode.window.activeTextEditor?.document.fileName.split('/').pop();
        const proc = require('child_process').spawn('pbcopy'); 
    proc.stdin.write(name);
        proc.stdin.end();
    // 复制成功后给一个提示
        vscode.window.showInformationMessage(`copied '${name}'1111111111111 `);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

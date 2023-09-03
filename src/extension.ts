import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "extension-save" is now active!');
	let disposable = vscode.commands.registerCommand('extension-save.nickname', () => {
		vscode.window.showWarningMessage('Digite o nickname no box.');
		vscode.window.showWorkspaceFolderPick()
		vscode.window.showInputBox().then(res => {
			const validatingIfHaveSpaceOrNot = res?.split('');
			if(validatingIfHaveSpaceOrNot?.some(e => e === ' ') || res === undefined) {
				return vscode.window.showErrorMessage('O nickname não pode conter espaços em branco!!');
			};
			vscode.window.showInformationMessage(`Olá, @${res as string}. Nome registrado com sucesso!`);
		});
	}); 

	context.subscriptions.push(disposable);
}

export function deactivate() {};

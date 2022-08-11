import CopyToClipboard from "copy-to-clipboard";
import notify from "../../utils/functionality/toastify";

interface Vars {
	PonNumber: number | string;
	OnuNumber: number | string;
	OnuProfile: string;
}

interface Funcs {
	setPonNumber: (ponNumber: number | string) => void;
	setOnuNumber: (onuNumber: number | string) => void;
	setOnuProfile: (onuProfile: string) => void;
	setStatsCopied: (statsCopied: boolean) => void;
}

export default async function generateTamplateRemove(
	e: React.FormEvent<HTMLFormElement>,
	{ PonNumber, OnuNumber, OnuProfile }: Vars,
	{ setPonNumber, setOnuNumber, setOnuProfile, setStatsCopied }: Funcs
) {
	e.preventDefault();
	if (PonNumber > 0 || OnuNumber > 0) {
		const template = `en\nconf t\n gpon\ngpon-olt ${PonNumber}\nonu-profile ${OnuNumber} ${OnuProfile}\nwrite memory\nen\nshow onu ip ${PonNumber} ${OnuNumber}\nshow onu info | grep ${PonNumber} ${OnuNumber}\n\n`;

		setPonNumber("");
		setOnuNumber("");
		setOnuProfile("");
		await CopyToClipboard(template);
		setStatsCopied(true);
		setTimeout(() => setStatsCopied(false), 2000);
		notify({
			message: "Template copiado para a área de transferência",
			type: "success",
		});
	} else {
		notify({
			message: "Não há dados para gerar o template",
			type: "error",
		});
	}
}

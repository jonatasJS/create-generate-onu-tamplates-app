import CopyToClipboard from "copy-to-clipboard";
import notify from "../../utils/functionality/toastify";

interface Vars {
	PonNumber: number;
	OnuNumber: number;
	DATA: Array<{
		id: number;
		pon: string;
		onu: string;
	}>;
}

interface Funcs {
	setPonNumber: (ponNumber: number | string) => void;
	setOnuNumber: (onuNumber: number | string) => void;
	setStatsCopied: (statsCopied: boolean) => void;
	setDATA: (
		DATA: Array<{
			id: number;
			pon: string;
			onu: string;
		}>
	) => void;
	getData: (template: string) => Promise<string>;
}

export default async function generateTamplateRemove(
	e: React.FormEvent<HTMLFormElement>,
	{ PonNumber, OnuNumber, DATA }: Vars,
	{ setPonNumber, setOnuNumber, setStatsCopied, setDATA, getData }: Funcs
) {
	e.preventDefault();
	if (DATA.length > 0 || PonNumber > 0 || OnuNumber > 0) {
		const DataList = await getData("");
		const template =
			PonNumber < 0 || OnuNumber < 0
				? `${DataList}exit\n\n`
				: `${DataList}en\nconf t\ngpon\ngpon-olt ${PonNumber}\nno onu ${OnuNumber}\nwrite memory\nen\nexit\n\n`;

		console.log(template);

		setPonNumber("");
		setOnuNumber("");
		setDATA([]);
		while (DATA.length > 0) {
			DATA.pop();
		}
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

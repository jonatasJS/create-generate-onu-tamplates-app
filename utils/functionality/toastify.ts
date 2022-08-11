import { toast } from 'react-toastify';

import { TypesToast } from './TypesToast';

export default function notify({message, type}: TypesToast) {
	toast(message, {
		theme: 'dark',
		type,
		autoClose: 3000
	});
}

import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
	ClassicEditor,
	Bold,
	Essentials,
	Italic,
	Mention,
	Paragraph,
	Undo,
	Underline,
	List,
} from 'ckeditor5';
// import { SlashCommand } from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
// import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

const Textarea = (props) => {
	const { name, cols, rows, variants, onChange, placeholder, value } = props;
	return (
		<>
			<textarea
				placeholder={placeholder}
				className={variants}
				name={name}
				cols={cols}
				rows={rows}
				onChange={onChange}
				value={value}
			></textarea>
		</>
	);
};

export default Textarea;

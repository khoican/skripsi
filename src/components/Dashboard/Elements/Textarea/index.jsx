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
			{/* <textarea
				placeholder={placeholder}
				className={variants}
				name={name}
				cols={cols}
				rows={rows}
				onChange={onChange}
				value={value}
			></textarea> */}
			<CKEditor
				editor={ClassicEditor}
				config={{
					toolbar: {
						items: [
							'undo',
							'redo',
							'|',
							'bold',
							'italic',
							'underline',
							'numberedList',
						],
					},
					plugins: [
						Bold,
						Essentials,
						Italic,
						Mention,
						Paragraph,
						Undo,
						Underline,
						List,
					],
					licenseKey: '<YOUR_LICENSE_KEY>',
					mention: {
						// Mention configuration
					},
					initialData: '<p>Hello from CKEditor 5 in React!</p>',
				}}
			/>
		</>
	);
};

export default Textarea;

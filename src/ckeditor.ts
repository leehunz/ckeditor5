/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
// import { CKFinderUploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
// import { CKBox } from '@ckeditor/ckeditor5-ckbox';
// import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
// import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing, ImageResizeEditing, ImageResizeHandles } from '@ckeditor/ckeditor5-image';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { Font } from '@ckeditor/ckeditor5-font';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableCellProperties, TableProperties, TableColumnResize, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
// import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';

export default class ClassicEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		Essentials,
		Alignment,
		Autoformat,
		Bold,
		Code,
		Italic,
		Strikethrough, Subscript, Superscript, Underline,
		BlockQuote,
		Font,
		Highlight,
		Heading,
		Image,
		ImageCaption,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		ImageResizeEditing,
		ImageResizeHandles,
		SimpleUploadAdapter,
		Indent,
		Link,
		AutoLink,
		List,
		ListProperties,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		Table,
		TableCellProperties,
		TableProperties,
		TableColumnResize,
		TableToolbar,
		TextTransformation
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo', 'redo',
				'|', 'fontSize', 'fontColor', 'fontBackgroundColor',
				'|', 'uploadImage', 'mediaEmbed', 'link',
				'|', 'insertTable', 'bulletedList', 'numberedList',
				'|', 'alignment', 'outdent', 'outdent',
				'|', 'bold', 'italic', 'underline',
				// 'undo', 'redo',
				// '|', 'fontSize', 'fontColor', 'fontBackgroundColor',
				// '|', 'uploadImage', 'mediaEmbed', 'fontBackgroundColor',
				// '|', 'heading',
				// '|', 'bold', 'italic',
				// '|', 'link', 'uploadImage', 'insertTable', 'blockQuote', 'mediaEmbed',
				// '|', 'bulletedList', 'numberedList', 'outdent', 'indent',
				// '|', 'fontSize', 'fontColor', 'fontBackgroundColor', 'highlight',
			]
		},
		image: {
			toolbar: [
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'|',
				'toggleImageCaption',
				'imageTextAlternative'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableProperties',
				'tableCellProperties'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'ko'
	};
}

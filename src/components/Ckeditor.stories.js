import React from 'react'
import Ckeditor from './Ckeditor'
import { CKEditor } from 'ckeditor4-react'
export default {
    title: 'Ckeditor',
    component: Ckeditor
}
const Template = args => <CKEditor {...args} />

export const CKEditor4 = Template.bind({})
CKEditor4.args = {
    color: "#fff",
    className: "ckeditor4",
    initData: "sdfnjhasdf",
    config: {
        toolbar: [
            ["Bold", "Italic", "Strike Through"],
        ],
    }
}

export const CKEditor5 = Template.bind({})
CKEditor5.args = {
    color: "#000",
    className: "ckeditor5",
    initData: "Additionally, you can also provide additional feature flags to your Storybook configuration. Below is an abridged list of available features that are currently available.",
    config:{
        toolbar: [
            ["Bold", "Italic", "Strike Through"],
            [
                "Cut",
                "Copy",
                "Paste",
                "Pasteasplaintext",
                "FormattingStyles",
                "Undo",
                "Redo"
            ],
            ["List", "Indent", "Blocks", "Align", "Bidi", "Paragraph"],
            ["Find", "Selection", "Spellchecker", "Editing"]
        ]
    }
}

export const CKEditor6 = Template.bind({})
CKEditor6.args = {
    color: "purple",
    initData: "Additionally, you can also provide additional feature flags to your Storybook configuration. Below is an abridged list of available features that are currently available.",
    className: "ckeditor5",
    config: {
        toolbar: [
            ["Bold", "Italic", "Strike Through"],
            [
                "Cut",
                "Copy",
                "Paste",
                "Pasteasplaintext",
                "FormattingStyles",
                "Undo",
                "Redo"
            ],
            ["List", "Indent", "Blocks", "Align", "Bidi", "Paragraph"],
        ],
    }
}



// export const CKEditor1 = () => <CKEditor . initData={"hoo"} config={{
//     toolbar: [
//         ["Bold", "Italic", "Strike Through"],
//     ]
// }} />

// export const CKEditor2 = () => <CKEditor config={{
//     toolbar: [
//         ["Bold", "Italic", "Strike Through"],
//         [
//             "Cut",
//             "Copy",
//             "Paste",
//             "Pasteasplaintext",
//             "FormattingStyles",
//             "Undo",
//             "Redo"
//         ],
//         ["List", "Indent", "Blocks", "Align", "Bidi", "Paragraph"],
//         ["Find", "Selection", "Spellchecker", "Editing"]
//     ]
// }}
// />
// export const CKEditor3 = () => <CKEditor initData={"😀 😎 👍 💯"} />

// const Template = args =>
//     <>
//         <CKEditor {...args} config={{
//             toolbar: [
//                 ["Bold", "Italic", "Strike Through"],
//                 [
//                     "Cut",
//                     "Copy",
//                     "Paste",
//                     "Pasteasplaintext",
//                     "FormattingStyles",
//                     "Undo",
//                     "Redo"
//                 ],
//                 ["List", "Indent", "Blocks", "Align", "Bidi", "Paragraph"],
//                 ["Find", "Selection", "Spellchecker", "Editing"]
//             ]
//         }} />
//     </>

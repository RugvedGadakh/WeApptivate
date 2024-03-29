import {
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE
} from "@udecode/plate-code-block"
import { getParentNode, isElement, isType } from "@udecode/plate-common"
import { toggleList, unwrapList } from "@udecode/plate-list"

export const preFormat = editor => unwrapList(editor)

export const format = (editor, customFormatting) => {
  if (editor.selection) {
    const parentEntry = getParentNode(editor, editor.selection)
    if (!parentEntry) return
    const [node] = parentEntry
    if (
      isElement(node) &&
      !isType(editor, node, ELEMENT_CODE_BLOCK) &&
      !isType(editor, node, ELEMENT_CODE_LINE)
    ) {
      customFormatting()
    }
  }
}

export const formatList = (editor, elementType) => {
  format(editor, () =>
    toggleList(editor, {
      type: elementType
    })
  )
}

export const formatText = (editor, text) => {
  format(editor, () => editor.insertText(text))
}

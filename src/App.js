"use client"

// import { createPlateUI } from "@/plate/create-plate-ui"
import { createBasicElementsPlugin } from "@udecode/plate-basic-elements"
import { createBasicMarksPlugin } from "@udecode/plate-basic-marks"
import { createPlugins, Plate } from "@udecode/plate-common"

import { Editor } from "./components/plate-ui/editor"
import { FloatingToolbar } from "./components/plate-ui/floating-toolbar"
import { FloatingToolbarButtons } from "./components/plate-ui/floating-toolbar-buttons"



function App() {
  const plugins = createPlugins(
    [
      createParagraphPlugin(),
      createHeadingPlugin(),
      createBlockquotePlugin(),
      createCodeBlockPlugin(),
      createHorizontalRulePlugin(),
      createLinkPlugin({
        renderAfterEditable: LinkFloatingToolbar
      }),
      createImagePlugin(),
      createMediaEmbedPlugin(),
      createCaptionPlugin({
        options: {
          pluginKeys: [
            // ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED
          ]
        }
      }),
      createMentionPlugin(),
      createTablePlugin(),
      createTodoListPlugin(),
      createExcalidrawPlugin(),
      createBoldPlugin(),
      createItalicPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createCodePlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createFontColorPlugin(),
      createFontBackgroundColorPlugin(),
      createFontSizePlugin(),
      createHighlightPlugin(),
      createKbdPlugin(),
      createAlignPlugin({
        inject: {
          props: {
            validTypes: [
              ELEMENT_PARAGRAPH
              // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
            ]
          }
        }
      }),
      createIndentPlugin({
        inject: {
          props: {
            validTypes: [
              ELEMENT_PARAGRAPH
              // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK
            ]
          }
        }
      }),
      createIndentListPlugin({
        inject: {
          props: {
            validTypes: [
              ELEMENT_PARAGRAPH
              // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK
            ]
          }
        }
      }),
      createLineHeightPlugin({
        inject: {
          props: {
            defaultNodeValue: 1.5,
            validNodeValues: [1, 1.2, 1.5, 2, 3],
            validTypes: [
              ELEMENT_PARAGRAPH
              // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
            ]
          }
        }
      }),
      createComboboxPlugin(),
      createDndPlugin({
        options: { enableScroller: true }
      }),
      createEmojiPlugin({
        renderAfterEditable: EmojiCombobox
      }),
      createExitBreakPlugin({
        options: {
          rules: [
            {
              hotkey: "mod+enter"
            },
            {
              hotkey: "mod+shift+enter",
              before: true
            },
            {
              hotkey: "enter",
              query: {
                start: true,
                end: true
                // allow: KEYS_HEADING,
              },
              relative: true,
              level: 1
            }
          ]
        }
      }),
      createNodeIdPlugin(),
      createResetNodePlugin({
        options: {
          rules: [
            // Usage: https://platejs.org/docs/reset-node
          ]
        }
      }),
      createSelectOnBackspacePlugin({
        options: {
          query: {
            allow: [
              // ELEMENT_IMAGE, ELEMENT_HR
            ]
          }
        }
      }),
      createDeletePlugin(),
      createSoftBreakPlugin({
        options: {
          rules: [
            { hotkey: "shift+enter" },
            {
              hotkey: "enter",
              query: {
                allow: [
                  // ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD
                ]
              }
            }
          ]
        }
      }),
      createTabbablePlugin(),
      createTrailingBlockPlugin({
        options: { type: ELEMENT_PARAGRAPH }
      }),
      createCommentsPlugin(),
      createAutoformatPlugin({
        options: {
          rules: [
            // Usage: https://platejs.org/docs/autoformat
          ],
          enableUndoOnDelete: true
        }
      }),
      createBlockSelectionPlugin({
        options: {
          sizes: {
            top: 0,
            bottom: 0
          }
        }
      }),
      createDeserializeDocxPlugin(),
      createDeserializeCsvPlugin(),
      createDeserializeMdPlugin(),
      createJuicePlugin()
    ],
    {
      components: withDraggables(
        withPlaceholders({
          [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
          [ELEMENT_CODE_BLOCK]: CodeBlockElement,
          [ELEMENT_CODE_LINE]: CodeLineElement,
          [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
          [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
          [ELEMENT_HR]: HrElement,
          [ELEMENT_IMAGE]: ImageElement,
          [ELEMENT_LINK]: LinkElement,
          [ELEMENT_H1]: withProps(HeadingElement, { variant: "h1" }),
          [ELEMENT_H2]: withProps(HeadingElement, { variant: "h2" }),
          [ELEMENT_H3]: withProps(HeadingElement, { variant: "h3" }),
          [ELEMENT_H4]: withProps(HeadingElement, { variant: "h4" }),
          [ELEMENT_H5]: withProps(HeadingElement, { variant: "h5" }),
          [ELEMENT_H6]: withProps(HeadingElement, { variant: "h6" }),
          [ELEMENT_MEDIA_EMBED]: MediaEmbedElement,
          [ELEMENT_MENTION]: MentionElement,
          [ELEMENT_MENTION_INPUT]: MentionInputElement,
          [ELEMENT_PARAGRAPH]: ParagraphElement,
          [ELEMENT_TABLE]: TableElement,
          [ELEMENT_TR]: TableRowElement,
          [ELEMENT_TD]: TableCellElement,
          [ELEMENT_TH]: TableCellHeaderElement,
          [ELEMENT_TODO_LI]: TodoListElement,
          [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
          [MARK_CODE]: CodeLeaf,
          [MARK_COMMENT]: CommentLeaf,
          [MARK_HIGHLIGHT]: HighlightLeaf,
          [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
          [MARK_KBD]: KbdLeaf,
          [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
          [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: "sub" }),
          [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: "sup" }),
          [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" })
        })
      )
    }
  )

  const initialValue = [
    {
      id: '1',
      type: 'p',
      children: [{ text: 'Hello, World!' }],
    },
  ];
  

  return (
    <div className="mt-[72px] p-10">
      <h1>hello</h1>
      <Plate plugins={plugins}>
        
        <Editor placeholder="Type your message here." />

        <FloatingToolbar>
          <FloatingToolbarButtons />
        </FloatingToolbar>
      </Plate>
    </div>
  )
}

export default App;
"use client"
import React from "react"
import { useEditorRef } from "@udecode/plate-common"

const buttonStyle = {
  marginRight: 4,
  background: "#f0f0f0",
  border: "none",
  padding: 8,
  cursor: "pointer"
}

export function CloudToolbarButtons() {
  const editor = useEditorRef()
  const getSaveValue = () => {
    console.info("editor.children", editor.children)
    console.info("editor.cloud.getSaveValue()", editor.cloud.getSaveValue())
  }

  const finishUploads = async () => {
    await editor.cloud.finishUploads()
  }

  return (
    <>
      <button type="button" style={buttonStyle} onClick={getSaveValue}>
        Get Save Value
      </button>
      <button type="button" style={buttonStyle} onClick={finishUploads}>
        Await Finish Uploads
      </button>
      <span>
        Note: After clicking a button, output will be shown in console.
      </span>
    </>
  )
}

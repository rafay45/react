import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'

export default function RTE({label, name, control, defaultValue = "" }) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'></label>}
      <Controller
        name={name || 'content'}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            apiKey='x7qk0nj5brdi5ipa35705d7rvomzltptlo8c3bfpc3l400n2'
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  )
}

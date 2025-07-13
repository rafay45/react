import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react'

export default function RTE({name, control, label, defaultValue = ""}) {
  return (
    <div>
        {label && <label className=''></label>}
         <Controller
         name= {name || 'content'}
         control={control}
         rules={{required: true}}
         render={({field: {onChange}}) => (
                <Editor 
                initialValue={defaultValue}
                />
         ) }
          />
    </div>
  )
}

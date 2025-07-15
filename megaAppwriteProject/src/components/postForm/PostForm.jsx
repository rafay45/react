import {Button, Input, Select, RTE } from '../index'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'

function PostForm({post}) {
  const {register, handleSubmit, watch, setValue, getValues} = useForm({
    defaultValues:{
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      status: post?.status || 'active'

    }
  })
  return (
    <div>PostForm</div>
  )
}

export default PostForm
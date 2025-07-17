import { Button, Input, Select, RTE } from '../index'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useCallback, useEffect } from 'react'
import services from '../../services/service'

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      status: post?.status || 'active'
    }
  })
  const navigate = useNavigate()
  const userData = useSelector(state => state.user.userData)
  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? services.uploadFile(data.image[0]) : null
      if (file) {
        services.deleteFile(post.featuredImage)
      }
      const updatePost = await services.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      })
      if (updatePost) {
        navigate(`/post/${post.$id}`)
      }
    } else {
      const file = services.uploadFile(data.image[0])
      if (file) {
        const fileId = file.$id
        data.featuredImage = fileId
        const create = await services.createPost({
          ...data,
          userId: userData.$id
        })
        if (create) {
          navigate(`/post/${post.$id}`)
        }
      }
    }
  }

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string') {
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, '-')
        .replace(/\s/g, '-')
        return ''
    }
  }, [])

  useEffect(() => {
    const subscription = watch((value, {name}) => {
          if(name === 'title'){
            setValue('slug', slugTransform(value.title, {shouldValidate: true}))
          }
    })
    return () => {
      subscription.unsubscribe()
    }
  },[watch, slugTransform, setValue])
  return (
    <div>PostForm</div>
  )
}

export default PostForm
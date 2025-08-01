import { Button, Input, Select, RTE } from '../index'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useCallback, useEffect } from 'react'
import services from '../../services/service'

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      status: post?.status || 'active'
    }
  })
  const navigate = useNavigate()
  const userData = useSelector(state => state.authentication.userData)
  console.log("User From Redux ", userData);


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
        const create = await services.createPost({ ...data, userId: userData.$id })
        if (create) {
          navigate(`/post/${create.$id}`)
        }
      }
    }
  }

  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string') 
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, '-')
        .replace(/\s/g, '-')

      return ''
  }, [])

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title, { shouldValidate: true }))
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [watch, slugTransform, setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full cursor-pointer">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  )
}

export default PostForm
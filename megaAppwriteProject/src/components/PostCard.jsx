import service from '../services/service'
import { Link } from 'react-router-dom'
function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full'>
            <div
            className='w-fulll p-4 border-2 rounded'
            >
                <img
                className=' rounded'
                 src={service.getFilePreview(featuredImage)} alt={title} />
            </div>
            <h1>{title}</h1>
        </div>
    </Link>
  )
}

export default PostCard
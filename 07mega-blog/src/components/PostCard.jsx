import React from 'react'
import appwriteService from '../appwrite/config' // information ke liye 
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}> // yaha pe $id variale ka naam hai
            <div>
                <div>
                    <img src={appwriteService.getfilePreview(featuredImage)} alt={title}
                        className='rounded-xl' />
                </div>
                <h2>{title}</h2>
            </div>
        </Link>
    )
}
export default PostCard

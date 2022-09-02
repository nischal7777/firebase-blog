import { deleteDoc, getDocs, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { db } from '../firebase';
import { collection } from 'firebase/firestore';

const Home = ({ isAuth }) => {
    const [postLists, setPostList] = useState([])
    const postsCollectionRef = collection(db, 'posts');


    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            const postData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setPostList(postData)
        }
        getPosts()
    }, []);

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id)
        await deleteDoc(postDoc)
    }
    return (
        <>
            <div className='homePage'>{postLists.map((post) => {
                console.log(post)
                return <div className='post' key={post.id}>
                    <div className='postHeader'>
                        <div className='title'>
                            <h1>{post.title}</h1>
                        </div>
                        <div className='deletePost'>
                            {isAuth && post.author && post.author.id === auth.currentUser.uid && (<button onClick={() => { deletePost(post.id) }}> &#128465;</button>)}
                        </div>

                    </div>
                    <div className='postTextContainer'>
                        {post.postText}
                    </div>
                    <h3>@{post.author && post.author.name}</h3>
                </div>
            })}
            </div>
        </>
    )
}

export default Home;

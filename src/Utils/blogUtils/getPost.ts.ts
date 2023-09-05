import {butter} from './buttercms'


export async function getPost(slug: string) {
    try{
        const post = await butter.post.retrieve(slug)
        if (!post || !post.data || !post.data.data) throw new Error("No post found")
        return post.data.data
    }catch(e){
        console.log(e)
    }
}

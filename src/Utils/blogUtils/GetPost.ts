import {client} from './sdk'


export const GetPost = async (slug: string) => {
    try{
        const entry = await client.getEntry('1SXmAwNTbba58d7xh6K6QX')
        console.log(entry)
        return entry
    } catch(e){
        console.log(e)
    }
    return null
}

import Butter, { ButterStatic } from 'buttercms';

const api_key = process.env.BUTTER_CMS || 'YOUR_API_KEY'

export let butter: ButterStatic
try{
    console.log(api_key)
    butter = Butter(api_key)
    console.log(butter)
} catch (e) {
    console.log(e)
}

export default async function Page({params}: {params: {
    id: string
    slug: string
}}) {
    const {id, slug} = await params
    console.log(id, decodeURI(slug));
    
    return null
}
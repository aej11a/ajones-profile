import fs from 'fs'
import path from 'path'

export default (req, res) => {
    const posts = getBlogPostKeys()
    res.statusCode = 200
    res.json(posts);
}

export const getBlogPostKeys = () => {
    const dir = path.resolve('./blog_posts');
    const filenames = fs.readdirSync(dir);
    return filenames.map(name => name.replace(/\.(.*)/, ''))
}
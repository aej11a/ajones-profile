import fs from 'fs'
import path from 'path'

export default (req, res) => {
    const { key } = req.query
    const content = getFileContent(key)
    res.statusCode = 200
    res.json({content});
}

export const getFileContent = (filename) => {
    const filepath = path.resolve(`./blog_posts/${filename}.md`);
 
    return fs.readFileSync(filepath, 'utf8');
}
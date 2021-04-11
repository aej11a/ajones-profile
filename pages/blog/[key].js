 import { getBlogPostKeys } from '../api/getBlogPostKeys'
 import { getFileContent } from '../api/getBlogPost/[key]'
 import ReactMarkdown from 'react-markdown/with-html'

 export async function getStaticPaths() {
        const keys = getBlogPostKeys()
        return {
          paths: keys.map(key => `/blog/${key}`),
          fallback: false
        };
 }

 export async function getStaticProps(context) {

    const post_content = getFileContent(context.params.key)

    return {
      props: { 
          post_content
        }
    }
  }

  export default function Post({post_content}) {
      return (<ReactMarkdown>{post_content}</ReactMarkdown>)
  }
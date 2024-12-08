import { timeElapsed } from "./TimeElapsed"

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string, 
    createdOn: string
}

export default function BlogCard({ authorName, title, content, createdOn }: BlogCardProps) {
    const readTime = Math.floor(content.split(" ").length/60)

    return <div className="border p-10 border-slate-950 py-6 hover:bg-white bg-transparent">
        <div className="text-sm text-gray-700 flex items-center space-x-2">
         <DatePublished createdOn={createdOn}/>
         <span className="text-gray-500">({timeElapsed(createdOn)})</span>
        </div>
      <div className="lg:grid grid-cols-2">
        <div>
            <h2 className="text-xl py-2 leading-tight font-bold pr-8 hover:underline text-gray-800 mt-2 text-pretty border-slate-950">
              {title}
            </h2>
            <div className="flex items-center text-sm text-gray-600 mt-2">
            <div className="flex items-center space-x-2">
            <Avatar size={12} authorName={authorName}/>
            <span>By {authorName.toUpperCase()}</span>
            </div>
            <span className="mx-2">•</span>
            <span>{readTime} min read</span>
        </div>
        </div>

        <p className="text-black text-pretty text-sm mt-4 lg:px-20 leading-relaxed">{contentPreview(content)}</p>
    </div>
    </div>
    
}

export const Avatar = ({ authorName, size}: { authorName: string, size: number }) => {
    const getRandomPastelColor = () => {
      const hue = Math.floor(Math.random() * 360)
      return `hsl(${hue}, 70%, 85%)`
    }
  
    const avatarStyle = {
      backgroundColor: getRandomPastelColor(),
      // width: `${size}px`,
      // height: `${size}px`,
    }
  
    return (
      <div
        className={`w-${size} h-${size} flex items-center justify-center rounded-full text-white text-lg font-bold`}
        style={avatarStyle}
      >
        {authorName.charAt(0).toUpperCase()}
      </div>
    )
  }
  
  
  const contentPreview = (content: string) => {
        const sentences = content.split('.').filter(Boolean)
        const truncated = sentences.slice(0, 3).join('. ').slice(0, 150) + "..."
        return truncated.trim()
      }


  const DatePublished = ({ createdOn }: {createdOn: string}) => {
      return <div className="space-x-2"> 
            <span>{new Date(createdOn).toLocaleString("en-US", { month: "long" })}</span>
            <span>{new Date(createdOn).getDate()},</span>
            <span>{new Date(createdOn).getFullYear()}</span>
          </div>
  }
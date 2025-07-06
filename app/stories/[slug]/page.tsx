import { notFound } from 'next/navigation'

interface StoryPageProps {
  params: {
    slug: string
  }
}

// Mock data - in a real app, this would come from a database or CMS
const stories = {
  'project-1': {
    title: 'Amazing Project 1',
    content: 'This is the full story of our amazing project that revolutionized the industry...',
    author: 'John Doe',
    date: '2024-01-15',
    tags: ['React', 'TypeScript', 'Next.js'],
    image: '/images/project1.jpg'
  },
  'project-2': {
    title: 'Innovative Solution',
    content: 'How we solved complex problems with elegant solutions...',
    author: 'Jane Smith',
    date: '2024-01-10',
    tags: ['AI', 'Machine Learning', 'Python'],
    image: '/images/project2.jpg'
  },
  'project-3': {
    title: 'Creative Design',
    content: 'The journey of creating beautiful and functional design...',
    author: 'Mike Johnson',
    date: '2024-01-05',
    tags: ['Design', 'UI/UX', 'Figma'],
    image: '/images/project3.jpg'
  }
}

export default function StoryPage({ params }: StoryPageProps) {
  const story = stories[params.slug as keyof typeof stories]

  if (!story) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{story.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <span>By {story.author}</span>
          <span>•</span>
          <span>{new Date(story.date).toLocaleDateString()}</span>
        </div>
        <div className="flex gap-2 mb-6">
          {story.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {story.image && (
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p>{story.content}</p>
        <p>This is where the full story content would go. In a real application, this would be much longer and could include multiple paragraphs, images, code snippets, and other rich content.</p>
        <p>The story continues with more details about the project, challenges faced, solutions implemented, and lessons learned.</p>
      </div>
    </article>
  )
} 
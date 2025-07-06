import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: 'Amazing Project 1',
      description: 'A revolutionary project that changes everything',
      image: '/images/project1.jpg',
      tags: ['React', 'TypeScript', 'Next.js'],
      link: '/stories/project-1'
    },
    {
      id: 2,
      title: 'Innovative Solution',
      description: 'Solving complex problems with elegant solutions',
      image: '/images/project2.jpg',
      tags: ['AI', 'Machine Learning', 'Python'],
      link: '/stories/project-2'
    },
    {
      id: 3,
      title: 'Creative Design',
      description: 'Beautiful and functional design that inspires',
      image: '/images/project3.jpg',
      tags: ['Design', 'UI/UX', 'Figma'],
      link: '/stories/project-3'
    }
  ]

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
} 
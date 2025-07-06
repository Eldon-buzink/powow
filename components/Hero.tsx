import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Share Your
            <span className="block text-primary-200">Amazing Stories</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-100">
            Connect with creators, discover innovative projects, and inspire others with your journey. 
            Join our community of storytellers and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/stories"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Explore Stories
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-200">500+</div>
            <div className="text-primary-100">Stories Shared</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-200">10K+</div>
            <div className="text-primary-100">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-200">50+</div>
            <div className="text-primary-100">Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
} 
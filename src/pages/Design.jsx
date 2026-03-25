import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { designData } from '@/data/designData'
import { X, ArrowLeft } from 'lucide-react'

export default function Design() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = selectedCategory === 'all'
    ? designData.projects
    : designData.projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="page-hero">
        <img src="/src/assets/images/Hero/herobanner.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48 relative z-10 h-full flex flex-col justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Design Work
          </h1>
          <p className="text-slate-300 text-lg">
            Explore our portfolio of creative design projects
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Work
            </button>
            {designData.categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden rounded-lg bg-slate-100 aspect-square hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end p-4 md:p-6">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg md:text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-slate-200">{project.description}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {designData.categories.find(c => c.id === project.category)?.name}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No projects found in this category</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <p className="text-blue-100 text-sm mt-1">{selectedProject.year}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-blue-500 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              {/* Project Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                    Category
                  </h3>
                  <p className="text-lg text-slate-900">
                    {designData.categories.find(c => c.id === selectedProject.category)?.name}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                    Description
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-2">
                    Year
                  </h3>
                  <p className="text-lg text-slate-900">{selectedProject.year}</p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-slate-600 text-sm">
                    This project showcases our expertise in {designData.categories.find(c => c.id === selectedProject.category)?.description.toLowerCase()}.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}











import React from 'react'

const ProjectCard = ({ title, description, tags, link, linkText }) => (
  <div className="bg-white shadow rounded p-6 text-left">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-2">{description}</p>
    <div className="flex flex-wrap gap-2 mb-2">
      {tags.map((tag, idx) => (
        <span key={idx} className="bg-green-100 px-3 py-1 rounded">{tag}</span>
      ))}
    </div>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        {linkText}
      </a>
    )}
  </div>
);

export default ProjectCard;
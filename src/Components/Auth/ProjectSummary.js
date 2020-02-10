import React from 'react'

function ProjectSummary({projects}) {
    return (
        <div className="project-list">
            {
                (projects && projects.map((project) => {
                    return(
                        <h1 key={project.id}>{project.title}</h1>
                    )
                }))
            }
        </div>
    )
}
export default ProjectSummary
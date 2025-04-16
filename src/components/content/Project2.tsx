import React from 'react';
import {Projects} from '@interfaces/common';

interface ProjectProps {
    project:Projects;
}

const Project: React.FC<ProjectProps> = ({project}) => {
    const {img,alt,title,description} = project;
    return (
        <>
            <img className="project__img" src={img} alt={alt} />
            <div className="project__metadata">
                <h3 className="project__metadata__title">{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
}

export default Project;
import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  onDeleteProject(id){
    this.props.onDelete(id);
  }
render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.onDeleteProject.bind(this)} key={project.title} project= {project}/>
        );
      });
    }
    console.log(this.props);
    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;

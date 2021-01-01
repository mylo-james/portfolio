import ProjectItemSty from './ProjectItemSty';
function ProjectItem({ data }) {
    return (
        <ProjectItemSty>
            <div>{data.title}</div>
        </ProjectItemSty>
    );
}

export default ProjectItem;

import NodeInfoSty from './NodeInfoSty';

function NodeInfo({ data: { id, year, title, content } }) {
    return (
        <NodeInfoSty>
            <div>{year}</div>
            <div className='title'>{title}</div>
            <div className='content'>{content}</div>
            <div className='line' />
        </NodeInfoSty>
    );
}

export default NodeInfo;

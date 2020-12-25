import NodeInfoSty from './NodeInfoSty';

function NodeInfo({ data: { id, year, title, content } }) {
    return (
        <NodeInfoSty>
            <div>{year}</div>
            <div>{title}</div>
            <div>{content}</div>
            <div className='line' />
        </NodeInfoSty>
    );
}

export default NodeInfo;

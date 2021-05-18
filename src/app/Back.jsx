const domain = document.location.host

export const Back = (props) => (
    <div style={{ position: 'absolute', top: 10, left: 10 }}>
        <a href={`http://${domain}${props.to}`}>Back</a>
    </div>
)
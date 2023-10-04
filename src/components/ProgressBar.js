import './ProgressBar.css'

function ProgressBar(props) {
    return (
        <div className='progress'>
            <b>Open </b> {props.current}
            <b>Done </b> {props.done}
        </div>
    )
}

export default ProgressBar;
import { Row, Spinner } from "react-bootstrap"

const CustomSpinner = () => {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '50%',
        marginTop: '5rem'
    }

  return (
    <Row style={styles}>
        <Spinner animation='border' size='lg' variant='#00001c' style={{ width: '5rem', height: '5rem' }}/>
    </Row>
  )
}

export default CustomSpinner
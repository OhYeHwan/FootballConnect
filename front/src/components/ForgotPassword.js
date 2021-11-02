import { Form, Button, Card, Alert,Container } from 'react-bootstrap';
import {useRef, useState} from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions')

        } catch(e) {
            setError('Failed to reset password')
        }

        setLoading(false)
    }

    return (
        <>
            <Container
            className="d-flex align-items-center justify-content-center" style={{maxWidth:"500px"}}>
                <Card className="w-100 mt-3">
                    <Card.Body>
                        <h2 className="text-center mb-4">Password Reset</h2>
                        
                        {error &&  <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required></Form.Control>
                            </Form.Group>
                            <Button disabled={loading} className="w-100 mt-4" type="submit">Reset Password</Button>
                        </Form>
                        <div className="w-100 text-center mt-3">
                            <Link to="/login">Login</Link>
                        </div>
                    </Card.Body>
                </Card>
                
            </Container>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
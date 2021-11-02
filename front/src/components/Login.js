import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import {useRef, useState} from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');

        } catch(e) {
            setError('Failed to login')
        }

        setLoading(false)
    }

    return (
        <>
            <Container
            className="d-flex align-items-center justify-content-center" style={{maxWidth:"400px"}}>
                <Card className="w-100 h-100 mt-2">
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        
                        {error &&  <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required></Form.Control>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required></Form.Control>
                            </Form.Group>
                            <Button disabled={loading} className="w-100 mt-4" type="submit">Log In</Button>
                        </Form>
                        <div className="w-100 text-center mt-3">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </Card.Body>
                </Card>
            
            </Container>
            <div className="text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
            
        </>
    )
}
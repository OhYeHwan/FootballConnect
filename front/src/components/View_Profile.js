import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useHistory, Link } from "react-router-dom";
import { Card, Button, Alert, Container } from "react-bootstrap";

const ViewProfile = () => {
    const [error, setError] = useState('');
    const {user, logout} = useAuth();
    const history = useHistory();
    const handlelogout = async () => {
        setError('')
        try{            
            await logout();
            history.push('/login')
        }catch{
            setError('Failed to log out');
        }
    }

    return ( 
        <>
            <Container
             style={{maxWidth:"500px"}}>
            <Card className="w-100 mt-2">
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {user && <div><strong> Email: </strong> {user.email}</div>}

                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link> 
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handlelogout}>Log Out</Button>
            </div>
            </Container>
            
        </>
     );
}
 
export default ViewProfile;
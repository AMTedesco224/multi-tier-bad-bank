function Login(){
    const [userEmail, setUserEmail] = React.useState('');
    const [disabled, setDisabled] = React.useState(true)
    const [userPassword, setUserPassword] = React.useState('');
    const [login, setLogin] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const ctx = React.useContext(UserContext);

    function logoutSubmit() {
        
            ctx.users[i].current = false;     
            //  Validates user info and changes current log in status to false
            if(ctx.users[i].email == userEmail){
                setStatus('');
                ctx.users[i].current = false;
                setLogin(false);
            }
        };
    }
    logoutSubmit()
        return (
            <Card
              bgcolor="primary"
              header="Log Out"
              status={status}
              body={ 
                <h5>You are now logged out</h5>
              }
            />
            
        )

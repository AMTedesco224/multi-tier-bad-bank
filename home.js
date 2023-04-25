function Home(){

    return(
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="Bad-Bank Landing Page"
        title="Welcome to Bad-Bank"
        body="This is an app I created for my MIT xPro coding bootcamp. Create an account and log in to use this app! You can deposit and withdraw money plus you can track all of your transaction data using this app."
        text={(<img src="icon.png" className="img-fluid" alt="Responsive Image" />)}
         />
    )
}
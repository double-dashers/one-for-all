import React from 'react';
import { createUseStyles } from 'react-jss';
import { Grid, Button, Message, Image, Form, Segment, Header } from 'semantic-ui-react';

const useStyles = createUseStyles({
  mainGrid: {
    height: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formCol: {
    maxWidth: '450px',
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid textAlign="center" className={classes.mainGrid} verticalAlign="middle">
        <Grid.Column className={classes.formCol}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="https://react.semantic-ui.com/logo.png" /> Log-in to your account
          </Header>
          <Form size="large">
            <Segment>
              <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href="noref">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;

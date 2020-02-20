import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const UserSettings = () => {
  return (
    <Form>
      <Form.Field>
        <label>Full Name</label>
        <input placeholder="Arturo Avelino" />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input placeholder="avelino@gmail.com" />
      </Form.Field>
      <Form.Field>
        <label>Change Password</label>
        <input placeholder="" />
      </Form.Field>
      <Form.TextArea label="User Details" placeholder=" " />
      <Button color="blue" type="submit">
        Update Profile
      </Button>
      <Button type="submit">Cancel</Button>
    </Form>
  );
};

export default UserSettings;

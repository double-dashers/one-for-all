import React from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';

const AddGameForm = () => {
  return (
    <Form>
      <Form.Field>
        <label htmlFor="fname">
          First Name <input name="fname" placeholder="First Name" />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="lname">
          First Name <input name="lname" placeholder="Las Name" />
        </label>
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default AddGameForm;

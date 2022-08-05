/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormUser } from '../components/Form';

describe('rendering and submitting a basic Formik form', () => {
  it("Success", async () => {
    const handleSubmit = jest.fn()
    const formComponent = render(<FormUser handleSubmit={handleSubmit} />);

    const email = formComponent.getByTestId('email');
    const submitButton = formComponent.getByTestId('submit_form_button')

    userEvent.type(email, "otaviohelmsv@gmail.com");

    userEvent.click(submitButton);
  });

});

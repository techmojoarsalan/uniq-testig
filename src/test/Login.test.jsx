import { test, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Component/Login"

// npm test
//ARSALAN KHAN
test('email testing', () => {
    render(<Login />)
    const email = screen.getByPlaceholderText("Email");
    expect(email).toBeDefined();
    fireEvent.change(email, { target: { value: 'test@gmail.com' } });

})


test('password-testing', () => {
    const password = screen.getByPlaceholderText("Password")
    expect(password).toBeDefined();
    fireEvent.change(password, { target: { value: "test@123" } })
})

test('button-testing', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
})
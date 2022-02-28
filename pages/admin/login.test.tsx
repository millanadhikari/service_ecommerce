import React from "react";
import { render, screen,  fireEvent } from "@testing-library/react";
import Login from '../../'

// functio3n renderLoginForm() {
//     const defaultProps = {
//         handleChange(e) { 
//             return
//         },
//         handleLogin(e) {
//             return 
//         }
//     }
//     return render(<LoginForm/>)
// }

describe('Login Form', () => {
    
    const onSubmit = jest.fn();
    beforeEach(() => {
        onSubmit.mockClear()
        render(<Login/>)
    })

    // it("should render",  () => {
    //     const email = screen.getByRole("input", {
    //         name:"email"
    //     })
    // expect(email).toContain('email')
    // })
    
})
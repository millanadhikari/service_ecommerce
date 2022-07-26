import { Box, Heading, Stack, Input, Button } from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../Admin/app/hooks";
import { passwordChangeFail, passwordChangePending, passwordChangeSuccess } from "../Admin/user/userSlice";
import {getChangePassword} from '../Admin/user/userAction'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const {isLoading} = useAppSelector((state) => state.user)
  const dispatch = useDispatch();

    const handleClick = async() => {
        if(!oldPassword || !newPassword || !confirmPassword) { 
            return alert("Please fill up the required fields.")
        }
        const passObj = {
            oldPassword,
            newPassword,
            confirmPassword
        }
        dispatch(passwordChangePending())

        try {
            const send:any = await getChangePassword(passObj)
            if(send.status === "error") {
                dispatch(passwordChangeFail(send.error))
                 }
                 dispatch(passwordChangeSuccess())

        } catch(error) {
            dispatch(passwordChangeFail(error))
        }
    }
    return (
        <Box h="60vh" mx={{ md: "auto" }}>
                  <Heading fontSize="24px" textAlign="center">
            Change Your Password
            </Heading>
            <Stack my="6">
            <Input w={{md:"40%"}} value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder='Old Password*' />
            <Input w={{md:"40%"}}  value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='New Password*' />
            <Input w={{md:"40%"}}  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm PasswordNew Password*' />
                       </Stack>
                       <Button colorScheme="blue" disabled={isLoading} onClick={handleClick}>{isLoading ? 'Loading' : 'Update'}</Button>
        </Box>
    )
}

export default ChangePassword
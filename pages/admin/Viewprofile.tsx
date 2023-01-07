import { useEffect } from "react";
import {
  Image,
  Box,
  Flex,
  Icon,
  Text,
  Input,
  Progress,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { useAppSelector } from "../../components/Admin/app/hooks";
import SubNav from "../../components/Admin/Jobs/subcomponents/SubNav";
import ProfileInfo from "../../components/Admin/Profile/ProfileInfo";
import storage from "../../firebaseConfig";
import { fetchUser, userLogout } from "../../components/Admin/api/userApi";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../components/Admin/user/userAction";
import { updateDetails } from "../../components/CustomerPortal/api/portalApi";
import { useRouter } from "next/router";

const ViewProfile = () => {
  const sidebarOpen =
    useAppSelector((state) => state.user.sidebarOpen) || undefined;
  const user = useAppSelector((state) => state.user.user);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");
  const [display, setDisplay] = useState({});
  const dispatch = useDispatch();
  const router = useRouter()
  let ok = user._id;

  const editProfile = () => {
    updateDetails(ok, display);
    dispatch(getUserProfile());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/profilePic/${file.name}`);
    const deleteRef = ref(storage, user.profilePic?.src);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          setImgUrl(downloadURL);
          user?.profilePic.src !== ""
            ? deleteObject(deleteRef).then(async () => {
                await axios.put(
                  `http://localhost:3001/v1/customer/${user._id}`,
                  {
                    profilePic: {
                      src: downloadURL,
                    },
                  }
                );
                setSelectedFile(undefined);
                dispatch(getUserProfile());
              })
            : await axios.put(`http://localhost:3001/v1/customer/${user._id}`, {
                profilePic: {
                  src: downloadURL,
                },
              });
          setSelectedFile(undefined);
          dispatch(getUserProfile());
        });
      }
    );
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    setDisplay(user);
  }, [user]);
  return (
    <Box
      pl={{ base: 0, md: sidebarOpen ? "320px" : "115px" }}
      backgroundColor="gray.100"
      fontFamily="sans-serif"
      w="100%"
      h="100%"
    >
      <SubNav />
      <Flex
        alignItems="left"
        cursor="pointer"
        position="relative"
        flexDir="column"
        backgroundColor="gray.100"
        _hover={{ color: "gray.600" }}
        mt={5}
        px={5}
        pb={4}

        // onClick={() => router.push("/admin/quotes")}
      >
        {/* <Icon as={MdArrowBackIosNew} /> */}
        <Text fontWeight="semibold" fontSize="19" color="blue.700">
          My Profile{" "}
        </Text>

        <Text fontWeight="semibold" my={4} fontSize="16" color="blue.700">
          Profile Picture
        </Text>
        <Image
          src={
            selectedFile
              ? preview
              : !user.profilePic?.src
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0iCpiWXk0d2jGf57Uskp8MVgYJBrYK-f3w&usqp=CAU"
              : user.profilePic?.src
          }
          alt=""
          height="90px"
          border="2px solid blue"
          objectFit={"cover"}
          borderColor="purple.500"
          rounded="full"
          width="90px"
        />
      </Flex>
      <Box px={5}>
        <form onSubmit={handleSubmit} className="form">
          <Input
            w="400px"
            border="none"
            fontSize="12"
            type="file"
            onChange={onSelectFile}
          />
          <Button
            disabled={selectedFile === undefined}
            colorScheme="blue"
            size="sm"
            type="submit"
          >
            Upload
          </Button>
        </form>
        <Text as={"em"} fontSize="12">
          Minimum square image size: 200px x 200px
        </Text>
      </Box>
      <div className="App">
        {/* <form onSubmit={handleSubmit} className="form">
          <input type="file" />
          <button type="submit">Upload</button>
        </form> */}
        {!imgUrl && (
          <div className="outerbar">
            <div className="innerbar" style={{ width: `${progresspercent}%` }}>
              <Progress value={progresspercent} size="xs" colorScheme="pink" />
            </div>
          </div>
        )}
        {/* {imgUrl && <img src={imgUrl} alt="uploaded file" height={200} />} */}
      </div>
      <ProfileInfo
        display={display}
        setDisplay={setDisplay}
        editProfile={editProfile}
      />
    </Box>
  );
};

export default ViewProfile;

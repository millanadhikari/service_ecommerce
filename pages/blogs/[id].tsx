import { Box } from "@chakra-ui/react";
import { useState } from "react";
import FullBlog from "../../components/Blogs/SingleBlog/FullBlog";
import Navbar from "../../components/Entry/Navbar";

const BlogDetail = () => {
  const [isLoading, setLoading] = useState<Boolean>(false);

  return (
    <Box>
    <Navbar/>
      <FullBlog />
    </Box>
  );
};

export default BlogDetail;

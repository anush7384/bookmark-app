import styled from "styled-components";

const bookmarkImage: string =
  require("../../utils/Images/bookmark_image.svg").default;

const CardDiv = styled.div`
  width: 25%;
  height: 98%;
  @media screen and (max-width: 1100px) {
    width: 30%;
  }
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  border: 0.5px solid #e2e4e7;
`;
const ImageDiv = styled.div`
  width: 90%;
  height: 53%;
  margin-top: 4%;
  margin-left: 5%;
  border:1px solid red;
`;
const MidDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 12%;
  width: 90%;
  margin-left: 5%;
  border: 1px solid green;
`;
const DescDiv = styled.div`
  height: 25%;
  width: 90%;
  margin-left: 5%;
  border: 1px solid red;
  overflow: auto;
`;
const Image = styled.img`
  width:100%;
  height: 100%;
  border-radius: 10px;
`;

interface BookmarkPropsType {
  bookmark: any;
}

const Bookmark = (props: BookmarkPropsType) => {
  return (
    <CardDiv>
      <ImageDiv>
        <Image
          src={
            // props.bookmark.imageUrl
            // props.bookmark.imageUrl === ""
            //   ? 
              bookmarkImage
            //   : props.bookmark.imageUrl
          }
        />
      </ImageDiv>
      <MidDiv>{props.bookmark.name}</MidDiv>
      <DescDiv>{props.bookmark.description}</DescDiv>
    </CardDiv>
  );
};

export default Bookmark;

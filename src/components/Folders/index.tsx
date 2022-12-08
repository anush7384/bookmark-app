import Folder from "../Folder/index";
import { useGetState } from "../../hooks/index";

interface propsType {
  getBookmark: (id: string, name: string) => any;
}
const Folders = (props: propsType) => {
  let { folderName } = useGetState();
  const showBookmarkHandler = (id: string, name: string) => {
    props.getBookmark(id, name);
  };
  const { folders } = useGetState();
  return (
    <>
      {folders.map((folder: any) => {
        return (
          <Folder
            folder={folder}
            key={folder.id}
            selected={folderName}
            showBookmark={showBookmarkHandler}
          />
        );
      })}
    </>
  );
};

export default Folders;

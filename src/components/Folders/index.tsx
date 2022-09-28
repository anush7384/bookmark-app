import Folder from "../Folder/index";

interface propsType {
  foldersArray: any[];
  getBookmark: (id: string) => any;
}
const Folders = (props: propsType) => {
  return (
    <>
      {props.foldersArray.map((folder: any) => {
        return (
          <div
            key={folder.id}
            onClick={() => {
              props.getBookmark(folder.id);
            }}
          >
            <Folder folder={folder} />
          </div>
        );
      })}
    </>
  );
};

export default Folders;

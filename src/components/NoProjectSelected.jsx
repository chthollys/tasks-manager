import noProjectImage from "../assets/no-projects.png";
import Header2 from "./fragments/Header2";
import Paragraph2 from "./fragments/Paragraph2";
import Button from "./fragments/Button";

function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="mx-auto h-16 w-16 object-contain"
      />
      <Header2 colorScheme={"lighter"}>No Project Selected</Header2>
      <Paragraph2 colorScheme={"lighter"} className="mb-4 text-stone-400">
        Select a project or get started with a new one
      </Paragraph2>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create a new project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;

import OzoneOverTime from "./plots/OzoneOverTime";
import OzoneOverSolar from "./plots/OzoneOverSolar";

function PageContent({ width }) {
  return (
    <div>
      <OzoneOverTime width={width} />
      <OzoneOverSolar width={width} />
    </div>
  );
}

export default PageContent;

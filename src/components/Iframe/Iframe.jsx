import StyleContainer from "./iframe.styles";
const Iframe = () => {
  return (
    <StyleContainer>
        <div>
            <iframe
            title="Report Section"
            src="https://app.powerbi.com/view?r=eyJrIjoiMmQ4YzAyMTUtMjlkYy00YzhlLWE4YTctMjlhNWQ2ZTYxNzVkIiwidCI6ImU0MWE3NmQ5LTYyNTEtNGU4OC04NzY2LTMzNTEyY2QwMDM3ZCJ9"
            frameBorder="0"
            allowFullScreen="true"
            ></iframe>
        </div>
    </StyleContainer>
  );
};

export default Iframe;

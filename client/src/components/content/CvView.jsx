const pdf = `${import.meta.env.BASE_URL}mahder-kassaw-cv.pdf`;

function CvView() {
  return (
    <div className="cv">
      <div className="cv-actions">
      </div>
      <iframe className="cv-frame" src={pdf} title="CV" />
    </div>
  );
}

export default CvView;

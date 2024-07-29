import MaxWidthWrapper from "./MaxWidthWrapper";

export default function HeroSection() {
  return (
    <MaxWidthWrapper>
      <h1 className="text-4xl font-bold mb-4 mx-4 text-center mt-4">
        Brain Tumor Prediction
      </h1>
      <p className="text-lg mb-8 mx-4 text-center">
        Our project leverages <span className="text-blue-400 font-semibold">advanced machine learning algorithms</span> to predict brain tumors. It accurately detects various types, including <span className="text-blue-400 font-semibold">glioma</span>, <span className="text-blue-400 font-semibold">pituitary tumors</span>, and more. If no tumor is detected, it provides a <span className="text-blue-400 font-semibold">no tumor</span> result.
      </p>
      <div className="text-center mx-4">
        <p className="mb-4">Upload MRI Images to get started.</p>
        <p>
          This website showcases the trained model. For the complete project, visit: 
          <a href="https://github.com/Dheerajjha451/OncoScout" className="text-blue-700 font-semibold ml-1 underline">
            GitHub
          </a>
          <div className="grid grid-flow-col">
          <a href="https://fazier.com/launches/oncosight-4" target="_blank" rel="noopener noreferrer"><img src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=642&badge_type=featured" width="270" alt="Example Image" className="d-inline-block mt-3 p-3 rounded img-fluid col-span-1" /></a>
          <a href="https://fazier.com/launches/oncosight-4" target="_blank" rel="noopener noreferrer"><img src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=642&badge_type=daily" width="270" alt="Example Image" className="d-inline-block mt-3 p-3 rounded img-fluid col-span-2" /></a>
          <a href="https://fazier.com/launches/oncosight-4" target="_blank" rel="noopener noreferrer"><img src="https://fazier.com/api/v1/public/badges/embed_image.svg?launch_id=642&badge_type=weekly" width="270" alt="Example Image" className="d-inline-block mt-3 p-3 rounded img-fluid col-span-3" /></a>
          </div>
        </p>
      </div>
    </MaxWidthWrapper>
  );
}

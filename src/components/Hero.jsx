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
        </p>
      </div>
    </MaxWidthWrapper>
  );
}

import { useState, useEffect, useRef } from 'react';
import * as tmImage from '@teachablemachine/image';

const URL = "https://teachablemachine.withgoogle.com/models/5l2bPYiSZ/";

const Upload = () => {
  const [model, setModel] = useState(null);
  const [setMaxPredictions] = useState(0);
  const [imageURL, setImageURL] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const fileInputRef = useRef(null);

  const initModel = async () => {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';
    const model = await tmImage.load(modelURL, metadataURL);
    setModel(model);
    setMaxPredictions(model.getTotalClasses());
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result);
        predict(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const predict = async (imageSrc) => {
    if (model) {
      const image = new Image();
      image.src = imageSrc;
      image.onload = async () => {
        const prediction = await model.predict(image);
        setPredictions(prediction);
      };
    }
  };

  useEffect(() => {
    initModel();
  }, [initModel]);

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-lg p-4 bg-white shadow-lg rounded-lg mb-6 border-t text-center">
          <label htmlFor="upload-button" className="cursor-pointer">
            <div className="flex items-center justify-center bg-white text-blue-500 border border-blue-500 rounded-lg shadow-md px-4 py-2">
              Upload Image
            </div>
            <input
              id="upload-button"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={fileInputRef}
              className="hidden"
            />
          </label>
        </div>
        {imageURL && (
          <div className="flex flex-col items-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs mb-6">
              <img src={imageURL} alt="Uploaded" className="w-full h-auto object-cover" />
            </div>
            <div className="w-full max-w-xs bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-medium mb-4 text-center">Predictions</h2>
              <div id="label-container">
                {predictions.map((prediction, index) => (
                  <div key={index} className="flex justify-between mb-2">
                    <span>{prediction.className}</span>
                    <span className="font-semibold">{(prediction.probability * 100).toFixed(2)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;

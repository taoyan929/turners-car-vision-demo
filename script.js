// <!-- js -->

// Getting elements of page
const imageUpload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultDiv = document.getElementById("result");


// After chosed image, showing on the page
imageUpload.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  preview.src = URL.createObjectURL(file); //Show preview
  preview.style.display = "block";

  // Clear the previous result
  resultDiv.style.display = "none";;
});

// When click the button will call the custom vision API
analyzeBtn.addEventListener("click", async () => {
  const file = imageUpload.files?.[0];
  if (!file) {
    alert("Please select an image first");
    return;
  }
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `<p style="color:#888; font-style: italic;">🔄 Analyzing...</p>`;

  const endpoint =
    "https://eastus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/ee07a982-7a6e-469f-a946-17695655be29/classify/iterations/Iteration1/image";
  const predictionKey = "d070f70e6a5b47e19eff96c634eb08f1";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Prediction-Key": predictionKey,
        "Content-Type": "application/octet-stream",
      },
      body: file,
    });

    const data = await response.json();
    console.log(data);
    showResult(data);
  } catch (err) {
    console.error("Error");
    alert("prediction failed. Please check console.");
  }
});

//  Show the result
function showResult (data) {
    const predictions = data.predictions;
    if (!predictions || predictions.length === 0) {
        resultDiv.innerText = "No result from API";
        return;
    }

    const best = predictions[0];
    resultDiv.innerHTML = `
    <h3>Prediction Result</h3>
    <p><strong>Car Type:</strong> ${best.tagName}</p>
    <p><strong>Probability:</strong> ${(best.probability * 100).toFixed(2)}%</p>`
}
// JavaScript for Deepfake Detection Tool

document.getElementById('upload-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-upload');
    const uploadStatus = document.getElementById('upload-status');
    const analysisInfo = document.getElementById('analysis-info');
    const loadingSpinner = document.getElementById('loading-spinner');
    const analysisResult = document.getElementById('analysis-result');
    const resultText = document.getElementById('result-text');
    const recommendationSection = document.getElementById('recommendation-section');

    // Reset UI elements
    uploadStatus.textContent = '';
    analysisInfo.textContent = 'Starting analysis...';
    loadingSpinner.style.display = 'none';
    analysisResult.style.display = 'none';
    recommendationSection.style.display = 'none';

    // Validate file input
    if (!fileInput.files.length) {
        uploadStatus.textContent = 'Please select a file to upload.';
        return;
    }

    const file = fileInput.files[0];

    // Check file type (basic validation for demo purposes)
    if (!file.type.startsWith('video/') && !file.type.startsWith('image/')) {
        uploadStatus.textContent = 'Invalid file type. Please upload an image or video file.';
        return;
    }

    // Simulate uploading and analysis process
    loadingSpinner.style.display = 'block';
    uploadStatus.textContent = 'File uploaded successfully. Analyzing...';

    // Simulate a delay to mimic server processing
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Mock analysis logic for detecting deepfake
    const isDeepfake = Math.random() > 0.5; // Randomized for demonstration

    loadingSpinner.style.display = 'none';
    analysisResult.style.display = 'block';

    if (isDeepfake) {
        resultText.textContent = 'This file appears to be a deepfake. Proceed with caution.';
        analysisResult.style.backgroundColor = '#ffe0e0'; // Red alert background
    } else {
        resultText.textContent = 'This file appears to be authentic.';
        analysisResult.style.backgroundColor = '#e0ffe0'; // Green success background
    }

    // Show recommendations
    recommendationSection.style.display = 'block';
});

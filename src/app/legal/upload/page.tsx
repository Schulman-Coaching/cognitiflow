'use client';

import { useState } from 'react';

export default function LegalUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState('contract');
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);

    try {
      // Get presigned URL
      const urlResponse = await fetch('/api/legal/upload-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type,
          documentType
        })
      });

      const { uploadUrl, fileKey } = await urlResponse.json();

      // Upload to S3
      await fetch(uploadUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type
        }
      });

      setUploadResult({ success: true, fileKey });
    } catch (error) {
      console.error('Upload error:', error);
      setUploadResult({ success: false, error: 'Upload failed' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Document Upload</h1>
          <p className="text-gray-600 mb-8">Upload legal documents for secure storage and analysis</p>

          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Document Type
              </label>
              <select
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="contract">Contract</option>
                <option value="brief">Brief</option>
                <option value="evidence">Evidence</option>
                <option value="correspondence">Correspondence</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select File
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                accept=".pdf,.doc,.docx,.txt"
              />
              {file && (
                <p className="mt-2 text-sm text-gray-600">Selected: {file.name}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={!file || uploading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
            >
              {uploading ? 'Uploading...' : 'Upload Document'}
            </button>
          </form>

          {uploadResult && (
            <div className={`mt-6 p-4 rounded-md ${uploadResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <h3 className="font-semibold mb-2">
                {uploadResult.success ? 'Upload Successful' : 'Upload Failed'}
              </h3>
              {uploadResult.success && (
                <p className="text-sm text-gray-700">File key: {uploadResult.fileKey}</p>
              )}
              {uploadResult.error && (
                <p className="text-sm text-red-700">{uploadResult.error}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

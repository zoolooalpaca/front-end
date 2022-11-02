import http from '../http-common.js';

// eslint-disable-next-line require-jsdoc
class UploadFilesService {
  // eslint-disable-next-line require-jsdoc
  upload(file, onUploadProgress) {
    const formData = new FormData();

    formData.append('file', file);

    return http.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
  }

  // eslint-disable-next-line require-jsdoc
  getFiles() {
    return http.get('/files');
  }
}

export default new UploadFilesService();

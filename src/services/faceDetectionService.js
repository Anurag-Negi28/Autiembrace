import * as tf from '@tensorflow/tfjs';

export async function loadBlazeFaceModel() {
  try {
    const model = await tf.loadGraphModel('https://tfhub.dev/tensorflow/tfjs_model/blazeface/1/default/1');
    console.log('BlazeFace model loaded successfully');
    return model;
  } catch (error) {
    console.error('Failed to load BlazeFace model', error);
    throw error; // Rethrow the error to be handled by the caller
  }
}

const Algorithm = require('../models/algorithm');
const AlgorithmRepository = require('../repositories/algorithm_repo');

class AlgorithmService {
  static async createAlgorithm(algorithmData) {
    try {

      // Call the repository to create the algorithm in the database
      const createdAlgorithm = await AlgorithmRepository.createAlgorithm(algorithmData);



      return createdAlgorithm;
    } catch (error) {
      // Handle and rethrow errors or log them
      throw error;
    }
  }

  static async getAlgorithmById(id) {
    try {
      // Call the repository to retrieve the algorithm by ID
      const algorithm = await AlgorithmRepository.getAlgorithmById(id);

      if (!algorithm) {
        // Handle the case where the algorithm with the given ID is not found
        throw new Error('Algorithm not found');
      }

      

      return algorithm;
    } catch (error) {
      // Handle and rethrow errors or log them
      throw error;
    }
  }

  static async updateAlgorithm(id, updatedAlgorithmData) {
    try {
      
      // Call the repository to update the algorithm by ID
      const updatedAlgorithm = await AlgorithmRepository.updateAlgorithm(id, updatedAlgorithmData);

      if (!updatedAlgorithm) {
        // Handle the case where the algorithm with the given ID is not found
        throw new Error('Algorithm not found');
      }


      return updatedAlgorithm;
    } catch (error) {
    
      throw error;
    }
  }

  static async deleteAlgorithm(id) {
    try {
      // Call the repository to delete the algorithm by ID
      const deletedAlgorithm = await AlgorithmRepository.deleteAlgorithm(id);

      if (!deletedAlgorithm) {
        // Handle the case where the algorithm with the given ID is not found
        throw new Error('Algorithm not found');
      }


      return deletedAlgorithm;
    } catch (error) {
      
      throw error;
    }
  }
}

module.exports = AlgorithmService;

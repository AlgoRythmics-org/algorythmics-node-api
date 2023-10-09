const Algorithm = require('../models/algorithm');

class AlgorithmRepository {
  // Create a new algorithm document
  static async createAlgorithm(algorithmData) {
    try {
      const algorithm = new Algorithm(algorithmData);
      return await algorithm.save();
    } catch (error) {
      throw error;
    }
  }

  // Retrieve an algorithm by its ID
  static async getAlgorithmById(id) {
    try {
      return await Algorithm.findById(id).exec();
    } catch (error) {
      throw error;
    }
  }

  // Retrieve all algorithms
  static async getAllAlgorithms() {
    try {
      return await Algorithm.find().exec();
    } catch (error) {
      throw error;
    }
  }

  // Update an algorithm by its ID
  static async updateAlgorithm(id, algorithmData) {
    try {
      return await Algorithm.findByIdAndUpdate(id, algorithmData, { new: true }).exec();
    } catch (error) {
      throw error;
    }
  }

  // Delete an algorithm by its ID
  static async deleteAlgorithm(id) {
    try {
      return await Algorithm.findByIdAndDelete(id).exec();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AlgorithmRepository;

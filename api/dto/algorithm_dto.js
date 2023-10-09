class AlgorithmDTO {
    constructor(id, name, description, type, visualizationType, complexity, difficulty, implementationType, list) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.type = type;
      this.visualizationType = visualizationType;
      this.complexity = complexity;
      this.difficulty = difficulty;
      this.implementationType = implementationType;
      this.list = list;
    }
  }
  
  module.exports = AlgorithmDTO;
  
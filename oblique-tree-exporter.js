import _ from 'lodash';

/**
 * Example input: builder
 * Oblique tree:
 * root Hyperplane: Left = [115,0,52], Right = [0,99,0], Oblique Split: -0.699623 x[2] + 1.000000 x[4] + -0.464679 = 0
 * l Hyperplane: Left = [0,0,49], Right = [115,0,3], Oblique Split: -3.413128 x[1] + 1.000000 x[5] + 0.388552 = 0
 * lr Hyperplane: Left = [1,0,3], Right = [114,0,0], Oblique Split: -1.185092 x[1] + 1.000000 x[5] + 0.296273 = 0
 * lrl Hyperplane: Left = [0,0,3], Right = [1,0,0], Oblique Split: 1.000000 x[2] + -0.145013 = 0
 */


class Node {
    constructor(element) {
        this.split = element.split
        this.subTrainingSet = []
        this.left = null
        this.right = null
        this.leftCount = []
        this.rightCount = []
        this.leftTrainingSet = []
        this.rightTrainingSet = []
    }
}

class BivariateDecisionTree {

    constructor(builder) {
        this.trainingSet = builder.trainingSet;
        this.nodeTreePath = builder.nodeTreePath;
        this.decisionNodes = builder.decisionNodes;
        this.splitDistributions = builder.splitDistributions;
        this.root = this.build();
    }

    /**
     * Generate a bivariate decision tree with passed builder info
     * and return the root node of the tree.
     * @date 2022-06-18
     */
    build() {

    }

    /**
     * Export decision paths for training data.
     * @date 2022-06-18
     */
    export() {

    }
}
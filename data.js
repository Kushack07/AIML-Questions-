const rawData = `
Assignment 1
Introduction to Machine Learning
Prof. B. Ravindran
1. Which of the following is a supervised learning problem?
(a) Grouping people in a social network.
(b) Predicting credit approval based on historical data
(c) Predicting rainfall based on historical data
(d) all of the above
Sol. (b) and (c)
(a) does not have labels to indicate the groups. (b) and (c) have the correct answers for the
examples in the dataset.
2. Which of the following are classification problems? (multiple options may be correct)
(a) Predicting the temperature (in Celsius) of a room from other environmental features (such
as atmospheric pressure, humidity etc).
(b) Predicting if a cricket player is a batsman or bowler given his playing records.
(c) Predicting if a particular route between two points has traffic jam or not based on the
travel time of vehicles.
(d) Filtering of spam messages
Sol. (b),(c), (d)
3. Which of the following is a regression task? (multiple options may be correct)
(a) Predicting the monthly sales of a cloth store in rupees.
(b) Predicting if a user would like to listen to a newly released song or not based on historical
data.
(c) Predicting the confirmation probability (in fraction) of your train ticket whose current
status is waiting list based on historical data.
(d) Predicting if a patient has diabetes or not based on historical medical records.
(e) Predicting the gender of a human based on facial features.
Sol. (a) and (c)
4. Which of the following is an unsupervised task?
(a) Learning to play chess.
(b) Predicting if a new edible item is sweet or spicy based on the information of the ingredients, their quantities, and labels (sweet or spicy) for many other similar dishes.
(c) Grouping related documents from an unannotated corpus.
(d) all of the above
1
Sol. (c)
option (b) has the labels, so it is supervised task
5. Which of the following is a categorical feature?
(a) Number of legs of an animal
(b) Number of hours you study in a day
(c) Your weekly expenditure in rupees.
(d) Branch of an engineering student
(e) Ethnicity of a person
(f) Height of a person in inches
Sol. (d) and (e)
6. Let X and Y be a uniformly distributed random variable over the interval [0, 4] and [0, 6]
respectively. If X and Y are independent events, then compute the probability,
P(max(X, Y ) > 2)
(a) 1
6
(b) 5
6
(c) 2
3
(d) None of the above
Sol. (b)
P(max(X, Y ) > 2) = P(X > 2) + P(Y > 2) − P(X > 2 & Y > 2)
= 1/2 + 2/3 - 1/2 * 2/3 = 5/6
7. Let the trace and determinant of a matrix A be 4 and 3 respectively. The eigenvalues of A are
(a) 3+i sqrt(7)/2 , 3-i sqrt(7)/2
(b) 1, 3
(c) None of the above
(d) Can be computed only if A is a symmetric matrix.
(e) Can not be computed as the entries of the matrix A are not given.
Sol. (b)
Use of the facts that the trace and determinant of a matrix is equal to the sum and product
of its eigenvalues respectively. Using this
λ1 + λ2 = 4, λ1λ2 = 3
8. What happens when your model complexity increases? (multiple options may be correct)
(a) Model Bias decreases
(b) Model Bias increases
(c) Variance of the model decreases
(d) Variance of the model increases
Sol. (a) and (d)
9. Based on a survey, it was found that the probability that a student likes to play football was
0.25 and the probability that a student likes to play cricket is 0.43. It was also found that
the probability that a student likes to play both football and cricket is 0.12. What is the
probability that a student does not like to play either?
(a) 0.32
(b) 0.2
(c) 0.44
(d) 0.56
Sol. (c)
Given P(football) = 0.25, P(cricket) = 0.43, and P(football ∩ cricket) = 0.12.
We are interested in the probability of students who do not like to play either football or cricket.
10. Which of the following are true about bias and variance of overfitted and underfitted models?
(multiple options may be correct)
(a) Underfitted models have high bias.
(b) Underfitted models have low bias.
(c) Overfitted models have low variance.
(d) Overfitted models have high variance.
(e) none of these
Sol. (a), (d)
Assignment 2
Introduction to Machine Learning
Prof. B. Ravindran
1. In building a linear regression model for a particular data set, you observe the coefficient of
one of the features having a relatively high negative value. This suggests that
(a) This feature has a strong effect on the model (should be retained)
(b) This feature does not have a strong effect on the model (should be ignored)
(c) It is not possible to comment on the importance of this feature without additional information
Sol. (c)
A high magnitude suggests that the feature is important. However, it may be the case that
another feature is highly correlated with this feature and it’s coefficient also has a high magnitude with the opposite sign.
2. We have seen methods like ridge and lasso to reduce variance among the co-efficients. We can
use these methods to do feature selection also. Which one of them is more appropriate?
(a) Ridge
(b) Lasso
Sol. (b)
3. Given a set of n data points, (x1, y1)...(xn, yn), the best least squares fit f(x) is obtained by minimization of:
(a) Sum[yi − f(xi)]
(b) min(yi − f(xi))
(c) Sum[yi − f(xi)]^2
(d) max(yi − f(xi))
Sol. (c)
4. During linear regression, with regards to residuals, which among the following is true?
(a) Lower is better
(b) Higher is better
(c) Depends upon the data
(d) None of the above
Sol. (a)
Residuals refer to the errors in the model, hence, lower is better.
5. In the lecture on Multivariate Regression, you learn about using orthogonalization iteratively...
Can we re-use the coefficients computed
in iteration j for iteration j + 1 for zj−1?
(a) No.
(b) Yes. Since zj−1 is orthogonal to zj−l.
Sol. (b)
6. You decide to reduce the dimensionality of your data(N ×p) using Best Subset Selection. The
library you’re using has a function regress(X, Y ) that takes in X and Y and regresses Y on X.
What is the expected number of times regress(·, ·) will be called during your dimensionality
reduction?
(a) O(2N )
(b) O(2^p)
(c) O(N^p)
(d) O(p^2)
Sol. (b)
7. If the number of features is larger than the number of training data points, to identify a suitable
subset of the features for use with linear regression, we would prefer
(a) Forward stepwise selection
(b) Backward stepwise selection
Sol. (a)
8. Assume you have a five-dimensional input data for a three-class classification problem. Further
assume that all five dimensions of the input are independent to each other. In this scenario,
is it possible for linear regression using lasso to result in one or more coefficients to become
zero?
(a) Yes
(b) No
Sol. (a)
9. You are given the following five three-dimensional training data instances (along with onedimensional output)
x1 = 5, x2 = 7, x3 = 3, y = 4
x1 = 2, x2 = 4, x3 = 9, y = 8
x1 = 3, x2 = 8, x3 = 1, y = 2
x1 = 7, x2 = 7, x3 = 2, y = 3
x1 = 1, x2 = 9, x3 = 7, y = 8
Using K-nearest neighbour tech regression, query point (x1=5,x2=3,x3=4) for K=2?
(a) 3
(b) 2.5
(c) 3.5
(d) 2
Sol. (c)
10. For K=3?
(a) 4.66
(b) 5
(c) 3
(d) 3.5
Sol. (b)
Assignment 3
1. Which of the following is true about a logistic regression based classifier?
(a) The logistic function is non-linear in the weights
(b) The logistic function is linear in the weights
(c) The decision boundary is linear in the weights
(d) The decision boundary is non-linear in the weights
Sol. (a), (c)
2. For a binary classification problem, the decision boundary resulting from the use of logistic regression is
(a) linear
(b) sigmoid
(c) parabolic
(d) exponential
Sol. (a)
3. Consider the case where two classes follow Gaussian distribution centered at (-1,2) and (1,4) identity covariance ...
Which of the following is separating decision boundary using LDA?
(a) y - x = 3
(b) x + y = 3
(c) x + y = 6
(d) (b) and (c) are possible
(e) None of these
Sol. (b)
4. Consider the following relation... which relation?
(a) variable increases, so does dependent...
(e) dependent variable does not actually depend on independent
Sol. (e)
5. Given the following distribution... Dimensionality Reduction?
(a) Linear Discriminant Analysis
(b) Principal Component Analysis
Sol. (a)
6. In general, which is most resistant to gross outliers?
(a) QDA
(b) Linear Regression
(c) Logistic regression
(d) LDA
Sol. (c)
7. Relation Y = mX^2 + c. Is it possible to apply linear regression to estimate m and c?
(a) no
(b) yes
(c) insufficient information
Sol. (b)
8. In binary classification logistic regression assumes conditional y|x follows
(a) Bernoulli distribution
(b) binomial distribution
(c) normal distribution
(d) exponential distribution
Sol. (a)
9. Apply LDA, estimated covariance matrix?
(a) [1.875 0.3125]
(b) [2.5 0.4167]
(c) [1.875 0.3125]
(d) [2.5 0.4167; 0.4167 1.625]
Sol. (d)
Assignment 4
1. Can we use perceptron learning algorithm to build model with zero misclassification? XOR
(a) Yes
(b) No
(c) Depends on initial weights
Sol. (b)
2. Will SVM classifier always be same as perceptron on separable data?
(a) Yes
(b) No
Sol. (b)
3. Train linear regression model, report coefficients
(a) -1.2, 2.1, 2.2, 1
(b) 1, 1.2, 2.1, 2.2
(c) -1, 1.2, 2.1, 2.2
(d) 1, -1.2, 2.1, 2.2
(e) 1, 1.2, -2.1, -2.2
Sol. (c)
4. Train l2 regularized... as you increase lambda absolute values...
(a) increase
(b) first increase then decrease
(c) decrease
(d) first decrease then increase
(e) does not change
Sol. (c)
5. Train l2 regularized logistic regression, report accuracy
(a) 0.88
(b) 0.86
(c) 0.98
(d) 0.68
Sol. (c)
6. Train SVM classifier on iris ...
(a) 0.92, 69
(b) 0.88, 40
(c) 0.88, 69
(d) 0.98, 41
Sol. (d)
Assignment 5
1. Binary classification 3 indep variables hidden layer 3 neurons, count parameters:
(a) 16
(b) 21
(c) 81
(d) 64
Sol. (a)
2. Sampled marks, find MLE for mean
(a) 54.2
(b) 67.75
(c) 50
(d) Information not sufficient for estimation
Sol. (c)
3. Neural network logical function:
(a) OR
(b) AND
(c) NAND
(d) None of above
Sol. (a)
4. Evaluate neural network output
(a) 0.6710
(b) 0.9617
(c) 0.6948
(d) 0.7052
(e) None of these
Sol. (d)
5. Which statement is false:
(a) The chances of overfitting decrease with Increasing the number of hidden nodes...
Sol. (a)
6. Consider function f1 and f2. Which is correct?
(a) 0 < b < a
(b) 0 < a < b
(c) a < b < 0
(d) b < a < 0
Sol. (c)
7. Backpropagation df/dw2:
(a) 0.150
(b) -0.25
(c) 0.125
(d) 0.098
Sol. (d)
8. Backpropagation w2 after one update:
(a) 0.4197
(b) -0.4197
(c) 0.5625
(d) -0.5625
Sol. (a)
9. ANN vs SVM true:
(a) ANN error surface multiple local minima
(b) ANN lands on different minima
(c) ANN cant learn some classes, SVM can
(d) ANN Uses gradient descent, SVM convex optimization
Sol. (a), (b) and (d)
Assignment 6
1. What is specified at any non-leaf node in decision tree?
(a) Class of instance
(b) Data value description
(c) Test specification
(d) Data process description
Sol. (c)
2. Multi-class classification... generalization error...
(a) error due to bias increases
(b) error due to bias decreases
(c) error due to variance increases
(d) error due to variance decreases
Sol. (b) & (c)
3. Reduced error pruning... new responses
(a) 21.6, 40, 61.6
(b) 7.2; 10; 8.8
(c) 3, 4, 7
(d) depends on tree height
Sol. (b)
4. Classifiers do not require modifications for multi-class?
(a) decision trees
(b) logistic regression
(c) support vector machines
(d) k nearest neighbors
Sol. (a), (d)
5. Profitable as target, which attribute select as root?
(a) price
(b) maintenance
(c) capacity
(d) airbag
Sol. (b)
6. Value of cross entropy when splitting on capacity?
(a) 0.7973
(b) 0.8684
(c) 0.8382
(d) 0.7688
Sol. (c)
7. How would variance be affected by limiting height?
(a) Variance may increase with tree length H
(b) Variance may decrease
(c) Unaffected
Sol. (a)
8. In which situations is it appropriate to introduce new category 'Missing'?
(a) Operator attending distress call
(b) Attendant spilled coffee
(c) Warehouse flames
(d) Nurse finds urgent
Sol. (a),(d)
Assignment 7
1. Compute recall
(a) 0.73
(b) 0.7
(c) 0.6
(d) 0.67
Sol. (c)
2. Huge class imbalance, which metric?
(a) Accuracy
(b) Precision
(c) Recall
(d) F-Score
Sol. (d)
3. Designing an experiment, consider:
(a) Floor/Ceiling Effects
(b) Order Effects
(c) Sampling Bias
Sol. (a), (b) and (c)
4. Which are true?
(a) Precision = TP/TP+FP
(b) Recall = TP/TP+FN
(c) Accuracy formula
Sol. (a), (b)
5. ROC plot axes?
(c) True Positive Rate, False Positive Rate
Sol. (c)
6. How does bagging help?
(a) If independent inefficient
(b) helps reduce variance
(c) If fully correlated inefficient
(d) helps reduce bias
Sol. (b), (c)
7. Which method among bagging and stacking for limited training data?
(d) Stacking, because each classifier is trained on all of the available data
Sol. (d)
8. Committee Machines and Stacking
(a) Committee Machines special cases of 2-layer
(d) Committee Machines are less powerful
Sol. (a), (d)
Assignment 8
1. Bagging helps in designing better classifiers?
(c) If correlated, inefficient.
(d) It helps reduce variance
Sol. (c), (d)
2. Random forest m < p:
(b) decreasing m reduces correlation
(c) increasing m increases individual performance
Sol. (b) and (c)
3. Bad classifier worst performance ensemble?
(c) Bagging
Sol. (c)
4. Bayesian Network false property:
(b) Contains cycles
Sol. (b)
5. Bayes rule probability computation
(c) 0.609
Sol. (c)
6. Can boosting and bagging be applied to regression?
(d) yes, yes
Sol. (d)
7. Boosting missclassified weights:
(a) increased
Sol. (a)
8. Ensemble classifiers true:
(b) bagging can be trained in parallel
(c) adaboost sensitive to noise
(e) weak learners
(f) all points used
Sol. (b), (c), (e), (f)
9. Graphical model false statements:
(a) A independent of B when C known
(b) D independent of A when C known
Sol. (a), (b)
10. Inferred causality?
(e) none of the above can be inferred
Sol. (e)
Assignment 9
1. Bayesian network claims:
(b) Manish is correct and Trisha is incorrect
Sol. (b)
2. Claims:
(a) Both correct
Sol. (a)
3. Probability assignment
(e) 0.009216
Sol. (e)
4. Probability assignment g=1
(d) 0.047
Sol. (d)
5. Claim H:
(d) Manish is correct and Trisha is incorrect
Sol. (d)
6. Markov blanket not in variable 3:
(b) 8
(c) 2
(d) 5
(g) 7
Sol. (b), (c), (d) and (g)
7. Markov Claims:
(b) Trina is incorrect and Manish is correct.
Sol. (b)
8. Markov network factorization
(e) image E
Sol. (e)
9. More compact?
(b) No
Sol. (b)
10. Effect on D:
(a) A
(h) I
(i) J
`;

function parseQuestions(text) {
  const parts = text.split(/Assignment \d+/);
  const questionsList = [];
  
  parts.forEach((part) => {
    if(!part.trim()) return;
    
    // Split by digits followed by a period and space
    const qMatches = part.split(/\n\d+\.\s/);
    if(qMatches.length < 2) return;
    
    for(let i=1; i<qMatches.length; i++) {
      let qTextOrig = qMatches[i];
      let solMatch = qTextOrig.split(/\nSol\.\s+(.*)/);
      
      let qBody = solMatch[0];
      let solutionText = "";
      let answerMatch = "";
      
      if(solMatch.length > 2) {
        answerMatch = solMatch[1];
        solutionText = solMatch.slice(1).join('\\n').trim();
      } else {
        answerMatch = "See Solution.";
      }
      
      // Parse options
      let optionsLinesList = qBody.split(/\n\([a-z]\)/);
      let questionHtml = optionsLinesList[0].trim();
      let optionsList = [];
      
      let letterIndex = 'a'.charCodeAt(0);
      for(let j=1; j<optionsLinesList.length; j++) {
        let optLetter = String.fromCharCode(letterIndex);
        optionsList.push('(' + optLetter + ') ' + optionsLinesList[j].trim());
        letterIndex++;
      }
      
      if(optionsList.length === 0) {
        optionsList.push("(a) Option A");
        optionsList.push("(b) Option B");
      }

      questionsList.push({
        id: questionsList.length + 1,
        question: questionHtml,
        options: optionsList,
        answer: answerMatch.trim(),
        solution: "Solution: " + solutionText
      });
    }
  });
  return questionsList;
}

export const mcqs = parseQuestions(rawData);

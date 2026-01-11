import React from "react";

const EndScreen = ({ stats, onRestart }) => {
  const { score, correct, wrong, skipped, totalQuestions, timeSpent } = stats;

  const accuracy = totalQuestions > 0 ? ((correct / totalQuestions) * 100).toFixed(1) : 0;
  const questionsPerMinute = ((totalQuestions / timeSpent) * 60).toFixed(1);

  // Determine performance level
  const getPerformanceLevel = () => {
    if (score < 0) return { level: "Needs Practice", color: "danger", icon: "😅", message: "Keep trying! Pattern recognition takes time to develop." };
    if (score < 50) return { level: "Beginner", color: "warning", icon: "🌱", message: "You're getting the hang of it! Practice makes perfect." };
    if (score < 100) return { level: "Average", color: "info", icon: "👍", message: "Solid performance! You understand the basics well." };
    if (score < 150) return { level: "Good", color: "success", icon: "⭐", message: "Great job! Your logical reasoning is strong." };
    if (score < 200) return { level: "Very Good", color: "success", icon: "🌟", message: "Excellent work! You're a pattern recognition pro." };
    return { level: "Exceptional", color: "legendary", icon: "🏆", message: "Outstanding! You're a deductive logic master!" };
  };

  const performance = getPerformanceLevel();

  // Get accuracy rating
  const getAccuracyRating = () => {
    if (accuracy < 50) return { text: "Keep practicing", color: "danger" };
    if (accuracy < 70) return { text: "Good effort", color: "warning" };
    if (accuracy < 85) return { text: "Well done", color: "success" };
    return { text: "Outstanding", color: "legendary" };
  };

  const accuracyRating = getAccuracyRating();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="end-screen-card">
            {/* Header Section */}
            <div className="end-header">
              <div className="end-icon">{performance.icon}</div>
              <h2 className="end-title">Test Complete!</h2>
              <p className="end-subtitle">{performance.message}</p>
            </div>

            {/* Score Section */}
            <div className={`score-display ${performance.color}`}>
              <div className="score-label">Your Score</div>
              <div className="score-value">{score}</div>
              <div className="score-level">{performance.level}</div>
            </div>

            {/* Stats Grid */}
            <div className="end-stats-grid">
              <div className="end-stat-card">
                <div className="end-stat-icon">✓</div>
                <div className="end-stat-value">{correct}</div>
                <div className="end-stat-label">Correct</div>
              </div>

              <div className="end-stat-card">
                <div className="end-stat-icon">✗</div>
                <div className="end-stat-value">{wrong}</div>
                <div className="end-stat-label">Wrong</div>
              </div>

              <div className="end-stat-card">
                <div className="end-stat-icon">⊘</div>
                <div className="end-stat-value">{skipped}</div>
                <div className="end-stat-label">Skipped</div>
              </div>

              <div className="end-stat-card">
                <div className="end-stat-icon">🎯</div>
                <div className="end-stat-value">{totalQuestions}</div>
                <div className="end-stat-label">Total Puzzles</div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="performance-section">
              <h3 className="performance-header">Performance Metrics</h3>

              <div className="metric-row">
                <div className="metric-item">
                  <div className="metric-label">Accuracy Rate</div>
                  <div className="metric-bar-container">
                    <div
                      className={`metric-bar ${accuracyRating.color}`}
                      style={{ width: `${accuracy}%` }}
                    >
                      <span className="metric-bar-text">{accuracy}%</span>
                    </div>
                  </div>
                  <div className={`metric-rating ${accuracyRating.color}`}>
                    {accuracyRating.text}
                  </div>
                </div>
              </div>

              <div className="metric-row">
                <div className="metric-detail">
                  <span className="metric-detail-label">Speed</span>
                  <span className="metric-detail-value">{questionsPerMinute} puzzles/min</span>
                </div>
                <div className="metric-detail">
                  <span className="metric-detail-label">Time Used</span>
                  <span className="metric-detail-value">{Math.floor(timeSpent / 60)}:{String(timeSpent % 60).padStart(2, '0')}</span>
                </div>
              </div>
            </div>

            {/* Benchmark Section */}
            <div className="benchmark-section">
              <h3 className="benchmark-header">Score Benchmarks</h3>
              <div className="benchmark-list">
                <div className="benchmark-item">
                  <span className="benchmark-range">200+</span>
                  <div className="benchmark-bar legendary"></div>
                  <span className="benchmark-label">Exceptional</span>
                </div>
                <div className="benchmark-item">
                  <span className="benchmark-range">150-199</span>
                  <div className="benchmark-bar very-good"></div>
                  <span className="benchmark-label">Very Good</span>
                </div>
                <div className="benchmark-item">
                  <span className="benchmark-range">100-149</span>
                  <div className="benchmark-bar good"></div>
                  <span className="benchmark-label">Good</span>
                </div>
                <div className="benchmark-item">
                  <span className="benchmark-range">50-99</span>
                  <div className="benchmark-bar average"></div>
                  <span className="benchmark-label">Average</span>
                </div>
                <div className="benchmark-item">
                  <span className="benchmark-range">0-49</span>
                  <div className="benchmark-bar beginner"></div>
                  <span className="benchmark-label">Beginner</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="end-actions">
              <button className="btn-restart" onClick={onRestart}>
                <span>Play Again</span>
                <span className="btn-icon">🔄</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;

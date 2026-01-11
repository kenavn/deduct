import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="start-screen-card">
            <div className="start-header">
              <div className="start-icon">🧩</div>
              <h2>Welcome to Deductiva</h2>
              <p className="start-subtitle">Test Your Pattern Recognition & Logical Reasoning</p>
            </div>

            <div className="instructions-section">
              <h3 className="instruction-header">How to Play</h3>

              <div className="instruction-item">
                <div className="instruction-number">1</div>
                <div className="instruction-content">
                  <h4>Understand the Puzzle</h4>
                  <p>You'll see a sequence of 4 symbols at the top, followed by a question mark, and then a target sequence of 4 symbols at the bottom.</p>
                </div>
              </div>

              <div className="instruction-item">
                <div className="instruction-number">2</div>
                <div className="instruction-content">
                  <h4>Find the Transformation</h4>
                  <p>Your goal is to identify which transformation pattern (shown as numbers 1-4) will convert the top sequence into the target sequence.</p>
                </div>
              </div>

              <div className="instruction-item">
                <div className="instruction-number">3</div>
                <div className="instruction-content">
                  <h4>Choose Your Answer</h4>
                  <p>Select one of the three candidate transformations presented. Each number represents which symbol position moves to that slot.</p>
                </div>
              </div>

              <div className="instruction-item">
                <div className="instruction-number">4</div>
                <div className="instruction-content">
                  <h4>Example</h4>
                  <p>If you see transformation [2, 1, 4, 3], it means: position 2 → slot 1, position 1 → slot 2, position 4 → slot 3, position 3 → slot 4.</p>
                </div>
              </div>
            </div>

            <div className="rules-section">
              <h3 className="instruction-header">Scoring Rules</h3>
              <div className="rules-grid">
                <div className="rule-item success">
                  <span className="rule-icon">✓</span>
                  <span className="rule-label">Correct Answer</span>
                  <span className="rule-value">+10 points</span>
                </div>
                <div className="rule-item danger">
                  <span className="rule-icon">✗</span>
                  <span className="rule-label">Wrong Answer</span>
                  <span className="rule-value">-5 points</span>
                </div>
                <div className="rule-item warning">
                  <span className="rule-icon">⊘</span>
                  <span className="rule-label">Skip</span>
                  <span className="rule-value">-5 points</span>
                </div>
              </div>
            </div>

            <div className="challenge-info">
              <div className="challenge-stat">
                <span className="challenge-icon">⏱️</span>
                <div>
                  <div className="challenge-label">Time Limit</div>
                  <div className="challenge-value">5 Minutes</div>
                </div>
              </div>
              <div className="challenge-stat">
                <span className="challenge-icon">🎯</span>
                <div>
                  <div className="challenge-label">Difficulty</div>
                  <div className="challenge-value">Progressive</div>
                </div>
              </div>
            </div>

            <div className="start-button-container">
              <button className="btn-start" onClick={onStart}>
                <span>Start Test</span>
                <span className="btn-arrow">→</span>
              </button>
              <p className="start-hint">Click to begin your deductive challenge</p>
            </div>

            {/* Learn More Section */}
            <div className="learn-more-section">
              <h4 className="learn-more-header">Why Deductive Logic Matters</h4>
              <p className="learn-more-text">
                Deductive reasoning is a critical thinking skill that ensures logical certainty in problem-solving.
                Unlike other forms of reasoning, deduction guarantees accurate conclusions when premises are true—making
                it essential in mathematics, science, technology, and professional decision-making.
              </p>
              <a
                href="https://www.glassdoor.com/blog/guide/deductive-reasoning/"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-link"
              >
                Learn more about deductive reasoning →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;

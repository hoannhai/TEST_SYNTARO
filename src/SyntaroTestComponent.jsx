import React from 'react';

const SyntaroTestComponent = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🚀 SYNTARO Test Application</h1>
      <p>This component was created via GitHub API integration test.</p>
      <div style={{ margin: '20px 0' }}>
        <h3>✅ Features Tested:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✅ Repository Creation</li>
          <li>✅ File Creation via API</li>
          <li>✅ Multiple Commits</li>
          <li>✅ React Component Integration</li>
        </ul>
      </div>
      <p>
        <strong>Created:</strong> {new Date().toLocaleString()}
      </p>
    </div>
  );
};

export default SyntaroTestComponent;

// Metrics Collection System for ToDoPilot
class MetricsCollector {
  constructor() {
    this.metrics = {
      voiceCommands: {
        total: 0,
        successful: 0,
        failed: 0,
        byIntent: {},
        responseTimes: [],
        errors: []
      },
      tasks: {
        created: 0,
        completed: 0,
        edited: 0,
        deleted: 0,
        withDueDates: 0
      },
      performance: {
        averageResponseTime: 0,
        fallbackUsage: 0,
        apiCalls: 0,
        apiFailures: 0
      },
      user: {
        sessions: 0,
        voiceCommandsPerSession: 0,
        tasksPerSession: 0
      }
    };
    
    this.sessionStart = Date.now();
    this.currentCommandStart = null;
  }

  // Track voice command start
  startVoiceCommand(transcript) {
    this.currentCommandStart = Date.now();
    this.metrics.voiceCommands.total++;
    console.log(`🎤 Voice Command Started: "${transcript}"`);
  }

  // Track voice command success
  recordVoiceSuccess(intent, method = 'llm', responseTime = null) {
    if (this.currentCommandStart) {
      const actualResponseTime = responseTime || (Date.now() - this.currentCommandStart);
      this.metrics.voiceCommands.responseTimes.push(actualResponseTime);
      this.metrics.voiceCommands.successful++;
      
      // Track by intent
      if (!this.metrics.voiceCommands.byIntent[intent]) {
        this.metrics.voiceCommands.byIntent[intent] = 0;
      }
      this.metrics.voiceCommands.byIntent[intent]++;
      
      // Track method used
      if (method === 'fallback') {
        this.metrics.performance.fallbackUsage++;
      }
      
      console.log(`✅ Voice Command Success: ${intent} (${actualResponseTime}ms via ${method})`);
    }
    this.currentCommandStart = null;
  }

  // Track voice command failure
  recordVoiceFailure(error, transcript) {
    this.metrics.voiceCommands.failed++;
    this.metrics.voiceCommands.errors.push({
      error: error.message || error,
      transcript: transcript,
      timestamp: new Date().toISOString()
    });
    
    console.log(`❌ Voice Command Failed: ${error.message || error}`);
    this.currentCommandStart = null;
  }

  // Track task operations
  recordTaskCreated(hasDueDate = false) {
    this.metrics.tasks.created++;
    if (hasDueDate) {
      this.metrics.tasks.withDueDates++;
    }
    console.log(`📝 Task Created (Due Date: ${hasDueDate})`);
  }

  recordTaskCompleted() {
    this.metrics.tasks.completed++;
    console.log(`✅ Task Completed`);
  }

  recordTaskEdited() {
    this.metrics.tasks.edited++;
    console.log(`✏️ Task Edited`);
  }

  recordTaskDeleted() {
    this.metrics.tasks.deleted++;
    console.log(`🗑️ Task Deleted`);
  }

  // Track API calls
  recordApiCall(success = true) {
    this.metrics.performance.apiCalls++;
    if (!success) {
      this.metrics.performance.apiFailures++;
    }
  }

  // Calculate derived metrics
  calculateDerivedMetrics() {
    // Average response time
    if (this.metrics.voiceCommands.responseTimes.length > 0) {
      this.metrics.performance.averageResponseTime = 
        this.metrics.voiceCommands.responseTimes.reduce((a, b) => a + b, 0) / 
        this.metrics.voiceCommands.responseTimes.length;
    }

    // Success rate
    this.metrics.voiceCommands.successRate = 
      this.metrics.voiceCommands.total > 0 ? 
      (this.metrics.voiceCommands.successful / this.metrics.voiceCommands.total) * 100 : 0;

    // Session metrics
    const sessionDuration = Date.now() - this.sessionStart;
    this.metrics.user.sessions = 1;
    this.metrics.user.voiceCommandsPerSession = this.metrics.voiceCommands.total;
    this.metrics.user.tasksPerSession = this.metrics.tasks.created;
    this.metrics.user.sessionDuration = sessionDuration;
  }

  // Get current metrics
  getMetrics() {
    this.calculateDerivedMetrics();
    // Save to localStorage for dashboard access
    localStorage.setItem('todopilot-metrics', JSON.stringify(this.metrics));
    return this.metrics;
  }

  // Export metrics as JSON
  exportMetrics() {
    this.calculateDerivedMetrics();
    const dataStr = JSON.stringify(this.metrics, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `todopilot-metrics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  }

  // Display metrics in console
  displayMetrics() {
    this.calculateDerivedMetrics();
    console.log('📊 ToDoPilot Metrics:', this.metrics);
    
    // Create a simple metrics display
    const metricsDiv = document.createElement('div');
    metricsDiv.id = 'metrics-display';
    metricsDiv.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 12px;
      z-index: 10000;
      max-width: 300px;
      display: none;
    `;
    
    metricsDiv.innerHTML = `
      <h4>📊 Live Metrics</h4>
      <p><strong>Voice Commands:</strong> ${this.metrics.voiceCommands.successful}/${this.metrics.voiceCommands.total} (${this.metrics.voiceCommands.successRate.toFixed(1)}%)</p>
      <p><strong>Avg Response:</strong> ${this.metrics.performance.averageResponseTime.toFixed(0)}ms</p>
      <p><strong>Tasks Created:</strong> ${this.metrics.tasks.created}</p>
      <p><strong>Tasks Completed:</strong> ${this.metrics.tasks.completed}</p>
      <p><strong>Fallback Usage:</strong> ${this.metrics.performance.fallbackUsage}</p>
      <button onclick="this.parentElement.style.display='none'">Close</button>
    `;
    
    document.body.appendChild(metricsDiv);
    metricsDiv.style.display = 'block';
  }
}

// Global metrics instance
window.metrics = new MetricsCollector();

// Add keyboard shortcut to show metrics (Ctrl+M)
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 'm') {
    e.preventDefault();
    window.metrics.displayMetrics();
  }
});

// Add keyboard shortcut to export metrics (Ctrl+Shift+M)
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.shiftKey && e.key === 'M') {
    e.preventDefault();
    window.metrics.exportMetrics();
  }
});

console.log('📊 Metrics system loaded! Press Ctrl+M to view metrics, Ctrl+Shift+M to export');
